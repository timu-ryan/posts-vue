<template>
  <div class="app">
    <h1>Posts page</h1>
    <my-input
       v-model="searchQuery"
       placeholder="Search..."
    />
    <div class="add-btns">
      <my-button
        @click="showDialog"
        class="btn_create"
      >
        create post
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />

    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
  import PostForm from '@/components/PostForm'
  import PostList from '@/components/PostList'
  import axios from "axios";
  import MyInput from "@/components/UI/MyInput.vue";

  export default {
    components: {
      MyInput,
      PostForm, PostList,
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        sortOptions: [
          {value: 'title', name: 'by title'},
          {value: 'body', name: 'by content'},
        ]
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post)
        this.dialogVisible = false
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
      showDialog() {
        this.dialogVisible = true
      },
      async fetchPosts() {
        try {
          this.isPostsLoading = true;
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.posts = res.data
          this.isPostsLoading = false
        } catch (e) {
          alert(e.message)
        }
      }
    },
    mounted() {
      this.fetchPosts()
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
      },
      sortedAndSearchedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    watch: {

    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .app {
    padding: 0 10px;
    overflow-x: hidden;
  }

  .btn_create {
    margin: 10px 0;
  }

</style>

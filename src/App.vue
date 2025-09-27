<template>
  <div class="app">
    <h1>Posts page</h1>
    <my-button
      @click="showDialog"
      class="btn_create"
    >
      create post
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </my-dialog>
    <post-list
      :posts="posts"
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

  export default {
    components: {
      PostForm, PostList,
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostsLoading: false,
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
    margin: 0 10px;
  }

  .btn_create {
    margin: 10px 0;
  }

</style>

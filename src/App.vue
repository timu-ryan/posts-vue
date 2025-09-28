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
    <div ref="observer" class="observer"></div>
<!--    <div class="page__wrapper">-->
<!--      <div-->
<!--        v-for="pageNumber in totalPages"-->
<!--        :key="pageNumber"-->
<!--        class="page"-->
<!--        :class="{-->
<!--          'page_current': page === pageNumber-->
<!--        }"-->
<!--        @click="changePage(pageNumber)"-->
<!--      >-->
<!--        {{ pageNumber }}-->
<!--      </div>-->
<!--    </div>-->
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
        page: 1,
        limit: 10,
        totalPages: 0,
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
      // changePage(pageNumber) {
      //   this.page = pageNumber;
      // },
      async fetchPosts() {
        try {
          this.isPostsLoading = true;
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          })
          this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit);
          this.posts = res.data
        } catch (e) {
          alert(e.message)
        } finally {
          this.isPostsLoading = false;
        }
      },
      async loadMorePosts() {
        try {
          this.page += 1;
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          })
          this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit);
          this.posts = [...this.posts, ...res.data]
        } catch (e) {
          alert(e.message)
        }
      },
    },
    mounted() {
      this.fetchPosts()

      const options = {
        rootMargin: "0px",
        scrollMargin: "0px",
        threshold: 1.0,
      };
      const callback = (entries, observer) => {
        if(entries[0].isIntersecting && this.page < this.totalPages) {
          this.loadMorePosts();
        }
      }

      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer)
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
      // page() {
      //   this.fetchPosts()
      // }
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

  .page__wrapper {
    display: flex;
    margin: 15px 0;
    gap: 5px;
  }

  .page {
    padding: 10px;
    border: 1px solid gray;
  }

  .page_current {
    background-color: rgba(128, 128, 128, 0.5);
  }

  .observer {
    height: 30px;
    background: grey;
  }

</style>

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
    />
  </div>
</template>

<script>
  import PostForm from '@/components/PostForm'
  import PostList from '@/components/PostList'

  export default {
    components: {
      PostForm, PostList,
    },
    data() {
      return {
        posts: [
          {id: 1, title: 'JavaScript', body: 'a programming language'},
          {id: 2, title: 'Python', body: 'a programming language'},
          {id: 3, title: 'Go', body: 'a programming language'},
          {id: 4, title: 'C++', body: 'a programming language'},
        ],
        dialogVisible: false,
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
      }
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

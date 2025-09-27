<template>
  <div class="app">
    <post-form
      @create="createPost"
    />
    <post-list
      :posts="posts"
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
        title: '',
        body: '',
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post)
      },
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


</style>

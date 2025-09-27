<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Post creating</h4>
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        type="text"
        placeholder="Name"
        class="input"
      />
      <input
          v-bind:value="body"
          @input="body = $event.target.value"
        type="text"
        placeholder="Content"
        class="input"
      />
      <button
        class="btn"
        @click="createPost"
      >
        Create
      </button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Name: </strong>{{ post.title }}</div>
      <div><strong>Content: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
  export default {
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
      createPost() {
        const newPost = {
          id: Date.now(),
          title: this.title,
          body: this.body,
        }
        this.posts.push(newPost)
        this.title = ''
        this.body = ''
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

  .post {
    padding: 15px;
    border: 1px solid gray;
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
  }

  .btn {
    margin-top: 10px;
    margin-bottom: 40px;
    padding: 10px;
    background: transparent;
    border: 1px solid gray;

    align-self: end;
  }

  .input {
    border: 1px solid gray;
    padding: 10px;
    width: 100%;
    margin-top: 10px;
  }
</style>

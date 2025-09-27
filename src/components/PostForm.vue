<template>
  <form @submit.prevent>
    <h4>Post creating</h4>
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Name"
    />
    <my-input
        v-model="post.body"
        type="text"
        placeholder="Content"
    />
    <my-button
        @click="createPost"
        class="btn_form"
    >
      Create
    </my-button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid gray;
  }

  .btn_form {
    align-self: end;
    margin: 10px 0;
  }
</style>
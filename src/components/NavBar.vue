<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue site</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')">About</my-button>
      <my-button @click="$router.push('/store')">Store</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar {
    height: 60px;
    display: flex;
    border-bottom: 1px solid gray;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }

  .navbar__btns {
    display: flex;
    gap: 10px;
  }
</style>
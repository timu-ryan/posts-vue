<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
}
</script>

<style scoped>
  .btn {
    padding: 10px;
    background: transparent;
    border: 1px solid gray;
  }

  .btn:hover {
    cursor: pointer;
  }
</style>
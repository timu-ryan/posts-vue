<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input"/>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style scoped>
  .input {
    border: 1px solid gray;
    padding: 10px;
    width: 100%;
    margin-top: 10px;
  }

</style>
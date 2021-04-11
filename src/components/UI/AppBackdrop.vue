<template>
  <div class="backdrop" @click="$emit('close')"></div>
</template>

<script>
export default {
  name: "AppBackdrop",
  emits: ['close']
}
</script>

<style scoped lang="scss">
  .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
    width: 100vw;
    height: 100vh;
    background-color: rgba(#1F2020, 0.7);
  }
</style>
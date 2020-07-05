<template functional>
  <router-link to="/" class="logo">
    <img
      v-if="color === 'light' || typeof color === 'undefined'"
      src="/images/logo-default.png"
      alt=""
    >
    <img
      v-else
      src="/images/logo-dark.png"
      alt=""
    >
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    color: { type: String, default: 'light' }
  }
}

</script>

<style lang="scss"></style>

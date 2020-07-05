<template functional>
  <div v-if="color === 'light' || typeof color === 'undefined'">
    Logo Default
  </div>
  <div v-else>
    Logo Dark
  </div>
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

<template>
  <section class="not-found">
    <div class="container">
      <p
        v-if="error.statusCode === '404'"
        class="not-found__text"
      >
        Not Found
      </p>

      <p
        v-else
        class="not-found__text"
      >
        Error
      </p>

      <nuxt-link to="/">
        Go back Home
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

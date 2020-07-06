<template>
  <section class="post">
    <div class="container">
      Post
    </div>
  </section>
</template>

<script>
export default {
  name: 'Post',
  validator ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style lang="scss" scoped>
.post {
  display: block;
}
</style>

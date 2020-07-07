<template>
  <div class="view-post">
    <div class="container">
      <time class="post__date" :datetime="post.date | format_datetime">{{ post.date | format_date }}</time>

      <h1 class="post__title">
        {{ post.title }}
      </h1>

      <img :src="post.image" alt="">

      <div class="post__content">
        {{ post.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewPost',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

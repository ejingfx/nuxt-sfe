<template>
  <div class="view-post">
    <time class="post__date" :datetime="post.date | format_datetime">{{ post.date | format_date }}</time>

    <h1 class="post__title">
      {{ post.title }}
    </h1>

    <div class="post__image">
      <div :style="showPlaceholder(post.image)" />
    </div>

    <div class="post__content">
      {{ post.content }}
    </div>

    <section class="section">
      <h2 class="section__title section__title--comment">
        COMMENT
      </h2>
      <div class="section__content">
        <ul class="view__comment-list">
          <li
            v-for="comment in post.comments"
            :key="comment.postId"
            class="view__comment-item"
          >
            <Comment :comment="comment">
              <h3
                slot="content"
                class="comment__content"
              >
                {{ comment.content }}
              </h3>
            </Comment>
          </li>
        </ul>
      </div>

      <div class="section__footer">
        <CommentForm />
      </div>
    </section>
  </div>
</template>

<script>
import mixins from '../plugins/mixins'
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'

export default {
  name: 'ViewPost',
  components: {
    Comment,
    CommentForm
  },
  mixins: [mixins],
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

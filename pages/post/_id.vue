<template>
  <article class="post">
    <div class="container">
      <div class="post__actions clearfix">
        <div class="post__actions-list">
          <client-only v-if="user.isAuth">
            <Button
              modifier="btn--basic"
              text="Edit Post"
              @click.native="goto(post.id)"
            />
          </client-only>
        </div>
      </div>

      <time class="post__date" :datetime="post.date | format_datetime">{{ post.createdAt | format_date }}</time>

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
              :key="comment.id"
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
      </section>
    </div>
  </article>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { GET_POST } from '../../graphql'
import mixins from '../../plugins/mixins'
import Comment from '../../components/Comment'

export default {
  name: 'Id',
  components: {
    Comment
  },
  mixins: [mixins],
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  async fetch (init = false) {
    await this.$apollo.query({
      query: GET_POST,
      fetchPolicy: 'no-cache',
      variables: {
        id: parseInt(this.$route.params.id)
      }
    })
      .then((res) => {
        this.post = { ...res.data.post }
      })
  },
  data () {
    return {
      post: {}
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters({
      auth: 'user/getIsAuth'
    })
  },
  mounted () {
    this.$logger(this.$store.getters.getIsAuth)
  },
  methods: {
    goto (id) {
      const params = { params: { id } }
      this.$router.push({ name: 'post-edit-id', ...params })
    }
  }
}
</script>

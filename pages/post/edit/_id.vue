<template>
  <div class="post-detail">
    <Breadcrumbs :text="getPost.title" :url="`/${getPost.id}`" />

    <div class="container">
      <div class="post-detail__comments">
        <CommentForm
          :post-id="getPost.id"
          @addComment="fetchPost()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { GET_POST } from '../../../graphql'
// import Button from '../../../components/Button'
import Breadcrumbs from '../../../components/Breadcrumbs'
// import ViewPost from '../../../components/ViewPost'
import CommentForm from '../../../components/CommentForm'

export default {
  name: 'Post',
  components: {
    Breadcrumbs,
    CommentForm
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  async fetch () {
    await this.$apollo.query({
      query: GET_POST,
      fetchPolicy: 'no-cache',
      variables: {
        id: parseInt(this.$route.params.id)
      }
    })
      .then((response) => {
        const post = response.data.post
        this.post = { ...this.post, ...post }
      })
  },
  data () {
    return {
      edit: false,
      post: {}
    }
  },
  computed: {
    getPost () { return this.post },
    getEdit () { return this.edit }
  },
  methods: {
    async fetchPost () {
      await this.$apollo.query({
        query: GET_POST,
        fetchPolicy: 'no-cache',
        variables: {
          id: parseInt(this.$route.params.id)
        }
      })
        .then((response) => {
          const post = response.data.post
          this.post = { ...this.post, ...post }
        })
    },
    getPostId () {
      return this.$route.params.id
    },
    goto (id) {
      const params = { params: { id } }
      this.$router.push({ name: 'post-edit-id', ...params })
    },
    cancel (e) {
      const confirm = window.confirm('Are your sure you want cancel & discard changes?')
      if (confirm) {
        this.edit = false
      }
    },
    save (e) {
      this.$logger(this.getPost)
    }
  }
}
</script>

<style lang="scss">
.post {
  display: block;
}
.post__date {
  font-family: $montserrat;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.2em;
}
.post__title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.65;
  letter-spacing: 0.1em;
  margin-top: 30px;
}
.post__content {
  font-size: 18px;
  line-height: 2.5;
  padding: 50px 0 125px;
  border-bottom: 1px solid $color-cod-gray;
}
</style>

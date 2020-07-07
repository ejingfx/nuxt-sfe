<template>
  <section class="post">
    <Breadcrumbs :text="getPost.title" :url="`/${getPost.id}`" />

    <div class="container">
      <div class="post__actions clearfix">
        <div class="post__actions-list">
          <Button
            v-if="!edit"
            modifier="btn--basic"
            text="Edit Post"
            @click.native="edit = true"
          />
          <Button
            v-if="edit"
            modifier="btn--basic"
            text="Save Post"
            @click.native="save($event)"
          />
          <Button
            v-if="edit"
            modifier="btn--basic"
            text="Cancel"
            @click.native="cancel($event)"
          />
        </div>
      </div>

      <ViewPost
        v-if="!edit"
        :post="getPost"
      />
    </div>
  </section>
</template>

<script>
import Button from '../components/Button'
import Breadcrumbs from '../components/Breadcrumbs'
import ViewPost from '../components/ViewPost'

export default {
  name: 'Post',
  components: {
    Button,
    Breadcrumbs,
    ViewPost
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      edit: false,
      post: {
        title: 'サンプルテキストサンプル ルテキストサンプルテキ ストサンプルテキストサンプル ルテキスト ',
        image: 'https://picsum.photos/1000/1000',
        date: new Date(),
        content: `
          ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
          ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
        `,
        comments: [
          {
            postId: 1,
            content: 'ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。',
            createdAt: new Date()
          },
          {
            postId: 2,
            content: 'new new new comment',
            createdAt: new Date()
          }
        ]
      }
    }
  },
  computed: {
    getPost () { return this.post },
    getEdit () { return this.edit }
  },
  methods: {
    cancel (e) {
      const confirm = window.confirm('Are your sure you want cancel & discard changes?')
      if (confirm) {
        this.edit = false
      }
    },
    save (e) {
      this.$logger('save...')
    }
  }
}
</script>

<style lang="scss" scoped>
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

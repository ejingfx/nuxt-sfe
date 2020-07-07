<template>
  <section class="post">
    <Breadcrumbs :text="getPost.title" :url="`/${getPost.id}`" />

    <ViewPost
      v-if="edit"
      :post="getPost"
    />
  </section>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs'
import ViewPost from '../components/ViewPost'

export default {
  name: 'Post',
  components: {
    Breadcrumbs,
    ViewPost
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      edit: true,
      post: {
        title: 'サンプルテキストサンプル ルテキストサンプルテキ ストサンプルテキストサンプル ルテキスト ',
        image: '',
        date: new Date(),
        content: `
          ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
          
          ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。
        `
      }
    }
  },
  computed: {
    getPost () { return this.post },
    getEdit () { return this.edit }
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

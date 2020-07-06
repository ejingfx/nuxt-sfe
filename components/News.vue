<template>
  <section class="section">
    <div class="container">
      <div class="section__heading">
        <h2 class="section__title">
          News
        </h2>
      </div>
      <div class="section__content">
        <div class="news__list">
          <ul class="news__list-inner row">
            <li
              v-for="post in getPosts"
              :key="post.id"
              class="news__list-item col-lg--4"
            >
              <CardPost :post="post">
                <h3 slot="title">
                  {{ post.title }}
                </h3>
              </CardPost>
            </li>
          </ul>
        </div>
      </div>

      <div class="section__footer">
        <Button text="LOAD MORE" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../components/Button'
import CardPost from '../components/CardPost'

export default {
  name: 'News',
  components: {
    Button,
    CardPost
  },
  data () {
    return {
      posts: [
        {
          id: 1,
          image: '',
          title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト',
          content: 'lorem ipsum',
          createdAt: new Date()
        },
        {
          id: 2,
          image: '',
          title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト',
          content: 'lorem ipsum',
          createdAt: new Date()
        },
        {
          id: 3,
          image: '',
          title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト',
          content: 'lorem ipsum',
          createdAt: new Date()
        },
        {
          id: 4,
          image: '',
          title: 'サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト',
          content: 'lorem ipsum',
          createdAt: new Date()
        }
      ]
    }
  },
  computed: {
    getPosts () { return this.posts }
  }
}
</script>

<style lang="scss" scoped>
.news {
  display: block;
}
.news__list {
  margin: 0 -24px;
}
.news__list-inner {
  position: relative;
}
.news__list-item {
  padding: 0 24px;
  margin-bottom: 60px;
}
</style>

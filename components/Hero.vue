<template>
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__content">
        <client-only>
          {{ posts }}
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_PAGINATED_POSTS } from '../graphql'
export default {
  name: 'Hero',
  data () {
    return {
      posts: []
    }
  },
  apollo: {
    posts: {
      query: GET_PAGINATED_POSTS,
      variables: {
        pagination: {
          limit: 3,
          offset: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  display: table;
  vertical-align: middle;
  width: 100%;
  height: calc(100vh - 100px);
  border: 1px solid red;
}
.hero__inner {
  display: table-cell;
  vertical-align: middle;
}
.hero__content {
  text-align: center;
  margin: 0 auto;
}
.hero__list {}
.hero__list-item {}
</style>

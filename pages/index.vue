<template>
  <div class="home">
    <News />
  </div>
</template>

<script>
import News from '../components/News'

export default {
  name: 'Home',
  components: {
    News
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 150px;
}
</style>

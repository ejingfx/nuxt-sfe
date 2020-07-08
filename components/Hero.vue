<template>
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__content">
        hero
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
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

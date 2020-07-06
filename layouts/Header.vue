<template>
  <header class="header">
    <div class="container">
      <div class="header__left">
        <Logo color="dark" />
      </div>

      <div class="header__right">
        menu
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '../components/Logo'

export default {
  name: 'AppHeader',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  display: block;
  width: 100%;
  max-height: 100px;
  padding: 34px 0;
  background-color: $color-white;
  z-index: $zmax + 2;
}
.header__left {
  display: inline-block;
}
.header__right {
  float: right;
}
</style>

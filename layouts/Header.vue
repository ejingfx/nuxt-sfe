<template>
  <header class="header">
    <div class="container">
      <div class="header__left">
        <Logo color="dark" />
      </div>

      <div class="header__right">
        <Button
          text="LOGIN"
          modifier="btn--borderless btn--basic"
          @click.native="$emit('toggle', [$event, 'login'])"
        />
        <Button
          text="LOGOUT"
          modifier="btn--borderless btn--basic"
          @click.native="$emit('toggle', [$event, 'logout'])"
        />
      </div>
    </div>
  </header>
</template>

<script>
import Button from '../components/Button'
import Logo from '../components/Logo'

export default {
  name: 'AppHeader',
  components: {
    Button,
    Logo
  },
  props: {
    auth: {
      type: Boolean,
      default: null
    }
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

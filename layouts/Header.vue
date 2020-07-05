<template>
  <header class="header">
    <div class="header-left">
      <Logo />
    </div>

    <div class="header-right">
      menu
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

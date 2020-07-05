<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <Logo color="dark" />
        <p>
          サンプルテキストサンプル ルテキストサンプルテキストサ<br>
          ンプルテキストサンプル ルテキスト
        </p>
      </div>
    </div>

    <div class="footer__bottom">
      <small class="footer__copyright">
        Copyright©2007-2019 Blog Inc.
      </small>
    </div>
  </footer>
</template>

<script>
import Logo from '../components/Logo'
export default {
  name: 'AppFooter',
  components: {
    Logo
  }
}
</script>

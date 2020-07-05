<template>
  <div class="app">
    <Header />

    <main>
      main
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

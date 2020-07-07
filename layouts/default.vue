<template>
  <div class="app">
    <Header
      :auth="getAuth"
      @toggle="toggle($event)"
    />
    <Modal
      v-if="showModal && getModal === 'login'"
    >
      <h2
        slot="title"
        class="modal__title"
      >
        LOGIN
      </h2>
      <LoginForm slot="content" />
    </Modal>

    <Modal
      v-if="showModal && getModal === 'register'"
    >
      <h2
        slot="title"
        class="modal__title"
      >
        REGISTER
      </h2>
    </Modal>

    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import Header from './Header'
import Footer from './Footer'
import Modal from './Modal'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    Modal,
    LoginForm
  },
  data () {
    return {
      showModal: true,
      modal: 'login',
      auth: false
    }
  },
  computed: {
    getShowModal () { return this.showModal },
    getAuth () { return this.auth },
    getModal () { return this.modal }
  },
  methods: {
    modalHandler (id) {
    },
    toggle (e) {
      const target = e[1]
      switch (target) {
        case 'login': {
          this.modal = 'login'
          this.showModal = !this.showModal
          break
        }
        default: {
          this.modal = 'register'
          this.showModal = !this.showModal
          break
        }
      }
      this.$logger(target)
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: block;
}
</style>

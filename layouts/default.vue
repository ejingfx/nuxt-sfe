<template>
  <div class="app">
    <Header
      :show="getShowModal"
      @toggle="toggle($event)"
    />
    <Modal
      v-if="showModal && getModal === 'login'"
    >
      <h2 slot="title" class="modal__title">
        LOGIN
      </h2>

      <LoginForm
        slot="content"
        @toggle="toggle([$event, 'swap'])"
        @close="showModal = false"
      />
    </Modal>

    <Modal v-if="showModal && getModal === 'register'">
      <h2 slot="title" class="modal__title">
        REGISTER
      </h2>

      <RegisterForm
        slot="content"
        @toggle="toggle([$event, 'swap'])"
      />
    </Modal>

    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import Header from './Header'
import Footer from './Footer'
import Modal from './Modal'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    Modal,
    LoginForm,
    RegisterForm
  },
  data () {
    return {
      showModal: false,
      modal: 'login'
    }
  },
  computed: {
    ...mapState(['user']),
    getShowModal () { return this.showModal },
    getAuth () { return this.auth },
    getModal () { return this.modal }
  },
  created () {
    this.checkToken()
  },
  methods: {
    checkToken () {
      if (process.browser && localStorage.getItem('nuxt-spa') !== null) {
        const LS = JSON.parse(localStorage.getItem('nuxt-spa'))
        this.$store.commit('user/login', LS)
      } else if (process.browser && localStorage.getItem('nuxt-spa') === null) {
        const data = { isAuth: false, token: '' }
        localStorage.setItem('nuxt-spa', JSON.stringify(data))
      }
    },
    toggle (e) {
      const target = e[1]
      switch (target) {
        case 'login': {
          this.modal = 'login'
          this.showModal = !this.showModal
          break
        }
        case 'logout': {
          this.$logger('logout...')
          this.showModal = false
          this.$store.commit('user/logout')
          if (process.browser) {
            const data = { isAuth: false, token: '' }
            localStorage.setItem('nuxt-spa', JSON.stringify(data))
          }
          break
        }
        case 'register': {
          this.modal = 'register'
          this.showModal = !this.showModal
          break
        }
        case 'swap': {
          this.modal = this.getModal === 'login' ? 'register' : 'login'
          break
        }
        default: {
          this.modal = 'login'
          this.showModal = !this.showModal
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: block;
}
</style>

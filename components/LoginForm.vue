<template>
  <form
    action="/"
    novalidate
    class="form form--login"
    @submit.prevent="submit($event)"
  >
    <div class="form__inner">
      <div class="form__block">
        <EmailInput
          v-model="$v.form.email.$model"
          :field="'email'"
          :modifier="formModifier($v.form.email)"
          type="email"
          label="Email"
          @blur="$v.form.email.$touch()"
        />
      </div>

      <div class="form__block">
        <PasswordInput
          v-model="$v.form.password.$model"
          :field="'password'"
          :modifier="formModifier($v.form.password)"
          type="password"
          label="Password"
          @blur="$v.form.password.$touch()"
        />
      </div>

      <div class="form__block">
        <Button
          text="LOGIN"
          modifier="btn--fluid"
          @click.native="submit($event)"
        />
      </div>
    </div>

    <div class="form__action">
      <p class="form__message">
        No account yet? <strong @click="$emit('toggle')">REGISTER HERE</strong>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators'
import { AUTHENTICATE } from '../graphql'
import Button from './Button'
import Input from './Input'

export default {
  name: 'LoginForm',
  components: {
    Button,
    EmailInput: Input,
    PasswordInput: Input
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  computed: {
    getForm () { return this.form }
  },
  methods: {
    formModifier (validation) {
      if (validation.$error) {
        return 'input--error'
      } else if (validation.$dirty) {
        return 'input--dirty'
      }
    },
    setToken (token) {
      const data = { isAuth: true, token }
      if (process.browser) {
        localStorage.setItem('nuxt-spa', JSON.stringify(data))
        this.$store.commit('user/login', data)
        this.$emit('close')
      }
    },
    submit (e) {
      event.preventDefault()

      if (!this.$v.$invalid) {
        this.$logger('submit...')
        this.$apollo.mutate({
          mutation: AUTHENTICATE,
          variables: {
            email: this.form.email,
            password: this.form.password
          }
        })
          .then((res) => {
            this.$logger(res.data.authenticate !== '')
            if (res.data.authenticate !== '') {
              this.setToken(res.data.authenticate)
            }
          })
          .catch((err) => {
            this.$logger(err)
          })
      }
    }
  }
}
</script>

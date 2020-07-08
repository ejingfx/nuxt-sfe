<template>
  <form
    action="/"
    novalidate
    class="form form--register"
    @submit.prevent="submit($event)"
  >
    <div class="form__inner">
      <div class="form__block">
        <Input
          field="email"
          type="email"
          label="Email"
        />
      </div>

      <div class="form__block">
        <Input
          field="password"
          type="password"
          label="Password"
        />
      </div>

      <div class="form__block">
        <Input
          field="confirm"
          type="password"
          label="Confirm Password"
        />
      </div>

      <div class="form__block">
        <Button
          text="REGISTER"
          modifier="btn--fluid"
          @click.native="submit($event)"
        />
      </div>
    </div>

    <div class="form__action">
      <p class="form__message">
        Already have an account? <strong @click="$emit('toggle')">LOGIN HERE</strong>
      </p>
    </div>
  </form>
</template>

<script>
import Button from './Button'
import Input from './Input'

export default {
  name: 'RegisterForm',
  components: {
    Button,
    Input
  },
  methods: {
    submit (e) {
      this.$logger('submit...')
    }
  }
}
</script>

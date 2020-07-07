<template>
  <form
    action="/"
    novalidate
    class="form form--login"
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
        <Button
          text="LOGIN"
          modifier="btn--fluid"
          @click.native="submit($event)"
        />
      </div>
    </div>

    <div class="form__action">
      <p class="form__message">
        No account yet? <strong @click="$emit('toggle', [$event, 'register'])">REGISTER HERE</strong>
      </p>
    </div>
  </form>
</template>

<script>
import Button from './Button'
import Input from './Input'

export default {
  name: 'LoginForm',
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

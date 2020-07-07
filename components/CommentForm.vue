<template>
  <form
    novalidate
    action="/"
    method="post"
    class="form"
  >
    <div class="form__inner">
      <div class="form__block">
        <Textarea
          field="content"
          modifier="textarea--comment-form"
          placeholder="Write comment"
        />
      </div>
      <div class="form__block clearfix">
        <div class="form__action">
          <Button
            text="SUBMIT"
            modifier="btn--comment-submit"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Textarea from './Textarea'
import Button from './Button'

export default {
  name: 'CommentForm',
  components: {
    Button,
    Textarea
  }
}
</script>

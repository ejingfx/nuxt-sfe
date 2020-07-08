<template>
  <div class="post">
    <div class="container">
      <form
        id="form"
        action="/"
        novalidate
        method="post"
        class="form form--create-post"
        enctype="multipart/form-data"
      >
        <div class="form__inner">
          <div class="form__block">
            <div class="post__actions clearfix">
              <div class="post__actions-list">
                <Button modifier="btn--basic" text="Save Post" type="submit" @click.native="submit($event)" />
                <Button modifier="btn--basic" text="Cancel" @click.native="cancel($event)" />
              </div>
            </div>
            <time class="form__date" :datetime="new Date() | format_datetime">{{ new Date() | format_date }}</time>
          </div>

          <div class="form__block">
            <Textarea
              v-model="form.title"
              field="title"
              modifier="textarea--title"
              placeholder="Title"
            />
          </div>

          <div class="form__block">
            <ImageUpload
              field="image"
              @change="selectImage($event)"
            />
          </div>

          <div class="form__block">
            <Textarea
              v-model="form.content"
              field="content"
              modifier="textarea--create-post"
              placeholder="Content"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import Textarea from './Textarea'
import ImageUpload from './ImageUpload'

export default {
  name: 'CreatePostForm',
  components: {
    ImageUpload,
    Textarea
  },
  data () {
    return {
      form: {
        title: '',
        image: '',
        content: ''
      }
    }
  },
  computed: {
    getForm () { return this.form }
  },
  mounted () {
    this.formData = new FormData()
  },
  methods: {
    selectImage (e) {
      const file = e.target.files[0]
      this.$logger(file)
    },
    cancel (e) {
      if (!_.isEmpty(this.getForm.title) || !_.isEmpty(this.getForm.content) || !_.isEmpty(this.getForm.image)) {
        const confirm = window.confirm('Are your sure you want cancel & discard changes?')
        if (confirm) {
          this.$router.push({ name: 'index' })
        }
      } else {
        this.$logger('cancel...')
        this.$router.push({ name: 'index' })
      }
    },
    submit (e) {
      e.preventDefault()
      this.$logger('submit...')
    }
  }
}
</script>

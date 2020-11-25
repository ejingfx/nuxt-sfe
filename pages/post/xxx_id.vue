<template>
  <form
    class="post"
    @submit.prevent="submit($event)"
  >
    <div class="post__actions clearfix">
      <div class="post__actions-list">
        <template v-if="edit">
          <Button
            modifier="btn--basic"
            text="Save Post"
            @click.native="$emit('toggle'); save($event)"
          />
          <Button
            modifier="btn--basic"
            text="Cancel"
            @click.native="cancel($event)"
          />
        </template>
      </div>
    </div>
    <time class="post__date" :datetime="post.date | format_datetime">{{ post.date | format_date }}</time>

    <div class="post__heading">
      <h1
        id="title"
        class="post__title post__title--edit"
        contenteditable
        placeholder="Title"
        @input="updateField($event, 'title')"
        @blur="$v.form.title.$touch()"
      >
        {{ post.title }}
      </h1>
    </div>

    <div
      v-if="!isNull(post.image)"
      class="post__image"
    >
      <div :style="{ backgroundImage: `url(${post.image})` }" />
    </div>

    <div class="post__upload">
      <label for="upload" class="upload">
        <input
          id="upload"
          name="upload"
          type="file"
          accept="image/*"
          class="upload__input"
          @change="fileChange($event)"
        >
        <div class="upload__preview">
          <div
            v-show="getPreview"
            id="preview"
            class="upload__preview-img uploads"
          />
          <div
            v-show="!getPreview"
            :style="{ backgroundImage: `url(${post.image})` }"
            class="upload__preview-img"
          />
        </div>

        <div class="upload__btn">
          <span>UPLOAD IMAGE</span>
        </div>
      </label>
    </div>

    <div
      class="post__content post__content--edit"
      contenteditable
      placeholder="Content"
      @input="updateField($event, 'content')"
      @blur="$v.form.content.$touch()"
    >
      {{ post.content }}
    </div>

    <section class="section">
      <h2 class="section__title section__title--comment">
        COMMENT
      </h2>
      <div class="section__content">
        <ul class="view__comment-list">
          <li
            v-for="comment in post.comments"
            :key="comment.id"
            class="view__comment-item"
          >
            <Comment :comment="comment">
              <h3
                slot="content"
                class="comment__content"
              >
                {{ comment.content }}
              </h3>
            </Comment>
          </li>
        </ul>
      </div>
    </section>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'
import { required } from 'vuelidate/lib/validators'
import { GET_POST } from '../../graphql'
import Comment from '../../components/Comment'

export default {
  name: 'Id',
  components: {
    Comment
  },
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  async fetch (init = false) {
    await this.$apollo.query({
      query: GET_POST,
      fetchPolicy: 'no-cache',
      variables: {
        pagination: this.getPagination
      }
    })
      .then((response) => {
        this.posts.push(...response.data.posts)
        if (!init && response.data.posts.length < 6) {
          this.max = true
        }
      })
  },
  data () {
    return {
      post: {},
      preview: false,
      form: {},
      temp: {}
    }
  },
  computed: {
    ...mapState(['user']),
    getForm () { return this.form },
    getTemp () { return this.temp },
    getPreview () { return this.preview },
    getUpload () { return this.upload }
  },
  mounted () {
    this.$logger('asfdasf')
  },
  validations: {
    form: {
      title: { required },
      content: {}
    }
  },
  methods: {
    isNull (data) {
      return _.isNull(data) || data === ''
    },
    fileChange (e) {
      const reader = new FileReader()
      reader.onload = function () {
        document.getElementById('upload').src = reader.result
        document.getElementById('preview')
          .setAttribute('style', `background-image: url(${reader.result})`)
      }

      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0])
        this.preview = true
      }
    },
    updateField (e, field) {
      this.form[field] = e.target.textContent
    },
    // async save (e) {
    //   e.preventDefault()
    //
    //   if (!this.$v.form.$invalid) {
    //     await this.$apollo.mutate({
    //       mutation: UPDATE_POST,
    //       variables: {
    //         post: {
    //           id: this.post.id,
    //           title: this.getForm.title,
    //           content: this.getForm.content,
    //           image: this.getForm.image
    //         }
    //       },
    //       context: {
    //         headers: {
    //           authorization: this.user.token ? this.user.token : ''
    //         }
    //       }
    //     })
    //       .then((res) => {
    //         this.$emit('save')
    //       })
    //       .catch((err) => { this.$logger(err) })
    //   }
    // },
    cancel (e) {
      const confirm = window.confirm('Are you sure you want to discard all changes?')
      if (confirm) {
        this.$emit('toggle')
      }
    }
  }
}
</script>

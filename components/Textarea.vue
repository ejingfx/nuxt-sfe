<template>
  <label
    class="textarea"
    :for="field"
    :class="modifier"
  >
    <textarea
      :id="field"
      :name="field"
      :placeholder="placeholder"
      class="textarea__tag"
    />
  </label>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    field: {
      type: String,
      default: null,
      required: true
    },
    modifier: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea {
  display: block;
  width: 100%;
}
.textarea__tag {
  display: block;
  width: 100%;
  font-family: $montserrat;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.1em;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 0;
  border: 1px solid $color-cod-gray;
  padding: 5px 10px;
  height: 60px;
  outline: none;
  resize: none;
}
.textarea--post-form {
  .textarea__tag {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.65;
    letter-spacing: 0.1em;
    min-height: 394px;
  }
}
.textarea--comment-form {
  .textarea__tag {
    font-size: 19px;
    font-weight: 300;
    line-height: 1.65;
    letter-spacing: 0.1em;
    min-height: 200px;
    padding: 40px;
    color: $color-cod-gray;

    &::placeholder {
      font-size: 18px;
      font-style: italic;
      color: transparentize($color-cod-gray, 0.5);
    }
  }
}
</style>

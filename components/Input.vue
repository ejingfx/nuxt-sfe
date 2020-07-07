<template>
  <label
    :for="field"
    class="input"
    :modifier="modifier"
  >
    <span
      v-if="label !== ''"
      class="input__label"
    >{{ label }}</span>

    <input
      :id="field"
      :name="field"
      :type="type"
      class="input__tag"
    >
  </label>
</template>

<script>
export default {
  name: 'Input',
  props: {
    field: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    modifier: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
.input,
.input__tag {
  display: block;
  width: 100%;
}
.input__label {
  display: inline-block;
  font-family: $montserrat;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.1em;
  margin-bottom: 5px;
  cursor: pointer;
}
.input__tag {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0;
  border: 1px solid $color-cod-gray;
  padding: 5px 10px;
  height: 60px;
  outline: none;
}
</style>

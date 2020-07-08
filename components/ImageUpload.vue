<template>
  <label
    :for="field"
    class="image-upload"
  >
    <div class="image__thumb">
      <div />
    </div>
    <input
      :id="field"
      :name="field"
      accept="image/*"
      type="file"
      class="image-upload__tag"
      @change="$emit('change', $event)"
    >
    <div class="image-upload__btn">
      <span>UPLOAD IMAGE</span>
    </div>
  </label>
</template>

<script>
export default {
  name: 'ImageUpload',
  props: {
    field: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.image-upload {
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  background-color: $color-alto;
  cursor: pointer;
}
.image-upload__tag {
  display: none;
}
.image-upload__btn {
  display: table;
  vertical-align: middle;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 260px;
  min-height: 70px;
  background-color: $color-cod-gray;
  text-align: center;

  span {
    display: table-cell;
    vertical-align: middle;
    font-family: $montserrat;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: $color-white;
  }
}
.image-upload__thumb {
  position: relative;
  border: 1px solid red;

  div {
    position: relative;
    background-position: center;
    background-size: cover;
    padding-top: 48.21%;
  }
}
.image-upload__ {}
</style>

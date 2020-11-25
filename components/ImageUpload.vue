<template>
  <label
    :for="field"
    class="image-upload"
  >
    <div
      v-show="getImgData !== ''"
      id="preview"
      class="image-upload__thumb"
    />
    <input
      v-show="getImgData === ''"
      :id="field"
      :name="field"
      accept="image/*"
      type="file"
      class="image-upload__tag"
      @change="preview($event)"
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
  },
  data () {
    return {
      imgData: ''
    }
  },
  computed: {
    getImgData () { return this.imgData }
  },
  methods: {
    setImgData (e, data) {
      this.imgData = data
      this.$emit('change', [e, data])
    },
    preview (e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      const preview = document.getElementById('preview')
      const setImgData = this.setImgData

      reader.addEventListener('load', function (e) {
        preview.style.backgroundImage = `url(${reader.result})`
        setImgData(e, reader.result)
      }, false)

      if (file) {
        reader.readAsDataURL(file)
      }
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
  padding-top: 42.85%;
  background-position: center;
  background-size: cover;

  div {
    position: relative;
    background-position: center;
    background-size: cover;
    padding-top: 48.21%;
  }
}
.image-upload__ {}
</style>

import _ from 'lodash'

export default {
  methods: {
    showPlaceholder (image, background = true) {
      const noImage = require('../static/images/no-image.jpg')
      const placeholder = { backgroundImage: `url(${noImage})` }

      switch (background) {
        case true: {
          if (_.isNull(image) || _.isEmpty(image)) {
            return placeholder
          } else {
            return { backgroundImage: `url(${image})` }
          }
        }
        default: {
          if (_.isNull(image)) {
            return noImage
          } else {
            return image
          }
        }
      }
    }
  }
}

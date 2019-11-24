import css from './utility-tr.css.yml'

export default {
  name: 'utility-tr',

  props: {
    utility: {
      type: Object,
      required: true,
    },
    cssValue: {
      type: String,
      required: true,
    },
    variantName: {
      required: false,
      default: null,
    },
    variantKey: {
      type: String,
      required: false,
      default: null,
    },
  },

  computed: {
    prefix() {
      return this.utility.prefix || this.utility.name
    },

    hasVariants() {
      return this.variantName !== null
    },

    variants() {
      return Array.isArray(this.variantName)
        ? this.variantName
        : [this.variantName]
    },

    properties() {
      if (this.hasVariants) {
        return this.variants.map((v) => {
          return this.utility.name.replace(/border-style/, `border-${v}-style`)
        })
      } else {
        return [this.utility.name]
      }
    },

    value() {
      return this.cssValue.value || this.cssValue.name || this.cssValue
    },

    className() {
      let name = []
      if (this.utility.prefix !== null) name.push(`${this.prefix}-`)
      if (this.variantKey) name.push(`${this.variantKey}-`)
      name.push(this.cssValue.name ? this.cssValue.name : this.cssValue)
      return name.join('')
    },
  },

  data() {
    return {
      css: css,
    }
  },
}

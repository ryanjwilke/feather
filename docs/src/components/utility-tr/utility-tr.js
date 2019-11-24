import css from './utility-tr.css.yml'

export default {
  name: 'utility-tr',

  props: ['utility', 'css-value', 'variant-name', 'variant-key'],

  computed: {
    prefix() {
      return this.utility.prefix || this.utility.name
    },

    property() {
      return this.variantKey
        ? this.utility.name.replace(
            /border-style/,
            `border-${this.variantName}-style`
          )
        : this.utility.name
    },

    value() {
      return this.cssValue.value || this.cssValue.name || this.cssValue
    },

    cssClassName() {
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

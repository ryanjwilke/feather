import css from './utility-item.css.yml'

export default {
  name: 'utility-item',

  props: ['utility'],

  computed: {
    url() {
      return `/utilities/${this.slug}`
    },

    slug() {
      return this.utility.slug || this.utility.name
    },
  },

  data() {
    return {
      css: css,
    }
  },
}

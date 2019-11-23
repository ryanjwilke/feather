import css from './utility-item.css.yml'

export default {
  name: 'utility-item',

  props: ['utility'],

  computed: {
    itemClasses() {
      return [css.item, this.active ? css.item__active : css.item__inactive]
    },

    linkClasses() {
      return [css.link, this.active ? css.link__active : css.link__inactive]
    },

    active() {
      return this.$route.params.name == this.slug
    },

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

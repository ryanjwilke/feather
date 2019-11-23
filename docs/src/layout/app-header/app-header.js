import css from './app-header.css.yml'

export default {
  name: 'app-header',

  methods: {
    keyup(event) {
      this.$root.$emit('search', event.target.value)
    },
  },

  data() {
    return {
      css: css,
    }
  },
}

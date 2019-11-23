import css from './app-header.css.yml'

export default {
  name: 'app-header',

  methods: {
    submit() {
      let routeTo = `/utilities/${this.$refs.search.value}`
      if (this.$route.path != routeTo) this.$router.push(routeTo)
      this.$refs.search.blur()
    },

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

import css from './show.css.yml'
import utilities from '@/components/utility-list/utilities.yml'

export default {
  name: 'utilities-show',

  computed: {
    title() {
      return this.utility.name.replace(/-/g, ' ')
    },
  },

  methods: {
    findUtility(name) {
      this.utility = this.utilities.find((item) => item.name == name)
      if (!this.utility) this.$router.push('/404')
    },

    className(value) {
      let name = []
      if (this.utility.prefix) name.push(`${this.utility.prefix}-`)
      name.push(value.name)
      return name.join('')
    },
  },

  beforeMount() {
    this.findUtility(this.$route.params.name)
  },

  beforeRouteUpdate(to, from, next) {
    this.findUtility(to.params.name)
    next()
  },

  data() {
    return {
      css: css,
      utility: null,
      utilities: utilities,
    }
  },
}

import css from './show.css.yml'
import groups from '@/components/utility-list/utilities.yml'

export default {
  name: 'utilities-show',

  computed: {
    title() {
      return this.utility.name.replace(/-/g, ' ')
    },
  },

  methods: {
    findUtility(name) {
      this.utility = this.utilities.find((item) => {
        return item.slug == name || item.name == name
      })
      if (!this.utility) this.$router.push('/404')
    },

    className(value) {
      let name = []
      if (this.utility.prefix) name.push(`${this.utility.prefix}-`)
      name.push(value.name ? value.name : value)
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
      groups: groups,
      utility: null,
      utilities: [].concat(...groups.map((g) => g.utilities)),
    }
  },
}

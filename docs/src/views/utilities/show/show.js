import css from './show.css.yml'
import groups from '@/data/utilities.yml'
import UtilityTable from '@/components/utility-table/utility-table.vue'

export default {
  name: 'utilities-show',

  components: { UtilityTable },

  computed: {
    title() {
      return this.utility.name.replace(/-/g, ' ')
    },

    subtitle() {
      return this.utility.description
        ? this.utility.description
        : `Utilities for controlling an element's ${this.title}.`
    },
  },

  methods: {
    findUtility(name) {
      this.utility = this.utilities.find((item) => {
        return item.slug == name || item.name == name
      })
      if (!this.utility) this.$router.push('/404')
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

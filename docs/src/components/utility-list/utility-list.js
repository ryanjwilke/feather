import css from './utility-list.css.yml'
import groups from './utilities.yml'
import UtilityItem from '@/components/utility-item/utility-item.vue'

export default {
  name: 'utility-list',

  components: { UtilityItem },

  computed: {
    filteredUtilities() {
      if (!this.query) return this.utilities

      return this.utilities.filter((item) => {
        return item.name.includes(this.query)
      })
    },
  },

  methods: {
    search(query) {
      this.query = query
    },
  },

  beforeMount() {
    this.$root.$on('search', this.search)
  },

  data() {
    return {
      css: css,
      query: null,
      groups: groups,
      utilities: [].concat(...groups.map((g) => g.utilities)),
    }
  },
}

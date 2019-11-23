import css from './utility-list.css.yml'
import groups from './utilities.yml'
import UtilityItem from '@/components/utility-item/utility-item.vue'

export default {
  name: 'utility-list',

  components: { UtilityItem },

  computed: {
    filteredGroups() {
      if (this.query == '' || this.query == null) return this.groups

      return this.groups.filter((group) => {
        let utilities = group.utilities.filter((item) => {
          return item.name.includes(this.query)
        })
        if (utilities.length > 0) return group
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

import css from './utility-list.css.yml'
import groups from './utilities.yml'
import UtilityGroup from '@/components/utility-group/utility-group.vue'

export default {
  name: 'utility-list',

  components: { UtilityGroup },

  computed: {
    filteredGroups() {
      if (this.query == '' || this.query == null) return this.groups

      return this.groups.map((group) => {
        return {
          name: group.name,
          utilities: group.utilities.filter((i) => i.name.includes(this.query)),
        }
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
    }
  },
}

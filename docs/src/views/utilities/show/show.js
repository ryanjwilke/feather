import css from './show.css.yml'
import groups from '@/components/utility-list/utilities.yml'
import UtilityTr from '@/components/utility-tr/utility-tr.vue'

export default {
  name: 'utilities-show',

  components: { UtilityTr },

  computed: {
    title() {
      return this.utility.name.replace(/-/g, ' ')
    },

    prefix() {
      return this.utility.prefix || this.utility.name
    },
  },

  methods: {
    findUtility(name) {
      this.utility = this.utilities.find((item) => {
        return item.slug == name || item.name == name
      })
      if (!this.utility) this.$router.push('/404')
    },

    variantKey(index, vIndex, vName) {
      return `${index}-${vIndex}-${vName}`
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

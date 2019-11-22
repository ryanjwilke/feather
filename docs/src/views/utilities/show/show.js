import css from './show.css.yml'
import utilities from '@/components/utility-list/utilities.yml'

export default {
  name: 'utilities-show',

  computed: {
    title() {
      return this.utility.name.replace(/-/, ' ')
    },
  },

  methods: {
    className(value) {
      let name = []
      if (this.utility.prefix) name.push(`${this.utility.prefix}-`)
      name.push(value.name)
      return name.join('')
    },
  },

  beforeMount() {
    this.utility = this.utilities.find(
      (item) => item.name == this.$route.params.name
    )
  },

  data() {
    return {
      css: css,
      utility: null,
      utilities: utilities,
    }
  },
}

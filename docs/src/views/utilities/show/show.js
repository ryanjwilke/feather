import utilities from '@/components/utility-list/utilities.yml'

export default {
  name: 'utilities-show',

  beforeMount() {
    this.utility = this.utilities.find(
      (item) => item.name == this.$route.params.name
    )
  },

  data() {
    return {
      utility: null,
      utilities: utilities,
    }
  },
}

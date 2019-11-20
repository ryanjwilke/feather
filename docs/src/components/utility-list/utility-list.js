import utilities from './utilities.yml'
import UtilityItem from '@/components/utility-item/utility-item.vue'

export default {
  name: 'utility-list',

  components: { UtilityItem },

  data() {
    return {
      utilities: utilities,
    }
  },
}

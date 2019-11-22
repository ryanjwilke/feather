import css from './utility-list.css.yml'
import utilities from './utilities.yml'
import UtilityItem from '@/components/utility-item/utility-item.vue'

export default {
  name: 'utility-list',

  components: { UtilityItem },

  data() {
    return {
      css: css,
      utilities: utilities,
    }
  },
}

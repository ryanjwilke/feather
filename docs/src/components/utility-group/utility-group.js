import css from './utility-group.css.yml'
import UtilityItem from '@/components/utility-item/utility-item.vue'

export default {
  name: 'utility-group',

  components: { UtilityItem },

  props: {
    group: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      css: css,
    }
  },
}

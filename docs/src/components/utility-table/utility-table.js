import css from './utility-table.css.yml'
import UtilityRow from '@/components/utility-row/utility-row.vue'

export default {
  name: 'utility-table',

  components: { UtilityRow },

  props: {
    utility: {
      type: Object,
      required: true,
    },
    groups: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      css: css,
    }
  },
}

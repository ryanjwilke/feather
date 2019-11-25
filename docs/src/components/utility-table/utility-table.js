import css from './utility-table.css.yml'
import UtilityTr from '@/components/utility-tr/utility-tr.vue'

export default {
  name: 'utility-table',

  components: { UtilityTr },

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

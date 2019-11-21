import css from './app.css.yml'
import UtilityList from '@/components/utility-list/utility-list.vue'

export default {
  name: 'app',

  components: { UtilityList },

  data() {
    return {
      css: css,
    }
  },
}

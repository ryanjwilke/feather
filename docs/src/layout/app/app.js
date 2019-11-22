import css from './app.css.yml'
import AppHeader from '@/layout/app-header/app-header.vue'
import UtilityList from '@/components/utility-list/utility-list.vue'

export default {
  name: 'app',

  components: { AppHeader, UtilityList },

  data() {
    return {
      css: css,
    }
  },
}

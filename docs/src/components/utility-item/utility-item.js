export default {
  name: 'utility-item',

  props: ['utility'],

  computed: {
    url() {
      return `/utilities/${this.utility.name}`
    },
  },
}

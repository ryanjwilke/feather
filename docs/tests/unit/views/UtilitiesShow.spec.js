import groups from '@/data/utilities.yml'
import { shallowMount } from '@vue/test-utils'
import UtilitiesShow from '@/views/utilities/show/show.vue'

describe('UtilitiesShow', () => {
  const utilities = [].concat(...groups.map((g) => g.utilities))

  utilities.forEach((utility) => {
    it(`renders the ${utility.name} utility documentation correctly`, () => {
      let wrapper = shallowMount(UtilitiesShow, {
        mocks: {
          $route: {
            params: { name: utility.name },
          },
        },
      })
      expect(wrapper.isVueInstance()).toBeTruthy()
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})

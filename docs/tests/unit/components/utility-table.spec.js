import groups from '@/data/utilities.yml'
import { shallowMount } from '@vue/test-utils'
import UtilityTable from '@/components/utility-table/utility-table.vue'

describe('UtilityTable', () => {
  const utilities = [].concat(...groups.map((g) => g.utilities))

  utilities.forEach((utility) => {
    it(`renders the ${utility.name} utility documentation correctly`, () => {
      let wrapper = shallowMount(UtilityTable, {
        propsData: {
          utility: utility,
          groups: groups,
        },
      })
      expect(wrapper.isVueInstance()).toBeTruthy()
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})

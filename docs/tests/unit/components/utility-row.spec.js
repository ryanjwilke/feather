import groups from '@/data/utilities.yml'
import { shallowMount } from '@vue/test-utils'
import UtilityRow from '@/components/utility-row/utility-row.vue'

describe('UtilityRow', () => {
  const utilities = [].concat(...groups.map((g) => g.utilities))

  utilities.forEach((utility) => {
    if (utility.values) {
      it(`renders the ${utility.name} utility documentation correctly`, () => {
        utility.values.forEach((value) => {
          let wrapper = shallowMount(UtilityRow, {
            propsData: {
              utility: utility,
              cssValue: value,
            },
          })
          expect(wrapper.isVueInstance()).toBeTruthy()
          expect(wrapper.element).toMatchSnapshot()
        })
      })
    }
  })
})

import { shallowMount } from '@vue/test-utils'
import UtilitiesShow from '@/views/utilities/show/show.vue'

describe('UtilitiesShow', () => {
  const colorWrapper = shallowMount(UtilitiesShow, {
    mocks: {
      $route: {
        params: { name: 'color' },
      },
    },
  })

  const bgColorWrapper = shallowMount(UtilitiesShow, {
    mocks: {
      $route: {
        params: { name: 'background-color' },
      },
    },
  })

  it('is a Vue instance', () => {
    expect(colorWrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the color utility documentation correctly', () => {
    expect(colorWrapper.element).toMatchSnapshot()
  })

  it('renders the background-color utility documentation correctly', () => {
    expect(bgColorWrapper.element).toMatchSnapshot()
  })
})

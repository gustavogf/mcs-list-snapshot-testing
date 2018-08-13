import { shallowMount } from '@vue/test-utils'
import McsList from '@/components/McsList.vue'

describe('McsList.vue', () => {
  it('Renders filtered list', () => {
    const query = 'ke'
    const mcsList = shallowMount(McsList, {
      propsData: { query }
    })

    expect(mcsList.html()).toMatchSnapshot()
  })
})

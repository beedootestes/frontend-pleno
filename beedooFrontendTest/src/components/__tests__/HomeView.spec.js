import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HomeView from '../../views/HomeView.vue'

describe('Testes', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renderiza corretamente', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

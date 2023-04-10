import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Header from '../CustomHeader.vue'

describe('Testa se o componente Header é uma instância do Vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renderiza corretamente', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

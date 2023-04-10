import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Footer from '../CustomFooter.vue'

describe('CustomFooter.vue', () => {
  it('Snapshot do arquivo CustomFooter', () => {
    const wrapper = mount(Footer)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('Testa se o componente Footer é uma instância do Vue', () => {
  it('é uma instancia vue', () => {
    const wrapper = mount(Footer)
    expect(wrapper.vm).toBeTruthy()
  })
})

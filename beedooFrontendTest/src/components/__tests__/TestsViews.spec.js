import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TestsViews from '../../views/TestsViews.vue'

import perguntasData from '../../data/perguntas.json'
import respostasData from '../../data/respostas.json'

describe('PerguntasRespostasList', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(TestsViews, {
      props: {
        perguntasData: perguntasData,
        respostasData: respostasData
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  it('renderiza corretamente', () => {
    const wrapper = mount(TestsViews)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

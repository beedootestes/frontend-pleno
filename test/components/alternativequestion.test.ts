import { describe, expect, test} from "vitest";
import AlternativeQuestion from "../../src/components/AlternativeQuestion.vue";
import {mount, VueWrapper} from "@vue/test-utils";
import CheckCircleIcon from "vue-material-design-icons/CheckCircle.vue";


describe('Test AlternativeQuestion.vue', () => {
  test('mount component', async () => {
    expect(AlternativeQuestion).toBeTruthy()
    const wrapper: VueWrapper<AlternativeQuestion> = mount(AlternativeQuestion, {
      props: {
        alternative: {
          "id": 57492976,
          "text": "Alternative question.",
          "question_id": 72648,
          "is_correct": true
        },
        selected: false,
        correctAnswerId: 0
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('test if emit a click when clicked', async () => {
    const wrapper: VueWrapper<AlternativeQuestion> = mount(AlternativeQuestion, {
      props: {
        alternative: {
          "id": 57492976,
          "text": "Alternative question.",
          "question_id": 72648,
          "is_correct": true
        },
        selected: false,
        correctAnswerId: 0
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click'))
  })

  test('test if when selected alter class style', async () => {
    const wrapper: VueWrapper<AlternativeQuestion> = mount(AlternativeQuestion, {
      props: {
        alternative: {
          "id": 57492976,
          "text": "Alternative question.",
          "question_id": 72648,
          "is_correct": true
        },
        selected: false,
        correctAnswerId: 0
      }
    })

    expect(wrapper.attributes('class')).not.contain('selected')
    await wrapper.setProps({ selected: true })
    expect(wrapper.attributes('class')).contain('selected')
  })


  test('test correctAnswerId props alterations', async () => {
    const wrapper: VueWrapper<AlternativeQuestion> = mount(AlternativeQuestion, {
      props: {
        alternative: {
          "id": 57492976,
          "text": "Alternative question.",
          "question_id": 72648,
          "is_correct": true
        },
        selected: false,
        correctAnswerId: 0
      }
    })

    expect(wrapper.attributes('class')).contain('answer')
    await wrapper.setProps({ correctAnswerId: 57492976 })
    expect(wrapper.attributes('class')).contain('correct')
    await wrapper.setProps({ correctAnswerId: 57492987 })
    expect(wrapper.attributes('class')).contain('incorrect')
  })

  test('test show icons conform answer', async () => {
    const wrapper: VueWrapper<AlternativeQuestion> = mount(AlternativeQuestion, {
      props: {
        alternative: {
          "id": 57492976,
          "text": "Alternative question.",
          "question_id": 72648,
          "is_correct": true
        },
        selected: false,
        correctAnswerId: 0
      }
    })

    expect(wrapper.findComponent({ name: "CheckCircleIcon" }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: "AlphaXCircleIcon" }).exists()).toBe(false)

    await wrapper.setProps({ correctAnswerId: 57492976 })
    expect(wrapper.findComponent({ name: "CheckCircleIcon" }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: "AlphaXCircleIcon" }).exists()).toBe(false)

    await wrapper.setProps({ correctAnswerId: 57492987 })
    expect(wrapper.findComponent({ name: "CheckCircleIcon" }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: "AlphaXCircleIcon" }).exists()).toBe(true)
  })
})
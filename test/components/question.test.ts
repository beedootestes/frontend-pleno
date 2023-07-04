import {describe, expect, test, vi} from "vitest";
import Question from "../../src/components/Question.vue";
import {mount, VueWrapper} from "@vue/test-utils";
import {PropType} from "vue";


describe('Test Question.vue', () => {
  test('mount component', async () => {
    expect(Question).toBeTruthy()

    const wrapper: VueWrapper<Question> = mount(Question, {
      props: {
        question: {
          "beetcoins": 50,
          "id": 1,
          "text": "Question text",
          "parent_id": 15,
          "alternatives": [{
            "id": 11,
            "text": "Alternative one.",
            "question_id": 1,
            "is_correct": true
          }, {
            "id": 12,
            "text": "alternative two.",
            "question_id": 1,
            "is_correct": false
          }]
        },
        correctAnswerId: 0
      }
    })

    expect(wrapper.html()).toMatchSnapshot()

    const title = wrapper.find('.title')
    const beetcoins = wrapper.find('.beetcoins')

    expect(title.text()).toStrictEqual('Question text')
    expect(beetcoins.text()).toStrictEqual('(50) moedas')
  })

  test('test if when click in a alternative call a function selectAlternative', async () => {
    const wrapper: VueWrapper<Question> = mount(Question, {
      props: {
        question: {
          "beetcoins": 50,
          "id": 1,
          "text": "Question text",
          "parent_id": 15,
          "alternatives": [{
            "id": 11,
            "text": "Alternative one.",
            "question_id": 1,
            "is_correct": true
          }, {
            "id": 12,
            "text": "alternative two.",
            "question_id": 1,
            "is_correct": false
          }]
        },
        correctAnswerId: 0
      }
    })

    const spy = vi.spyOn(wrapper.vm, 'selectAlternative')
    const firstAlternative = wrapper.find('.item')
    await firstAlternative.trigger('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })


  test('test if when click in a alternative set alternative selected', async () => {
    const wrapper: VueWrapper<Question> = mount(Question, {
      props: {
        question: {
          "beetcoins": 50,
          "id": 1,
          "text": "Question text",
          "parent_id": 15,
          "alternatives": [{
            "id": 11,
            "text": "Alternative one.",
            "question_id": 1,
            "is_correct": true
          }, {
            "id": 12,
            "text": "alternative two.",
            "question_id": 1,
            "is_correct": false
          }]
        },
        correctAnswerId: 0
      }
    })

    expect(wrapper.vm.selectedAlternative).toStrictEqual(0)
    const firstAlternative = wrapper.find('.item')
    await firstAlternative.trigger('click')
    expect(wrapper.vm.selectedAlternative).toStrictEqual(11)
  })


  test('test if when click in a alternative and emit update:modelValue event', async () => {
    const wrapper: VueWrapper<Question> = mount(Question, {
      props: {
        question: {
          "beetcoins": 50,
          "id": 1,
          "text": "Question text",
          "parent_id": 15,
          "alternatives": [{
            "id": 11,
            "text": "Alternative one.",
            "question_id": 1,
            "is_correct": true
          }, {
            "id": 12,
            "text": "alternative two.",
            "question_id": 1,
            "is_correct": false
          }]
        },
        correctAnswerId: 0
      }
    })

    expect(wrapper.vm.selectedAlternative).toStrictEqual(0)
    const firstAlternative = wrapper.find('.item')
    await firstAlternative.trigger('click')
    expect(wrapper.emitted('update:modelValue'))
    expect(wrapper.emitted('update:modelValue')).toStrictEqual([[{questionId: 1, alternativeId: 11}]])
  })


  test('test if when click in a alternative and set a correctAnswerId prop', async () => {
    const wrapper: VueWrapper<Question> = mount(Question, {
      props: {
        question: {
          "beetcoins": 50,
          "id": 1,
          "text": "Question text",
          "parent_id": 15,
          "alternatives": [{
            "id": 11,
            "text": "Alternative one.",
            "question_id": 1,
            "is_correct": true
          }, {
            "id": 12,
            "text": "alternative two.",
            "question_id": 1,
            "is_correct": false
          }]
        },
        correctAnswerId: 0
      }
    })

    expect(wrapper.vm.selectedAlternative).toStrictEqual(0)
    await wrapper.setProps({ correctAnswerId: 11 })
    expect(wrapper.html()).toMatchSnapshot()
  })
})

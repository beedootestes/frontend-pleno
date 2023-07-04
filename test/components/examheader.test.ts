import {describe, expect, test} from "vitest";
import ExamHeader from "../../src/components/ExamHeader.vue";
import {mount, shallowMount, VueWrapper} from "@vue/test-utils";


describe('Test ExamHeader,vue', () => {
  test('mount component', async () => {
    expect(ExamHeader).toBeTruthy()

    const wrapper: VueWrapper<ExamHeader> = shallowMount(ExamHeader, {
      props: {
        titleExam: 'Exam Question',
        beetcoins: 50,
        beetcoinsAchieved: 30
      }
    })

    expect(wrapper.html()).toMatchSnapshot()

    const title = wrapper.find('.title-container')
    const more = wrapper.find('.more')
    const beetcoins = wrapper.find('.beetcoins')

    expect(title.text()).toStrictEqual('Exam Question')
    expect(more.text()).toStrictEqual('BeeFree - Orgulho LGBTQIA+Conheça mais do beedoo')
    expect(beetcoins.text()).toStrictEqual('$ 50 / 30')
  })
})
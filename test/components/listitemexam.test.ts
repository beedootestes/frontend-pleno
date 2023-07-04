import {describe, expect, test} from "vitest";
import ListItemExam from "../../src/components/ListItemExam.vue";
import {mount, VueWrapper} from "@vue/test-utils";


describe('Test ListItemExam.vue', () => {
  test('mount component', async () => {
    expect(ListItemExam).toBeTruthy()

    const wrapper: VueWrapper<ListItemExam> = mount(ListItemExam, {
      props: { title: 'First Exam' }
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toContain('First Exam')
  })
})

import {mount, VueWrapper} from "@vue/test-utils";
import {describe, expect, test} from "vitest";
import Link from "../../src/components/Link.vue";

describe('Test Link.vue', () => {
  test('mount component', async () => {
    expect(Link).toBeTruthy()

    const wrapper: VueWrapper<Link> = mount(Link, {
      props: {
        title: 'exams',
        to: 'exams'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toContain('exams')
  })
})

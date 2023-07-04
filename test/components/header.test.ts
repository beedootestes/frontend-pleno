import {describe, expect, test} from "vitest";
import Header from "../../src/components/Header.vue";
import {mount, VueWrapper} from "@vue/test-utils";

describe('Test Header.vue', () => {
  test('mount component', async () => {
    expect(Header).toBeTruthy()

    const wrapper: VueWrapper<Header> = mount(Header)

    expect(wrapper.html()).toMatchSnapshot()

  })
})
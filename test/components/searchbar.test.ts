import {describe, expect, test} from "vitest";
import SearchBar from "../../src/components/SearchBar.vue";
import {mount, VueWrapper} from "@vue/test-utils";


describe('Test SearchBar', () => {
  test('mount component', async () => {
    expect(SearchBar).toBeTruthy()

    const wrapper: VueWrapper<SearchBar> = mount(SearchBar)

    expect(wrapper.html()).toMatchSnapshot()
  })
})

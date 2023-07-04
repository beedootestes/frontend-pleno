import { describe, expect, test } from "vitest";
import BarHeader from "../../src/components/BarHeader.vue";
import { mount, VueWrapper } from "@vue/test-utils";


describe('Test BarHeader.vue', () => {
  test('mount component', async () => {
    expect(BarHeader).toBeTruthy()

    const barheader: VueWrapper<BarHeader> = mount(BarHeader)

    expect(barheader.html()).toMatchSnapshot()
  })
})

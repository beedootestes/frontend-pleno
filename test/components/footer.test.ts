import {describe, expect, test, vi} from "vitest";
import Footer from "../../src/components/Footer.vue";
import {DOMWrapper, mount, VueWrapper} from "@vue/test-utils";
import Link from "../../src/components/Link.vue";


describe('Test Footer.vue', () =>  {
  test('mount component', async () => {
    expect(Footer).toBeTruthy()

    const wrapper: VueWrapper<Footer> = mount(Footer)

    const feed = wrapper.find('.feed')
    expect(feed).toBeTruthy()
    const wiki = wrapper.find('.wiki')
    expect(wiki).toBeTruthy()
    const mainlink = wrapper.find('.main-link')
    expect(mainlink).toBeTruthy()
    const exam = wrapper.find('.exam')
    expect(exam).toBeTruthy()
    const courses = wrapper.find('.courses')
    expect(courses).toBeTruthy()

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('click in links', async () => {
    const wrapper: VueWrapper<Footer> = mount(Footer)
    const spy = vi.spyOn(wrapper.vm, 'activeMenu')

    const linkFeed = wrapper.get('.feed')
    await linkFeed.trigger('click')
    expect(linkFeed.attributes('class')).toContain('active')
    expect(wrapper.vm.isActive).toStrictEqual('feed')

    const linkWiki = wrapper.get('.wiki')
    await linkWiki.trigger('click')
    expect(linkWiki.attributes('class')).toContain('active')
    expect(wrapper.vm.isActive).toStrictEqual('wiki')

    const linkExam = wrapper.get('.exam')
    await linkExam.trigger('click')
    expect(linkExam.attributes('class')).toContain('active')
    expect(wrapper.vm.isActive).toStrictEqual('exam')

    const linkCourses = wrapper.get('.courses')
    await linkCourses.trigger('click')
    expect(linkCourses.attributes('class')).toContain('active')
    expect(wrapper.vm.isActive).toStrictEqual('courses')

    expect(spy).toHaveBeenCalledTimes(8)
  })
})

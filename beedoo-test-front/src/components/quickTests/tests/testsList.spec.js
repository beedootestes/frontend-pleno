import { mount } from '@vue/test-utils';
import QuickTests from './../TestsList.vue';
import { createPinia } from 'pinia';

describe('QuickTests', () => {
  let wrapper;
  let pinia;

  beforeEach(() => {
    pinia = createPinia();
    pinia.use();
    wrapper = mount(QuickTests, {
      global: {
        plugins: [pinia],
      },
    });
  });

  test('exibe a aba "Respondidos" como ativa por padrão', () => {
    const activeTabButton = wrapper.find('.tab-buttons button.active');
    expect(activeTabButton.text()).toBe('Respondidos');
  });

  test('altera a aba ativa ao clicar nos botões', async () => {
    const unansweredTabButton = wrapper.find('.tab-buttons button:not(.active)');
    await unansweredTabButton.trigger('click');
    expect(wrapper.vm.activeTab).toBe('unanswered');

    const answeredTabButton = wrapper.find('.tab-buttons button.active');
    await answeredTabButton.trigger('click');
    expect(wrapper.vm.activeTab).toBe('answered');
  });
});
import { shallowMount } from '@vue/test-utils';
import TableBase from '@/components/table/TableBase.vue';

let wrapper;

describe('Base.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TableBase);
  });

  it('renders the component', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

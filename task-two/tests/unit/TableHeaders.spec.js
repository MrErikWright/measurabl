import { shallowMount } from '@vue/test-utils';
import TableHeaders from '@/components/table/TableHeaders.vue';

let wrapper;

describe('TableHeaders.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TableHeaders);
  });

  it('renders the component', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('sets the headers correctly', () => {
    const headers = wrapper.findAll('th');

    expect(headers.length).toBeGreaterThanOrEqual(4);
    expect(headers.at(0).text()).toBe('ID');
    expect(headers.at(1).text()).toBe('First Name');
    expect(headers.at(2).text()).toBe('Last Name');
    expect(headers.at(3).text()).toBe('Age');
  });
});

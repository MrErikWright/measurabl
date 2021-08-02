import { shallowMount } from '@vue/test-utils';
import { enableFetchMocks } from 'jest-fetch-mock';
import TableBody from '@/components/table/TableBody.vue';

enableFetchMocks();

let wrapper;
let message;

describe('TableBody.vue', () => {
  beforeEach(() => {
    fetch.resetMocks();

    wrapper = shallowMount(TableBody);
  });

  it('renders the component', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('correctly fetches from two endpoints', async () => {
    fetch.mockResponse(JSON.stringify([]));

    expect(fetch.mock.calls.length).toEqual(2);
    expect(fetch.mock.calls[0][0]).toEqual('https://5c37c33f7820ff0014d927c5.mockapi.io/msr/ages');
    expect(fetch.mock.calls[1][0]).toEqual('https://5c37c33f7820ff0014d927c5.mockapi.io/msr/names');
  });

  describe('TableBody.vue Errors', () => {
    beforeEach(() => {
      message = 'An error occurred!';
    });

    it('sets the errorMessage data prop correctly', async () => {
      fetch.mockReject(new Error(message));
      await wrapper.setData({ errorMessage: message });

      expect(wrapper.vm.errorMessage).toBe(message);
    });

    it('displays the errorMessage when a fetch fails', async () => {
      fetch.mockReject(new Error(message));
      await wrapper.setData({ errorMessage: message });

      expect(wrapper.find('.error-message').text()).toBe(message);
    });
  });
});

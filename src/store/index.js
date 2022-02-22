import { createStore } from 'vuex';

import actions from '@/store/actions';
import getters from '@/store/getters';
import modules from '@/store/modules';
import mutations from '@/store/mutations';
import state from '@/store/state';

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
});

import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    }
  });
};

export default createStore;

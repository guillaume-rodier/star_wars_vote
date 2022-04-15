import { INIT_PEOPLE_LIST } from "./mutation-types.js";

const mutations = {
  [INIT_PEOPLE_LIST](state, peopleList) {
    state.peopleList = peopleList;
  },
};

export default mutations;

import { DO_VOTE, INIT_PEOPLE_LIST } from "./mutation-types.js";

const mutations = {
  [DO_VOTE](state, personageId) {
    let personage = state.peopleList.find(
      (personage) => personage.id == personageId
    );

    console.log("personage:", personage);

    state.famousPeopleList = [];
  },
  [INIT_PEOPLE_LIST](state, peopleList) {
    state.peopleList = peopleList;
  },
};

export default mutations;

import { DO_VOTE, INIT_PEOPLE_LIST } from "./mutation-types.js";

const mutations = {
  [DO_VOTE](state, personageId) {
    let personageFinded = state.peopleList.find(
      (personage) => personage.id === personageId
    );

    if (
      personageFinded != undefined &&
      state.famousPeopleList.length > 0 &&
      state.famousPeopleList.find(
        (personageList) => personageList.id === personageFinded.id
      )
    ) {
      let indexPersonage = state.famousPeopleList.findIndex(
        (personageList) => personageList.id === personageFinded.id
      );
      state.famousPeopleList[indexPersonage].numberOfVote += 1;
    } else {
      state.famousPeopleList.push({
        ...personageFinded,
        numberOfVote: 1,
      });
    }
  },
  [INIT_PEOPLE_LIST](state, peopleList) {
    state.peopleList = peopleList;
  },
};

export default mutations;

function compareVotes(a, b) {
  if (a.numberOfVote < b.numberOfVote) return 1;
  if (a.numberOfVote > b.numberOfVote) return -1;
  return 0;
}

const getters = {
  getPeopleList(state) {
    return state.peopleList;
  },
  getFamousPeopleList(state) {
    return state.famousPeopleList.sort(compareVotes).slice(0, 6);
  },
};

export default getters;

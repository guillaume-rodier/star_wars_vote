import axios from "axios";

const actions = {
  async initStarWarsPeople({ commit }) {
    const starWarsPeopleApi = await axios.get(
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3cf3fc5d-7902-4caa-b1ad-566920b979c5/star_wars_characters.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220415T191729Z&X-Amz-Expires=86400&X-Amz-Signature=51e0bb79445921aa4151fa9e27d49c5b985c785bd9a69b1ffb68cf0e95c293dd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22star_wars_characters.json%22&x-id=GetObject"
    );

    commit("INIT_PEOPLE_LIST", starWarsPeopleApi.data.characters);
  },
  doVote({ commit }, personageId) {
    commit("DO_VOTE", personageId);
  },
};

export default actions;

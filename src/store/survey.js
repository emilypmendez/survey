import API from "@/api/survey";

// state
export const state = {
  loading: true,
  survey: {}
};

// getters
export const getters = {
  survey: (state) => state.survey,

  loading: (state) => state.loading,

  surveyNodeById: (state) => (id) => state.survey.nodes[id]
};

// mutations
export const mutations = {
  survey(state, survey) {
    state.survey = survey;
  },
  loading(state, loading) {
    state.loading = loading;
  }
};

// actions
export const actions = {
  survey({ commit }) {
    return API.survey().then((response) => {
      commit("survey", response);
      commit("loading", false);

      return response;
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

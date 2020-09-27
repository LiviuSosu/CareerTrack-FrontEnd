import { ADD_ARTICLE, DATA_LOADED, LOGIN_SUCCEDED } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  loginResponse: {}
};

function rootReducer(state = initialState, action) {
  // if (action.type === ADD_ARTICLE) {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload)
  //   });
  // }


if (action.type === LOGIN_SUCCEDED) {
  return Object.assign({}, state, {
    loginResponse: action.payload
  });
}

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
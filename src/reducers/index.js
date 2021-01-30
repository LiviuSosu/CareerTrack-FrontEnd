import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  alert
});

export default rootReducer;


// import { DATA_LOADED, LOGIN_SUCCEDED, LOGOUT_FAILED, LOGOUT_SUCCEDED } from "../constants/action-types";

// const initialState = {
//   articles: [],
//   remoteArticles: [],
//   loginResponse: {},
//   logoutResponse: {}
// };

// function rootReducer(state = initialState, action) {
//   // if (action.type === ADD_ARTICLE) {
//   //   return Object.assign({}, state, {
//   //     articles: state.articles.concat(action.payload)
//   //   });
//   // }

//   if (action.type === LOGOUT_SUCCEDED) {
//     return Object.assign({}, state, {
//       logoutResponse: action.payload
//     });
//   }

//   if (action.type === LOGIN_SUCCEDED) {
//     return Object.assign({}, state, {
//       loginResponse: action.payload
//     });
//   }

//   if (action.type === LOGOUT_FAILED) {
//     return Object.assign({}, state, {
//       loginResponse: "login failed"
//     });
//   }

//   if (action.type === DATA_LOADED) {
//     return Object.assign({}, state, {
//       remoteArticles: state.remoteArticles.concat(action.payload)
//     });
//   }
//   return state;
// }

// export default rootReducer;
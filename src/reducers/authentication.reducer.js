import { userConstants } from '../constants';

let loggedUser = JSON.parse(localStorage.getItem('user'));
const initialState = loggedUser ? { loggedIn: true, loggedUser } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        loggedUser: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loggedUser: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};


    case userConstants.GET_LOGGED_USER_REQUEST:
      //console.log(user)
      return {};
      
    default:
      return state
  }
}
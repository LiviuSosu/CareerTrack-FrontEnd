import { LOGIN_REQUESTED, LOGOUT_REQUESTED, HIDE_ERROR_MESSAGE } from "../constants/action-types";

export function loginUser(url, LoginModel) {
  return { type: LOGIN_REQUESTED, payload: { url, LoginModel } };
}

export function logoutUser(url, LogoutModel) {
  return { type: LOGOUT_REQUESTED, payload: { url, LogoutModel } };
}

export function hideErrorMessage() {
  return { type: HIDE_ERROR_MESSAGE };
}
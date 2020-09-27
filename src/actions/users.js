import { LOGIN_REQUESTED } from "../constants/action-types";

export function loginUser(url, LoginModel) {
    return { type: LOGIN_REQUESTED, payload: { url, LoginModel} };
  }
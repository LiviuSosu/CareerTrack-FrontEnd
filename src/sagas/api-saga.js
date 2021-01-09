import { takeEvery, call, put } from "redux-saga/effects";
import * as constants from '../constants/action-types'
import { BehaviorSubject } from 'rxjs';
import * as helpers from '../helpers';

import { history, Role } from '../helpers/index';
export default function* watcherSaga() {
  yield takeEvery(constants.DATA_REQUESTED, workerSaga);
  yield takeEvery(constants.LOGIN_REQUESTED, userLoginSaga);
  yield takeEvery(constants.LOGOUT_REQUESTED, userLogoutSaga);
}

function* workerSaga(action) {
  try {
    // pass the action payload to getData
    const payload = yield call(getData, action.payload.url);
    yield put({ type: constants.DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: constants.API_ERRORED, payload: e });
  }
}

function getData(url) {
  return fetch(url).then(response => response.json());
}

function* userLoginSaga(action) {
  try {
    const payload = yield call(userLogin, action.payload.url, action.payload.LoginModel);
    yield put({ type: constants.LOGIN_SUCCEDED, payload });
  }
  catch (e) {
    yield put({ type: constants.LOGIN_FAILED, payload: e });
  }
}

function* userLogoutSaga(action) {
  try {
    const payload = yield call(userLogout, action.payload.url, action.payload.LogoutModel);
    yield put({ type: constants.LOGOUT_SUCCEDED, payload });
  }
  catch (e) {
    yield put({ type: constants.LOGOUT_FAILED, payload: e });
  }
}

const currentUserSubject = new BehaviorSubject(
  localStorage.getItem('currentUser')
);

export const authenticationService = {
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() { return currentUserSubject.value }
};

function userLogin(url, LoginModel) {
  return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(LoginModel) })
    .then(helpers.handleResponse)
    .then(
      user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);
     //   history.push("/")
        //console.log("success")
        return user;
      }).catch(
        user => {
          localStorage.removeItem('currentUser');
          currentUserSubject.next(null);
          //console.log("failed")
          return "failed"
        })
}

function userLogout(url, LogoutModel) {
  return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6IkFkbWluIiwiZXhwIjoxNjA4MjIxMTMxLCJpc3MiOiJDYXJlZXJUcmFjayIsImF1ZCI6IkNhcmVlclRyYWNrIn0.cS71ArpZEh50Toh_DzAoqJ903ZO1T8cy0C97bCN45bE' }})
    .then(helpers.handleResponse)
    .then(
      user => {
        localStorage.removeItem('currentUser');
        currentUserSubject.next(null);
      });
}
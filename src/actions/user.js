import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';
import { alertActions } from './';

export const userActions = {
    login,
    logout,
    getLoggedUser
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                  if(user=='Unauthorized'){
                    dispatch(failure('Unauthorized'));
                    dispatch(alertActions.error('Unauthorized'));
                  }
                  else
                  {
                    history.push('/');
                    window.location.reload();
                    dispatch(success(user));
                  }
                  console.log(user)
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(token) {
  return dispatch => {
    dispatch(request({ token }));

    userService.logout(token)
      .then(response => {
        console.log(response);
        dispatch(success(response));
      },
        error => {
          console.log(error);
          dispatch(failure(error));
        }
      )

  }

  function request(response) { return {  type: userConstants.LOGOUT_REQUESTED, response} }
  function success(response) { return { type: userConstants.LOGOUT_SUCCEDED, response } }
  function failure(error) { return { type: userConstants.LOGOUT_FAILURE, error } }
}

function getLoggedUser(){
  // return dispatch=>{
  //   dispatch(request({}));
  //   var y = userService.getLoggedUser();
  //   console.log(y);
  //   //if(y)....

  //   dispatch(success(y));
  // }
  return dispatch=>(userService.getLoggedUser());

  function request(response){return { type: userConstants.GET_LOGGED_USER_REQUEST, response } }
  function success(response) {return {type:userConstants.GET_LOGGED_USER_SUCCESS, response}}
}
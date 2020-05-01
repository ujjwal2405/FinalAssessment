import {TOGGLE_LOGIN, TOGGLE_FAILED, TOGGLE_SUCCESS} from './constant';

export const loginCheck = (realm, username, password) => dispatch => {
  if (realm[0].username === username && realm[0].password === password) {
    dispatch({
      type: TOGGLE_LOGIN,
    });
  } else {
    dispatch({
      type: TOGGLE_FAILED,
    });
  }
};
export const loginSuccess = () => dispatch => {
  dispatch({
    type: TOGGLE_SUCCESS,
  });
};
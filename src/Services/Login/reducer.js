import {TOGGLE_LOGIN, TOGGLE_FAILED, TOGGLE_SUCCESS} from './constant';
const initialState = {
  isLoggedin: false,
  flag:false
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {...state, isLoggedin: true};
    case TOGGLE_FAILED:
      return {...state, isLoggedin: false};
    case TOGGLE_SUCCESS:
      return {...state, flag: true};
    default:
      return state;
  }
};

export default loginReducer;
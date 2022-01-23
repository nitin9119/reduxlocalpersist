import { LOGIN_SUCESS, LOGIN_FAILURE } from "./actionTypes";

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCESS,
    paylod: token,
  };
};

export const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};

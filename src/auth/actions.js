import * as types from "./actionTypes";

export const signUpSuccess = (json) => ({
    type: types.SIGN_UP,
    payload: json,
  });
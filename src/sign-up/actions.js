import * as types from "./actionTypes";

export const getPlans = () => ({
  type: types.GET_PLANS,
});

export const getPlansSuccess = (json) => ({
  type: types.GET_PLANS_SUCCESS,
  payload: json,
});

export const getPlansFailure = (error) => ({
  type: types.GET_PLANS_FAILURE,
  payload: error,
});

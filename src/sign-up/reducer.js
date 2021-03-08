import * as types from "./actionTypes";

const INITIAL_STATE = {
  form: {
    username: "",
    password: "",
    planId: "",
  },
  plans: {
    data: [],
    error: null,
  },
};

function reducer(state = INITIAL_STATE, action) {
  console.log(state, action);

  switch (action.type) {
    case types.GET_PLANS:
      return { ...state, plans: { ...INITIAL_STATE.plans } };
    case types.GET_PLANS_SUCCESS:
      return {
        ...state,
        plans: { ...INITIAL_STATE.plans, data: action.payload },
      };
    case types.GET_PLANS_FAILURE:
      return {
        ...state,
        plans: { ...INITIAL_STATE.plans, error: action.payload },
      };

    default:
      return state;
  }
}

export default reducer;
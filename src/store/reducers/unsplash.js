import { SET_BEARER_TOKEN, LOGOUT } from "../types";

const initialState = {
  isAuthenticated: false,
  bearerToken: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BEARER_TOKEN:
      return {
        isAuthenticated: action.isAuthenticated,
        bearerToken: action.bearerToken
      }

    case LOGOUT:
      return {
        isAuthenticated: action.isAuthenticated,
        bearerToken: action.bearerToken
      }

    default:
      return state
  }
}
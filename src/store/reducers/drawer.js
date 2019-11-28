import { SET_DRAWER } from "../types";

const initialState = {
  open: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DRAWER:
      return {open: !state.open}
  
    default:
      return state
  }
}
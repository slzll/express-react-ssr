import { CHANGE_LIST } from "./constants";

const defaultState = {
  name: "slzll",
  list: []
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      const newState = {
        ...state,
        list: action.list
      };
      return newState;
    default:
      return state;
  }
};

import { TOGGLE_SIDEBAR } from "../types";

const initState = {
  isToggle: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isToggle: !state.isToggle };

    default:
      return state;
  }
}

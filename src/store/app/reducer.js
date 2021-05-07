import { AppTypes } from './types';

const initialState = {
  togglePlanner: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case AppTypes.TOGGLE_PLANNER:
      return {
        ...state,
        togglePlanner: action.payload,
      };
    default:
      return state;
  }
}

import { AppTypes } from './types';

const initialState = {
  inputAddress: {},
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case AppTypes.SAVE_ADDRESS_INPUT:
      return {
        ...state,
        inputAddress: action.payload,
      };
    default:
      return state;
  }
}

import { AppTypes } from './types';

const appActions = {
  saveAddressInput: (payload) => ({
    type: AppTypes.SAVE_ADDRESS_INPUT,
    payload,
  }),
};

export default appActions;

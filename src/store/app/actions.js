import { AppTypes } from './types'

const appActions = {
  togglePlanner: (payload) => ({
    type: AppTypes.TOGGLE_PLANNER,
    payload
  });
}
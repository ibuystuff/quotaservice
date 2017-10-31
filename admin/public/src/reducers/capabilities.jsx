import { CAPABILITIES_REQUEST, CAPABILITIES_FETCH_SUCCESS } from '../actions/capabilities.jsx';

const INITIAL_CAPABILITIES = {};

export function capabilities(state = INITIAL_CAPABILITIES, action) {
  switch (action.type) {
    case CAPABILITIES_REQUEST:
      return {
        ...state,
        inRequest: true,
        error: null
      };

    case CAPABILITIES_FETCH_SUCCESS:
      return {
        ...INITIAL_CAPABILITIES,
        ...action.payload
      };

    default:
      return state;
  }
}
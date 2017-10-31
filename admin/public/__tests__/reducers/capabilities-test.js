import {
  CAPABILITIES_FETCH_SUCCESS,
  CAPABILITIES_REQUEST,
} from '../../src/actions/capabilities.jsx';
import { capabilities } from '../../src/reducers/capabilities.jsx';

describe('capabilities reducer', () => {
  it('should return the initial state', () => {
    expect(capabilities(undefined, {})).toEqual({})
  });

  it('should handle CAPABILITIES_REQUEST', () => {
    expect(capabilities(undefined, {
      type: CAPABILITIES_REQUEST
    })).toEqual({
      inRequest: true,
      error: null
    })
  });

  it('should handle CAPABILITIES_FETCH_SUCCESS', () => {
    const items = {}

    expect(capabilities(undefined, {
      type: CAPABILITIES_FETCH_SUCCESS,
      payload: { items: items }
    })).toEqual({ items: items })
  });
});

import * as actions from '../action-type';

const initialState = {
  types: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_GET_TYPES:
      return { ...state, isLoading: action.isLoading };
    case actions.RESOLVE_GET_TYPES:
      return { ...state, types: action.types, isLoading: action.isLoading };
    default:
      return { ...state };
  }
};

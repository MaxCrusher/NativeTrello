import * as actions from '../action-type';

const initialState = {
  comments: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_GET_COMMENTS:
      return { ...state, isLoading: action.isLoading };
    case actions.RESOLVE_GET_COMMENTS:
      return { ...state, comments: action.comments, isLoading: action.isLoading };
    case actions.REQUEST_ADD_COMMENT:
      return { ...state, idLoading: action.isLoading };
    case actions.RESOLVE_ADD_COMMENT:
      return { ...state, comments: state.comments.concat(action.comment) };
    default:
      return { ...state };
  }
};

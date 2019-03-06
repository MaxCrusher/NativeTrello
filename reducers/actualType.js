import * as actions from '../action-type';

const initialState = {
  idType: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ACTUAL_TYPE:
      return { ...state };
    case actions.EDIT_ACTUAL_TYPE:
      return { ...state, idType: action.idType };
    default:
      return { ...state };
  }
};
import * as actions from '../action-type';

const initialState = { id: 1, firstName: 'max', surname: 'orlov' };

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

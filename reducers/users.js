import * as actions from '../action-type';

const initialState = {
  users: [
    { id: 1, firstName: 'max', surname: 'orlov' },
    { id: 2, firstName: 'liya', surname: 'gafurova' },
    { id: 3, firstName: 'ruslan', surname: 'tagirov' },
    { id: 4, firstName: 'misha', surname: 'timkov' },
  ],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

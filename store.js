import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunkMiddleware);
export const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;

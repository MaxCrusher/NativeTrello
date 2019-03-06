import * as actions from '../action-type';

const initialState = {
  tasks: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST_GET_TASKS:
      return { ...state, isLoading: true };
    case actions.RESOLVE_GET_TASKS:
      return { ...state, isLoading: false, tasks: action.tasks };
    case actions.REQUEST_ADD_TASKS:
      return { ...state, isLoading: true };
    case actions.RESOLVE_ADD_TASK:
      return { ...state, tasks: state.tasks.concat(action.task) };
    case actions.REQUEST_EDIT_CHECK_TASK:
      return { ...state };
    case actions.RESOLVE_EDIT_CHECK_TASK:
      return {
        ...state,
        tasks: state.tasks.map(elem => {
          if (elem.id === action.task.id) {
            return action.task;
          }
          return elem;
        }),
      };
    case actions.REQUEST_EDIT_TEXT_TASK:
      return { ...state };
    case actions.RESOLVE_EDIT_TEXT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(elem => {
          if (elem.id === action.task.id) {
            return action.task;
          }
          return elem;
        }),
      };
    case actions.REQUEST_DELETE_TASK:
      return { ...state };
    case actions.RESOLVE_DELETE_TASK:
      return { ...state, tasks: action.tasks };
    default:
      return { ...state };
  }
};

import * as action from '../action-type';
import * as failRequest from '../servises';

// TASKS
const requestGetTasks = () => ({ type: action.REQUEST_GET_TASKS, isLoading: true });
const requestAddTask = () => ({ type: action.REQUEST_ADD_TASK, isLoading: true });
const requestDeleteTask = () => ({ type: action.REQUEST_DELETE_TASK, isLoading: true });
const requestEditTextTask = () => ({ type: action.REQUEST_EDIT_TEXT_TASK, isLoading: true });
const requestEditCheckTask = () => ({ type: action.REQUEST_EDIT_CHECK_TASK, isLoading: true });

const resolveGetTasks = tasks => ({ type: action.RESOLVE_GET_TASKS, tasks, isLoading: false });
const resolveAddTask = task => ({ type: action.RESOLVE_ADD_TASK, task, isLoading: false });
const resolveDeleteTask = tasks => ({ type: action.RESOLVE_DELETE_TASK, tasks, isLoading: false });
const resolveEditTextTask = task => ({ type: action.RESOLVE_EDIT_TEXT_TASK, task, isLoading: false });
const resolveEditCheckTask = task => ({ type: action.RESOLVE_EDIT_CHECK_TASK, task, isLoading: false });
// END TASKS

// COMMENT
const requestAddComment = () => ({ type: action.REQUEST_ADD_COMMENT, isLoading: true });
const requestGetComments = () => ({ type: action.REQUEST_GET_COMMENTS, isLoading: true });

const resolveAddComment = comment => ({ type: action.RESOLVE_ADD_COMMENT, comment, isLoading: false });
const resolveGetComments = comments => ({ type: action.RESOLVE_GET_COMMENTS, comments, isLoading: false });
// END COMMENT

// TYPE
const requestGetTypes = () => ({ type: action.REQUEST_GET_TYPES, isLoading: true });
const resolveGetTypes = types => ({ type: action.RESOLVE_GET_TYPES, types, isLoading: false });
export const setIdTypeA = id => dispatch => dispatch({ type: action.EDIT_ACTUAL_TYPE, idType: id });
// END TYPE
const errorRequest = () => ({ type: action.ERROR_REQUEST });

export const getTasksA = id => dispatch => {
  dispatch(requestGetTasks());
  return failRequest
    .getTasks(id)
    .then(response => {
      dispatch(resolveGetTasks(response));
      return response;
    })
    .catch(error => {
      dispatch(errorRequest());
      throw error;
    });
};

export const addTaskA = (autorId, idType, text) => dispatch => {
  dispatch(requestAddTask());
  return failRequest
    .addTasks(autorId, idType, text)
    .then(response => {
      console.log(response);
      dispatch(resolveAddTask(response));
      return response;
    })
    .catch(error => {
      dispatch(errorRequest());
      throw error;
    });
};

export const deleteTaskA = (id, idType) => dispatch => {
  dispatch(requestDeleteTask());
  return failRequest
    .deleteTask(id, idType)
    .then(response => {
      dispatch(resolveDeleteTask(response));
      return response;
    })
    .catch(error => {
      dispatch(errorRequest());
      throw error;
    });
};

export const editCheckTaskA = (id, check) => dispatch => {
  dispatch(requestEditCheckTask());
  return failRequest
    .editCheckTask(id, check)
    .then(response => {
      dispatch(resolveEditCheckTask(response));
      return response;
    })
    .catch(error => {
      dispatch(errorRequest());
      throw error;
    });
};

export const editTextTaskA = (id, text) => dispatch => {
  dispatch(requestEditTextTask());
  return failRequest
    .editTextTask(id, text)
    .then(response => {
      dispatch(resolveEditTextTask(response));
      return response;
    })
    .catch(error => {
      dispatch(errorRequest());
      throw error;
    });
};

export const getCommentsA = idTask => dispatch => {
  dispatch(requestGetComments());
  return failRequest
    .getComments(idTask)
    .then(response => {
      dispatch(resolveGetComments(response));
      return response;
    })
    .catch(error => {
      dispatch(errorRequest());
      throw error;
    });
};

export const addCommentA = (autorId, text, idTask) => dispatch => {
  dispatch(requestAddComment());
  return failRequest
    .addComment(autorId, text, idTask)
    .then(response => {
      dispatch(resolveAddComment(response));
      return response;
    })
    .catch(error => {
      dispatch(errorRequest());
      throw error;
    });
};

export const getTypeA = () => dispatch => {
  dispatch(requestGetTypes());
  return failRequest
    .getType()
    .then(response => {
      dispatch(resolveGetTypes(response));
      dispatch()
      return response;
    })
    .catch(error => {
      dispatch(errorRequest());
      throw error;
    });
};

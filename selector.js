import { createSelector } from 'reselect';

export const getTypes = state => state.types.types;
export const getTasks = state => state.tasks.tasks;
export const getComments = state => state.comments.comments;
export const getActualUser = state => state.actualUser;
export const getActualType = state => state.actualType.idType;

export const getTasksType = createSelector(
  getTasks,
  getActualType,
  (tasks, idType) => {
    tasks.filter(elem => elem.idType === idType);
  },
);
export const getPrayerDetail = createSelector(
  getTasks,
  tasks => id => tasks.filter(elem => elem.id === id)[0],
);

export const getTasksClose = createSelector(
  getTasks,
  tasks => tasks.filter(elem => elem.closed === true),
);

export const getTasksNotClose = createSelector(
  getTasks,
  tasks => tasks.filter(elem => elem.closed === false),
);

/* export const getComments = createSelector(
  getComments,
  comments => idTask => comments.filter 
); */

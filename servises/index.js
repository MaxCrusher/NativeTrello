let comments = [
  { id: 1, idTask: 1, text: 'qwerty1', autorId: 4 },
  { id: 2, idTask: 2, text: 'qwerty2', autorId: 3 },
  { id: 3, idTask: 3, text: 'qwerty3', autorId: 1 },
  { id: 4, idTask: 4, text: 'qwerty4', autorId: 2 },
];
let tasks = [
  { id: 1, closed: false, text: 'qwertyqwertyqwerty', autorId: 2, idType: 1 },
  { id: 2, closed: false, text: 'qwerty2', autorId: 1, idType: 1 },
  { id: 3, closed: false, text: 'qwerty3', autorId: 4, idType: 2 },
  { id: 4, closed: true, text: 'qwerty4', autorId: 3, idType: 1 },
];

const type = [{ id: 1, text: 'To do' }, { id: 2, text: 'In progress' }, { id: 3, text: 'Completed' }];

const users = [
  { id: 1, firstName: 'max', surname: 'orlov' },
  { id: 2, firstName: 'liya', surname: 'gafurova' },
  { id: 3, firstName: 'ruslan', surname: 'tagirov' },
  { id: 4, firstName: 'misha', surname: 'timkov' },
];

// TASK
export const getTasks = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(tasks.filter(elem => elem.idType === id));
    });
  });
export const addTasks = (autorId, idType, text) =>
  new Promise((resolve, reject) => {
    console.log(autorId, idType, text);
    setTimeout(() => {
      const idA = tasks[tasks.length - 1].id + 1;
      tasks = tasks.concat({ id: idA, closed: false, text, autorId, idType });
      resolve({ id: idA, closed: false, text, autorId, idType });
    });
  });
export const deleteTask = (id, idType) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      tasks.splice(tasks.indexOf(tasks.filter(elem => elem.id === id)[0]), 1);
      resolve(tasks.filter(elem => elem.idType === idType));
    }, 2000);
  });

export const editCheckTask = (id, check) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      tasks.filter(elem => elem.id === id)[0].closed = check;
      resolve(tasks.filter(elem => elem.id === id)[0]);
    }, 1000);
  });

export const editTextTask = (id, text) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      tasks.filter(elem => elem.id === id)[0].text = text;
      resolve(tasks.filter(elem => elem.id === id)[0]);
    }, 1000);
  });
// END TASK

// COMMENT
export const getComments = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const commentsLocal = comments
        .filter(elem => elem.idTask === id)
        .map(elem => ({
          ...elem,
          firstName: users.filter(user => user.id === elem.autorId)[0].firstName,
          surname: users.filter(user => user.id === elem.autorId)[0].surname,
        }));
      resolve(commentsLocal);
    }, 1000);
  });

export const addComment = (autorId, text, idTask) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      comments = comments.concat({
        id: comments[comments.length - 1].id + 1,
        idTask,
        text,
        autorId,
      });
      resolve({
        id: comments[comments.length - 1].id + 1,
        idTask,
        text,
        autorId,
        firstName: users.filter(user => user.id === autorId)[0].firstName,
        surname: users.filter(user => user.id === autorId)[0].surname,
      });
    }, 1000);
  });
// END COMMENT

// TYPE
export const getType = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(type);
    }, 1000);
  });
// END TYPE

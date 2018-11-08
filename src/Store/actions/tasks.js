import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addTask = (task) => {
   return dispatch => {
      axios.post('', task)
         .then(res => {
            console.log(res);
            dispatch(taskAdded(res.data));
         })
         .catch(err => {
            console.log(err);
         });
   };
};

export const taskAdded = (task) => {
   return {
      type: actionTypes.ADD_TASK,
      task
   };
};

export const getTasks = () => {
   return dispatch => {
      axios.get('')
         .then(res => {
            dispatch(setCurrentTasks(res.data));
            dispatch(setCompletedTasks(res.data));
         })
         .catch(err => {
            console.log(err);
         });
   };
};

export const setCurrentTasks = (tasks) => {
   return {
      type: actionTypes.SET_CURRENT_TASKS,
      currentTasks: tasks
   };
};

export const setCompletedTasks = (tasks) => {
   return {
      type: actionTypes.SET_COMPLETED_TASKS,
      completedTasks: tasks
   };
};

export const getTask = (id) => {
   return dispatch => {
      axios.get('' + id)
         .then(res => {
            dispatch(receiveTask(res.data));
         })
         .catch(err => {
            console.log(err);
         });
   };
};

export const receiveTask = (task) => {
   return {
      type: actionTypes.GET_TASK,
      task
   };
};

export const completeTask = (task, id) => {
   return dispatch => {
      axios.put('' + id, task)
         .then(res => {
            console.log(res);
            dispatch(taskCompleted(res.data))
         })
         .catch(err => {
            console.log(err);
         });
   };
};

export const taskCompleted = (task) => {
   return {
      type: actionTypes.COMPLETE_TASK,
      task
   };
};

export const editTask = (task, id) => {
   return dispatch => {
      axios.put('' + id, task)
         .then(res => {
            console.log(res);
            dispatch(taskEdited(res.data));
         })
         .catch(err => {
            console.log(err);
         });
   };
};

export const taskEdited = (task) => {
   return {
      type: actionTypes.EDIT_TASK,
      task
   };
};

export const deleteTask = (id) => {
   return dispatch => {
      axios.delete('' + id)
         .then(res => {
            console.log(res);
            dispatch(taskDeleted(res.data));
         })
         .catch(err => {
            console.log(err);
         });
   }
};

export const taskDeleted = (task) => {
   return {
      type: actionTypes.DELETE_TASK,
      task
   };
};
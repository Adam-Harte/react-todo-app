import * as actionTypes from '../actions/actionTypes';

const initialState = {
   task: null,
   currentTasks: [],
   completedTasks: []
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.ADD_TASK:
         return {
            ...state,
            currentTasks: state.currentTasks.concat(action.task)
         };
      case actionTypes.SET_CURRENT_TASKS:
         return {
            ...state,
            currentTasks: action.currentTasks
         };
      case actionTypes.SET_COMPLETED_TASKS:
         return {
            ...state,
            completedTasks: action.completedTasks
         };
      case actionTypes.COMPLETE_TASK:
         return {
            ...state,
            currentTasks: state.currentTasks.map(task => {
               if (task.id === action.task.id) {
                  return action.task;
               } else {
                  return task;
               }
            })
         }
      case actionTypes.EDIT_TASK:
         return {
            ...state,
            currentTasks: state.currentTasks.map(task => {
               if (action.task.id === task.id) {
                  return action.task;
               } else {
                  return task
               }
            }),
            completedTasks: state.completedTasks.map(task => {
               if (action.task.id === task.id) {
                  return action.task;
               } else {
                  return task
               }
            })
         };
      case actionTypes.DELETE_TASK:
         return {
            ...state,
            currentTasks: state.currentTasks.filter(task => task.id !== action.task.id),
            completedTasks: state.completedTasks.filter(task => task.id !== action.task.id)
         };
      default:
         return state;
   }
}

export default reducer;
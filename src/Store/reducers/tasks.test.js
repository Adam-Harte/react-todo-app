import reducer from './tasks';
import * as actionTypes from '../actions/actionTypes';

describe('tasks reducer', () => {
   it('should return the initial state for the default case', () => {
      expect(reducer(undefined, {})).toEqual({
         task: null,
         currentTasks: [],
         completedTasks: []
      });
   });

   it('should store the completed tasks upon getTasks', () => {
      expect(reducer({
         task: null,
         currentTasks: [],
         completedTasks: []
      }, {
         type: actionTypes.SET_COMPLETED_TASKS,
         completedTasks: [{id: 1, title: 'hello', description: 'task 1', completed: true}, {id: 2, title: 'hello', description: 'task 1', completed: false}, {id: 3, title: 'bye', description: 'task 2', completed: true}]
      })).toEqual({
         task: null,
         currentTasks: [],
         completedTasks: [{id: 1, title: 'hello', description: 'task 1', completed: true}, {id: 3, title: 'bye', description: 'task 2', completed: true}]
      });
   });

   it('should store the current tasks upon getTasks', () => {
      expect(reducer({
         task: null,
         currentTasks: [],
         completedTasks: []
      }, {
         type: actionTypes.SET_CURRENT_TASKS,
         currentTasks: [{id: 1, title: 'hello', description: 'task 1', completed: false}, {id: 2, title: 'bye', description: 'task 2', completed: true}, {id: 3, title: 'bye', description: 'task 2', completed: false}]
      })).toEqual({
         task: null,
         currentTasks: [{id: 1, title: 'hello', description: 'task 1', completed: false}, {id: 3, title: 'bye', description: 'task 2', completed: false}],
         completedTasks: []
      });
   });

   it('should store a task upon getTask', () => {
      expect(reducer({
         task: null,
         currentTasks: [],
         completedTasks: []
      }, {
         type: actionTypes.GET_TASK,
         task: {id: 1, title: 'hello', description: 'task 1', completed: false}
      })).toEqual({
         task: {id: 1, title: 'hello', description: 'task 1', completed: false},
         currentTasks: [],
         completedTasks: []
      });
   });
});
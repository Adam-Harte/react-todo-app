import React from 'react';

import './Tasks.css';
import Task from './Task/Task';

const Tasks = (props) => {
   return (
      <div className="Tasks">
         {props.tasksList.map(task => {
            if (task.complete) {
               return <Task key={task.id} data={task} delete />
            } else {
               return <Task key={task.id} data={task} complete edit delete />
            }
         })}
      </div>
   );
};

export default Tasks;
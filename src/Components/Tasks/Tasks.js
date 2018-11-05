import React from 'react';

import './Tasks.css';
import Task from './Task/Task';

const Tasks = (props) => {
   return (
      <div className="Tasks">
         {props.tasksList.map(task => {
            return <Task key={task.id} data={task} />
         })}
      </div>
   );
};

export default Tasks;
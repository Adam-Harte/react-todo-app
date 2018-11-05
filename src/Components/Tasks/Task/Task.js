import React from 'react';

import './Task.css';

const Task = (props) => {
   return (
      <div className="Task">
         <h1>{props.data.title}</h1>
         <p>{props.data.description}</p>
      </div>
   );
};

export default Task;
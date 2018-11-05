import React from 'react';

import './Task.css';

import Button from '../../UI/Button/Button';

const Task = (props) => {
   return (
      <div className="Task">
         <div className="data-container">
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
         </div>
         <div className="controls-container">
            {props.complete ? <Button btnType="Submit" label="Complete" clicked={props.completeClicked} /> : null}
            {props.edit ? <Button btnType="" label="Edit" clicked={props.editClicked} /> : null}
            {props.delete ? <Button btnType="Cancel" label="Delete" clicked={props.deleteClicked} /> : null}
         </div>
      </div>
   );
};

export default Task;
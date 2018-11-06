import React, { Component } from 'react';

import './Task.css';

import Button from '../../UI/Button/Button';

class Task extends Component {

   render () {
      return (
         <div className="Task">
            <div className="data-container">
               <h1>{this.props.data.title}</h1>
               <p>{this.props.data.description}</p>
            </div>
            <div className="controls-container">
               {this.props.complete ? <Button btnType="Submit" label="Complete" clicked={this.completeClickHandler} /> : null}
               {this.props.edit ? <Button btnType="" label="Edit" clicked={this.editClickHandler} /> : null}
               {this.props.delete ? <Button btnType="Cancel" label="Delete" clicked={this.deleteClickHandler} /> : null}
            </div>
         </div>
      );
   }
};

export default Task;
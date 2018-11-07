import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../Store/actions/index';

import './Task.css';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Modal from '../../UI/Modal/Modal';

class Task extends Component {

   state = {
      editModal: false,
      editTaskTitle: this.props.data.title,
      editTaskDescription: this.props.data.description
   }

   toggleModal = (show) => {
      this.setState({editModal: show});
   }

   inputChangeHandler = (event, taskData) => {
      this.setState({[taskData]: event.target.value});
   }

   render () {
      let modal = null;

      if (this.state.editModal) {
         modal = (
            <div>
               <Backdrop clicked={this.toggleModal(false)} />
               <Modal>
                  <Input inpType="text" inpPlaceholder="Title" inpValue={this.state.editTaskTitle} changed={(event) => this.inputChangeHandler(this.state.editTaskTitle)} />
                  <Input inpType="text" inpPlaceholder="Description" inpValue={this.state.editTaskDescription} changed={(event) => this.inputChangeHandler(this.state.editTaskDescription)} />
                  <Button btnType="Submit" label="Submit" clicked={this.props.onEditTask(this.props.data, this.props.data.id)} />
                  <Button btnType="Cancel" label="Cancel" clicked={this.toggleModal(false)} />
               </Modal>
            </div>
         );
      }

      return (
         <div className="Task">
            <div className="data-container">
               <h1>{this.props.data.title}</h1>
               <p>{this.props.data.description}</p>
            </div>
            <div className="controls-container">
               {this.props.complete ? <Button btnType="Submit" label="Complete" clicked={this.props.onCompleteTask(this.props.data, this.props.data.id)} /> : null}
               {this.props.edit ? <Button btnType="" label="Edit" clicked={this.toggleModal(true)} /> : null}
               {this.props.delete ? <Button btnType="Cancel" label="Delete" clicked={this.props.onDeleteTask(this.props.data.id)} /> : null}
            </div>
            {modal}
         </div>
      );
   }
};

const mapDispatchToProps = dispatch => {
   return {
      onCompleteTask: (task, id) => actions.completeTask(task, id),
      onEditTask: (task, id) => actions.editTask(task, id),
      onDeleteTask: (id) => actions.deleteTask(id)
   };
};

export default connect(null, mapDispatchToProps)(Task);
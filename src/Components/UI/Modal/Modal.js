import React, { Component } from 'react';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
   consturctor(props) {
      super(props);
      this.el = document.createElement('div');
   }

   componentDidMount() {
      modalRoot.appendChild(this.el);
   }

   componentWillUnmount() {
      modalRoot.removeChild(this.el);
   }

   render () {
      return ReactDOM.createPortal(this.props.children, this.el);
   }
};

export default Modal;
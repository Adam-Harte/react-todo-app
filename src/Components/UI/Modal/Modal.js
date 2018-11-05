import ReactDOM, { Component } from 'react';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
   constructor(props) {
      super(props);
      this.el = document.createElement('div');
      this.el.classList.add('Modal');
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
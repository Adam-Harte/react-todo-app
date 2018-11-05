import React from 'react';
import './Button.css';

const Button = (props) => {
   return (
      <button className={props.btnType} onClick={props.clicked}>{props.label}</button>
   );
};

export default Button;
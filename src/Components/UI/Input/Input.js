import React from 'react';
import './Input.css';

const Input = (props) => {
   return (
      <input className="Input" type={props.inpType} value={props.inpValue} placeholder={inpPlaceholder} onChange={props.changed} />
   );
};

export default Input;
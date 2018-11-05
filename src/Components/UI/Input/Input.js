import React from 'react';

const Input = (props) => {
   return (
      <input type={props.inpType} value={props.inpValue} placeholder={inpPlaceholder} onChange={props.changed} />
   );
};

export default Input;
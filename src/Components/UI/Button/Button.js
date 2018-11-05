import React from 'react';

const Button = () => {
   return (
      <button onClick={props.clicked}>{props.label}</button>
   );
};

export default Button;
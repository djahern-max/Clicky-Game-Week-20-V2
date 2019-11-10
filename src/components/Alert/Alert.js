import React from 'react';
import './Alert.css';

const Alert = props => (
  <div className='default' style={props.style}>
    {props.message ? (
      <p>{props.message}</p>
    ) : (
      <p className='default-msg black'>
        The Incredibles!! Don't pick the same Pic Twice!
      </p>
    )}
  </div>
);

export default Alert;

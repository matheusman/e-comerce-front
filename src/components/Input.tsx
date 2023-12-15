import React from 'react'
import useInput from '../hooks/useInput';

type inputType = {
    name: string;
    placeholder: string;
    className: string;
    type: string;
}

function Input({ type, name, placeholder, className, ...props } : inputType) {
  return (
    <div className={className}>
        <label htmlFor={name}>{name}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder.toLowerCase()} { ...props } ></input>
    </div>
  )
}

export default Input
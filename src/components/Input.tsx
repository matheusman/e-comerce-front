import React from 'react'
import useInput from '../hooks/useInput';

type inputType = {
    name: string;
    placeholder: string;
    className?: string;
    type: string;
    label: string;
}

function Input({ type, name, placeholder, className, label, ...props } : inputType) {
  return (
    <div className={className}>
        <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} { ...props } >
        </input>

    </div>
  )
}

export default Input
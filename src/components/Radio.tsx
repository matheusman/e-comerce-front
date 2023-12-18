import React from 'react'
import styles from './scss/Radio.module.scss';

type RadioType = {
    className? : string;
    name: string;
    label: string;
}

function Radio({ className, label, name, ...props } : RadioType) {

  return (
    <div className={`${className} ${styles.radio}`}>
        <input id={name} name={name} type="radio" { ...props} />
        <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default Radio
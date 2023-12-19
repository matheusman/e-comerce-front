import React from 'react'
import styles from './scss/Radio.module.scss';

type RadioType = {
    className? : string;
    name: string;
    label: string;
    value: string;
}

function Radio({ className, label, name, value, ...props } : RadioType) {

  return (
    <div className={`${className} ${styles.radio}`}>
        <input id={name} name={name} type="radio" { ...props} />
        <label htmlFor={name}>
          <div>
              {value}
          </div>
            {label}
        </label>
    </div>
  )
}

export default Radio
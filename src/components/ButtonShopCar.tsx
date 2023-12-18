import React from 'react'
import styles from './scss/Button.module.scss'

type ButtonTypeSelect = {
  text: string;
  className?: string;

}

function Button( { text, className} : ButtonTypeSelect) {
  return (
    <button className={className ? className : styles.button}>{text}</button>
  )
}

export default Button
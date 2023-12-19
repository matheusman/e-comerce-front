import React from 'react'
import styles from './scss/ErrorForm.module.scss'

type ErrorType = {
  error: string | null;
}

function ErroForm( { error } : ErrorType) {
  return (
    <div style={{ fontSize: '12px', color: "red"}}>
      {error && error}
    </div>
  )
}

export default ErroForm
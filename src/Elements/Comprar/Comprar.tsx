import React from 'react'
import Result from '../Carrinho/Result'
import Stages from '../Carrinho/Stages'
import styles from './scss/Comprar.module.scss'
import CompSquares from './CompSquares'

function Comprar() {
  return (
    <div className={styles.app}>
        <Stages />
        <div className={styles.comp}>
          <CompSquares />
        </div>
        <Result />
    </div>
  )
}


export default Comprar
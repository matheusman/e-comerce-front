import React from 'react'
import styles from './scss/ClickAcount.module.scss';

function ClickAcount( ) {
  return (
    <div className={`${styles.alert}`}>
        <div>Carrinho</div>
        <div>Minha conta</div>
        <div>Contato</div>
        <div>Sair da conta</div>
    </div>
    )
}

export default ClickAcount
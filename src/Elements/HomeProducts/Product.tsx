import React from 'react'
import styles from './scss/Product.module.scss'
import caixa from '../../assets/img/Caixa.jfif'

function Product( ) {
  return (
    <div className={styles.product}>
        <img src={caixa} />
        <p className={styles.title}>Caixa termica makita afiliado de texto</p>
        <div className={styles.datesPrice}>
            <p className={styles.promotion}>R$ 1000,00</p>
            <div className={styles.infoPriceProduct}>
                <p className={styles.realPrice}>R$ </p>
                <p className={styles.realPriceMain}>1000</p>
                <p className={styles.realPrice}>,00</p>
            </div>
            <p className={styles.infoText}>A vista no PIX até 30% off</p>
        </div>
        <button>
            <p>COMPRAR AGORA</p>
        </button>
    </div>
  )
}

export default Product
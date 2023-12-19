import React from 'react'
import IconNav from '../../components/IconNav'
import pix from '../../assets/svg/pix.svg'
import styles from './scss/CompSquares.module.scss'

function CompSquares() {
  return (
    <IconNav img={pix} className={styles.main}>
        <div>
            <div className={styles.title}>PAGUE COM PIX</div>
            <div className={styles.text}>à vista com o pix <div className={styles.green}>R$ 200,00</div> à vista com o pix</div>
        </div>    
    </IconNav>
  )
}

export default CompSquares
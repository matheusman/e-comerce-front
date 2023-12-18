import React from 'react'
import indetify from '../../assets/svg/020-id card 1.svg'
import confirm from '../../assets/svg/confirme (1) 1.svg'
import send from '../../assets/svg/031-route 1.svg' 
import car from '../../assets/svg/041-shopping cart 1.svg'
import IconNav from '../../components/IconNav'
import styles from './scss/Stages.module.scss'

function Stages() {
  return (
    <div className={styles.stages}>
        <IconNav img={car} className={styles.icon} text="CARRINHO" ><div className={styles.line}></div></IconNav>
        <IconNav img={indetify} className={styles.icon} text="IDENTIFICAÇÃO" ><div className={styles.line}></div></IconNav>
        <IconNav img={car} className={styles.icon} text="PAGAMENTO" ><div className={styles.line}></div></IconNav>
        <IconNav img={confirm} className={styles.icon} text="CONFIRMAÇÃO" ><div className={styles.line}></div></IconNav>
        <IconNav img={send} className={styles.icon} text="CONCLUIR" ></IconNav>
    </div>
  )
}

export default Stages
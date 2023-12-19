import React from 'react'
import IconNav from '../../components/IconNav'
import styles from './scss/PlusEndereco.module.scss'
import plus from '../../assets/svg/Vector.svg'

function PlusEndereco() {
  return (
    <IconNav className={styles.plus} img={plus} text='ADICOINAR ENDEREÇO'/>
  )
}

export default PlusEndereco
import React from 'react'
import icon from '../../assets/svg/006-bill 1.svg'
import styles from './scss/Emphasis.module.scss'

function Emphasis() {
  return (
    <div className={styles.emphasis}>
        <img src={icon} />
    <p className={styles.iconText}>EM DESTAQUE</p>
</div>
  )
}

export default Emphasis
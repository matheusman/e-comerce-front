import React from 'react'
import IconNav from '../../components/IconNav'
import info from '../../assets/svg/info 1.svg'
import styles from './scss/ProductComents.module.scss';

function ProductDescription( { className } : { className : string }) {
  return (
    <div className={className}>
        <IconNav img={info} text='Comentarios' className={styles.description}/>
        <div className={styles.info}>

        </div>
    
    </div>
  )
}

export default ProductDescription
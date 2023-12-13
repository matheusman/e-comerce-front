import React from 'react'
import IconNav from '../../components/icons/IconNav'
import info from '../../assets/svg/info 1.svg'
import styles from './scss/ProductDescription.module.scss';

function ProductDescription( { className } : { className : string }) {
  return (
    <div className={className}>
        <IconNav img={info} text='Descrição' className={styles.description}/>
        <div className={styles.info}>
          <div>
            <h3>Especificações</h3>
            <ul>
              <li>bateria: 5000mha</li>
            </ul>
          </div>
        </div>
    
    </div>
  )
}

export default ProductDescription
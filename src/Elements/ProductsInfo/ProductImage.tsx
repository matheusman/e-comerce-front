import React from 'react'
import product from '../../assets/img/Caixa.jfif'
import styles from './scss/ProductImage.module.scss'
import buttonPrev from '../../assets/svg/back.svg' 
import buttonNext from '../../assets/svg/next.svg'
import useCarroucel from '../../hooks/Carroucel'

type ProductImageType = {
    className : string
}

function ProductImage({ className } : ProductImageType) {
  const types = [<img src={product} />, <img src={product} />, <img src={product} />]
  const carroucel = useCarroucel(types, 150)
  return (
    <div className={className}>
      <div >
        <img className={styles.image} src={product} />
      </div>
      <div className={styles.carroucelImage}>
            <div>
              <button className={styles.prev} onClick={() => carroucel.prevIndex()}><img src={buttonPrev} /></button>
              <button className={styles.next}onClick={() => carroucel.nextIndex()}><img src={buttonNext} /></button>
            </div>
            <div style={{ transform: `translate(-${carroucel.number}px, 0px)`}} className={styles.divCarroucel}>
              { types.map( item => {console.log(item)
              return item
              })}
            </div>
      </div>
    </div>
  )
}

export default ProductImage
import React from 'react'
import ProductInfoMain from '../Elements/ProductsInfo/ProductInfoMain'
import ProductImage from '../Elements/ProductsInfo/ProductImage'
import styles from './scss/ProductInfo.module.scss'
import ProductDescription from '../Elements/ProductsInfo/ProductDescription'
import ProductComents from '../Elements/ProductsInfo/ProductComents'

function ProductInfo() {
  return (
    <div className={styles.productMain} >
        <ProductImage className={styles.productImage} />
        <ProductInfoMain className={styles.productInfo}/>
        <ProductDescription className={styles.productDesc}/>
        <ProductComents className={styles.productDesc}/>

    </div>
  )
}

export default ProductInfo
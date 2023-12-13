import React from 'react'
import styles from './scss/homeIndex.module.scss';
import ProductsCarroucel from '../../Elements/HomeProducts/ProductsCarroucel';

function Home() {
  return (
    <main>
        <section className={styles.sectionMain} >
        </section>
        <ProductsCarroucel />
    </main>
  )
}

export default Home
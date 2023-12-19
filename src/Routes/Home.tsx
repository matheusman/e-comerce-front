import React from 'react'
import styles from './scss/homeIndex.module.scss';
import ProductsCarroucel from '../Elements/HomeProducts/ProductsCarroucel';

function Home() {
  return (
    <main className="animeBottom">
        <section className={`${styles.sectionMain}`} >
          <div className={styles.circles}></div>
        </section>
        <ProductsCarroucel />
    </main>
  )
}

export default Home
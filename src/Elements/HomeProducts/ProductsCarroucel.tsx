import React from 'react'
import styles from './scss/ProductsCarroucel.module.scss';
import Product from './Product';
import prev from '../../assets/svg/proximo-botao 1.svg'
import next from '../../assets/svg/proximo-botao 2.svg'
import Emphasis from './Emphasis';
import { NavLink } from 'react-router-dom';
import useCarroucel from '../../hooks/Carroucel';

function ProductsCarroucel() {

  const [prod, setProd] = React.useState([',', ',', ',', ',', ',', ',', ',', ',', ',', ',',','])
  const width = 230

  const carroucel = useCarroucel(prod, width)


  return (

    <section className={styles.sectionCarroucel}>

        <Emphasis />
    
        
        <img className={styles.buttonCarroucelNext} onClick={ () => carroucel.nextIndex() } src={next} />
        <img className={styles.buttonCarroucelPrev} onClick={ () => carroucel.prevIndex() } src={prev} />
        


        <div style={{ transform : `translate(-${carroucel.number}px, 0px)`}} className={`${styles.carroucel} `}>
            {prod.map( (item, index) => {
              return (<div key={index}>
                <NavLink className={styles.navLink} to="sobre">
                  <Product />
                </NavLink>
              </div>)
            })}
        </div>
    </section>
  )
}

export default ProductsCarroucel
import React from 'react'
import styles from './scss/ProductsCarroucel.module.scss';
import Product from './Product';
import prev from '../../assets/svg/proximo-botao 1.svg'
import next from '../../assets/svg/proximo-botao 2.svg'
import Emphasis from './Emphasis';
import { NavLink } from 'react-router-dom';

function ProductsCarroucel() {

  const [prod, setProd] = React.useState([',', ',', ',', ',', ',', ',', ',', ',', ',', ',',','])
  const [index, setIndex] = React.useState(0)
  const [number, setNumber] = React.useState(0)
  const [click, setClick] = React.useState(true)
  const time = 200
  const width = 230

  function nextIndex () {
    if (click) {
      console.log(index)
      if (index + 1 > prod.length - 4 ) {
        setIndex(prod.length - 4)
        return number
      }
      setIndex(index + 1)
      return setNumber(number + width)
    }
    
  }

  function prevIndex () {
    if (click) {
      if (index - 1 < 0) {
        setIndex(0)
        return number
      }
      setIndex(index - 1)
      return setNumber(number - width)
    }
  }


  return (

    <section className={styles.sectionCarroucel}>

        <Emphasis />
    
        
        <img className={styles.buttonCarroucelNext} onClick={ () => nextIndex() } src={next} />
        <img className={styles.buttonCarroucelPrev} onClick={ () => prevIndex() } src={prev} />
        
        <div style={{ transform : `translate(-${number}px, 0px)`}} className={`${styles.carroucel} animeBottom`}>
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
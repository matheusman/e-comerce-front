import React from 'react'
import styles from './scss/Header.module.scss'
import user from '../assets/svg/perfil-de-usuario (1) 1.svg'
import shop from '../assets/svg/021-location 1.svg'
import bag from '../assets/svg/g5.svg'
import IconNav from '../components/IconNav'
import searchIcon from '../assets/svg/pesquisa 1.svg'
import { NavLink } from 'react-router-dom'
import ClickAcount from '../Elements/HeaderAcount/ClickAcount'

function Header() {
  const [searchClass, setSearchClass] = React.useState(false);
  const [click, setClick] = React.useState(false)
  return (
    <header>
      <form className={styles.search}>
            <input type="text" id="search" name="search" placeholder='DIGITE AQUI' className={`${styles.inputSearch} ${searchClass ? styles.selectInput : ''}`}
            onClick={ event => setSearchClass(true)} 
            onBlur={event => setSearchClass(false)}/>
            <button className={`${styles.buttonSearch} ${searchClass ? styles.selectButton : ''}`}><img src={searchIcon}/></button>
        </form> 
        <div>
          <NavLink className={styles.navLink} to="/">
            <p className={styles.iconText}>ELIXSHOP</p>
          </NavLink>
        </div>
        
        <nav className={styles.nav}>
            <IconNav className={styles.navigationHeader} img={shop}/>
            <IconNav className={styles.navigationHeader} img={bag}/>
            <IconNav className={`${styles.navigationHeader} ${styles.iconBlock}`} onClick={ () => setClick(!click)} img={user}>
              {click && <ClickAcount />}
            </IconNav>
        </nav>
    </header> 
  )
}

export default Header
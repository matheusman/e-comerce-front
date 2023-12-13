import React from 'react'
import styles from './scss/header.module.scss'
import user from '../../assets/svg/perfil-de-usuario (1) 1.svg'
import shop from '../../assets/svg/021-location 1.svg'
import bag from '../../assets/svg/g5.svg'
import IconNav from '../../components/icons/IconNav'
import searchIcon from '../../assets/svg/pesquisa 1.svg'
import "./scss/animationHeader.scss"
import { NavLink } from 'react-router-dom'

function Header() {
  const [searchClass, setSearchClass] = React.useState(false);
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
            <IconNav className={styles.navigationHeader} img={user}/>
        </nav>
    </header> 
  )
}

export default Header
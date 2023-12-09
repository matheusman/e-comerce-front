import React from 'react'
import styles from './scss/header.module.scss'
import user from '../../assets/user/015-user.svg'
import shop from '../../assets/svg/041-shopping cart.svg'
import bag from '../../assets/svg/003-bag.svg'
import IconNav from '../../components/icons/IconNav'
import searchIcon from '../../assets/svg/search.svg'
import "./scss/animationHeader.scss"

function Header() {
  const [searchClass, setSearchClass] = React.useState(false);
  return (
    <header>
        <div>
            <p className={styles.iconText}>Elixshop</p>
        </div>
        <form className={styles.search}>
            <input type="text" id="search" name="search" placeholder='DIGITE AQUI' className={`${styles.inputSearch} ${searchClass ? styles.selectInput : ''}`}
            onClick={ event => setSearchClass(true)} 
            onBlur={event => setSearchClass(false)}/>
            <button className={`${styles.buttonSearch} ${searchClass ? styles.selectButton : ''}`}><img src={searchIcon}/></button>
        </form>
        <nav className={styles.nav}>
            <IconNav className={styles.navigationHeader} icon={shop}/>
            <IconNav className={styles.navigationHeader} icon={bag}/>
            <IconNav className={styles.navigationHeader} icon={user}/>
        </nav>
    </header>
  )
}

export default Header
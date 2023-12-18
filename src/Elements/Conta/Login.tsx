import React from 'react'
import styles from './scss/Login.module.scss'
import LoginComponents from './LoginComponents'
import LoginCreateComponents from './LoginCreateComponents'

function Login() {

    const [click, setClick] = React.useState(false)
  return (
    <div className={styles.content}>
         <div style={{ transform: `translate(${click ? 700 : 0}px, 0px)`}} className={styles.createAccount}>

         </div>
         <div style={{ transform: `translate(-${click ? 500 : 0}px, 0px)`}} className={styles.login}>
            <div className={styles.account}>
                <p>{click ? "Criar Conta" : "Login"}</p>
                <button onClick={ () => {
                    setClick(!click)
                }}>{click ? "FAZER LOGIN" : "CRIAR CONTA"}</button>
            </div>

            {click ? <LoginCreateComponents /> : <LoginComponents />}
            </div>
            

    </div>
  )
}

export default Login
import React from 'react'
import styles from './scss/Login.module.scss'
import Input from '../../components/Input'
import useInput from '../../hooks/useInput'

function Login() {
    const userNameLogin = useInput()
    const password = useInput()
    const [click, setClick] = React.useState(false)
  return (
    <div className={styles.content}>
         <div className={styles.createAccount}>

         </div>
         <div className={styles.login}>
            <div className={styles.account}>
                <p>Login</p>
                <button>CRIAR CONTA</button>
            </div>
            <form>
                <Input className={styles.input} type="text" name="usename" placeholder='USENAME' {...userNameLogin}/>
                <Input className={styles.input} type="password" name="password" placeholder='PASSWORD' {...password}/>
                
                <div className={styles.lost}>
                    <p>ESQUECEU SUA SENHA?</p>
                    <button className={styles.loginButton}>Enviar</button>
                </div>
            </form>
            <div>
                <button className={styles.oauth}>GOOGLE</button>
            </div>
         </div>

    </div>
  )
}

export default Login
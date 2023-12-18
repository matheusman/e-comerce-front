import React from 'react'
import Input from '../../components/Input'
import styles from './scss/Login.module.scss';
import useInput from '../../hooks/useInput';

function LoginComponents() {
const userNameLogin = useInput()
const password = useInput()
  return (
    <div>
        <form>
            <Input className={`${styles.input}`} type="text" name="usename" placeholder='USENAME' {...userNameLogin}/>
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
    )
}

export default LoginComponents
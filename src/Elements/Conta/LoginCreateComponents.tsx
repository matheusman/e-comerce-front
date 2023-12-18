import React from 'react'
import Input from '../../components/Input'
import styles from './scss/Login.module.scss';

function LoginCreateComponents() {
  return (
    <div className={styles.createAccountForm}>
        <form>
            <div className={styles.createDiv}>
                <Input className={`${styles.input} ${styles.createInput50}`} name="Primeiro Nome" placeholder='Primeiro nome' type="text"/>
                <Input className={`${styles.input} ${styles.createInput50}`} name="Sobrenome" placeholder='sobrenome' type="text"/>
            </div>
            <Input className={`${styles.input} ${styles.createInputStart}`} name="Email" placeholder='email' type="text"/>
            <div className={styles.createDiv}>
                <Input className={`${styles.input} ${styles.createInput50}`} name="CPF" placeholder='000.000.000-00' type="text"/>
                <Input className={`${styles.input} ${styles.createInput50}`} name="Telefone" placeholder='(DDD) 00000-0000' type="text"/>
            </div>
                <Input className={`${styles.input} ${styles.createInputStart}`} name="Data de nascimento" placeholder='dd/mm/aaaa' type="text"/>
            <div className={styles.createDiv}>
                <Input className={`${styles.input} ${styles.createInput50}`} name="Senha" placeholder='senha' type="text"/>
                <Input className={`${styles.input} ${styles.createInput50}`} name="Confirmar senha" placeholder='confirmar senha' type="text"/>
            </div>
            <button className={styles.createButton}>Enviar</button>
        </form>
    </div>
  )
}

export default LoginCreateComponents
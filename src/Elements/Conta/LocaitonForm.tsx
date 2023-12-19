import React from 'react'
import input from './scss/AccountInfoDatas.module.scss'
import Input from '../../components/Input'
import styles from './scss/LocationForm.module.scss'

function LocaitonForm() {
  return (
    <div className={styles.locationForm}>
        <form className={styles.form}>
            <Input type='text' name='telefone' placeholder='Telefone' label="Telefone:" className={input.input}/>
            <Input type='text' name='telefone' placeholder='Telefone' label="Telefone:" className={input.input}/>
            <Input type='text' name='telefone' placeholder='Telefone' label="Telefone:" className={input.input}/>
            <Input type='text' name='telefone' placeholder='Telefone' label="Telefone:" className={input.input}/>
            <Input type='text' name='telefone' placeholder='Telefone' label="Telefone:" className={input.input}/>
            <Input type='text' name='telefone' placeholder='Telefone' label="Telefone:" className={input.input}/>
            <Input type='text' name='telefone' placeholder='Telefone' label="Telefone:" className={input.input}/>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default LocaitonForm
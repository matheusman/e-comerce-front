import React from 'react'
import IconNav from '../../components/IconNav'
import identity from '../../assets/svg/020-id card 1.svg'
import styles from './scss/AccountInfoDatas.module.scss'
import Input from '../../components/Input'
import delivery from '../../assets/svg/017-delivery 2.svg'
import Endereco from './Endereco'
import PlusEndereco from './PlusEndereco'
import LocaitonForm from './LocaitonForm'

function AccountInfoDatas() {
  return (
    <div className={styles.datas}>
        <div className={styles.person}>
            <IconNav className={styles.icon} img={identity} text='DADOS PESSOAIS'/>
            <div className={styles.buttonFrete}>
                <button className={`${styles.button} ${styles.gray}`}>TROCAR SENHA</button>
                <button className={`${styles.button} ${styles.gray}`}>TROCAR EMAIL</button>
            </div>
            <form>
                <Input type='text' name='nome' placeholder='Nome' label="Nome:" className={styles.input}/>
                <Input type='text' name='sobrenome' placeholder='Sobrenome' label="Sobrenome:" className={styles.input}/>
                <Input type='text' name='email' placeholder='Email' label="Email:" className={styles.input}/>
                <Input type='text' name='cpf' placeholder='CPF' label="CPF:" className={styles.input}/>
                <Input type='text' name='telefone' placeholder='Telefone' label="Telefone:" className={styles.input}/>
                <Input type='text' name='brithDay' placeholder='Data de Nascimento' label="Data de Nascimento:" className={styles.input}/>
                <div className={styles.trocar}>
                    <button className={`${styles.button} ${styles.blue} ${styles.alternate}`}>ALTERAR</button>
                </div>
            </form>
        </div>
        <div className={styles.person}>
            <IconNav className={styles.icon} img={delivery} text="LOCAL DE ENTREGA" />
            < Endereco />
            < PlusEndereco />
        </div>
        <LocaitonForm />    
    </div>
  )
}

export default AccountInfoDatas
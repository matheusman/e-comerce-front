import React from 'react'
import Input from '../../components/Input'
import styles from './scss/Login.module.scss';
import useInput from '../../hooks/useInput';
import ErroForm from '../Error/ErroForm';
import Select from '../../components/Select';

function LoginCreateComponents() {
    const name = useInput('nome')
    const sobrenome = useInput('sobrenome')
    const email = useInput('email')
    const cpf = useInput('cpf')
    const telefone = useInput('telefone')
    const data = useInput(null)
    const password = useInput('password')
    const replacePassword = useInput(null)
    const [days, setDays] = React.useState<string[]>(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'])
    const [mouths, setMouths] = React.useState<string[]>(['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'])
    return (
    <div className={styles.createAccountForm}>
        <form>
            <div className={styles.createDiv}>
                <div className={styles.validate}>
                    <Input className={`${styles.input} ${styles.createInput50}`} label="Primeiro Nome:" name="frist_name" placeholder='Primeiro nome' type="text" {...name}/>
                    <ErroForm error={name.error} />
                </div>
                <div className={styles.validate}>
                    <Input className={`${styles.input} ${styles.createInput50}`} name="last_name" label="Sobrenome:" placeholder='Sobrenome' type="text" {...sobrenome}/>
                    <ErroForm error={sobrenome.error} />
                </div>
            </div>
            <Input className={`${styles.input} ${styles.createInputStart}`} name="email" label="Email:" placeholder='Email' type="text" {...email}/>
            <ErroForm error={email.error} />
            <div className={styles.createDiv}>
                <div className={styles.validate}>
                    <Input className={`${styles.input} ${styles.createInput50}`} name="cpf" label="CPF:" placeholder='000.000.000-00' type="text" {...cpf}/>
                    <ErroForm error={cpf.error} />
                </div>
                <div className={styles.validate}>
                    <Input className={`${styles.input} ${styles.createInput50}`} name="telefone" label="Telefone:" placeholder='(DDD) 00000-0000' type="text" {...telefone} />
                    <ErroForm error={telefone.error} />
                </div>
            </div>
            <div className={styles.dateInput}>
                <div className={styles.labelSelect}>Data de nascimento</div>
                <div className={styles.dateBrith}>
                    <div className={styles.select} >
                        <Select option={days} label="Dias" className={styles.input}/>
                    </div>
                    <div className={styles.select}>
                        <Select option={mouths} label="Mes" className={styles.input} />
                    </div>
                    <div className={styles.select}>
                        <Input type='text' name="ano" label="Ano" placeholder='Ano' className={styles.input}/>                                                            
                        <ErroForm error={null}/>
                    </div>
                </div>
            </div>
            <div className={styles.createDiv}>
                <div className={styles.validate}>
                    <Input className={`${styles.input} ${styles.createInput50}`} name="senha" placeholder='Senha' label='Senha:' type="text" {...password}/>
                    <ErroForm error={password.error} />
                </div>
                <div className={styles.validate}>
                    <Input className={`${styles.input} ${styles.createInput50}`} name="corfirm_password"  placeholder='confirmar Senha' label="Confirmar Senha:" type="text" {...replacePassword}/>
                    <ErroForm error={replacePassword.error} />
                </div>
            </div>
            <button className={styles.createButton}>Enviar</button>
        </form>
    </div>
  )
}

export default LoginCreateComponents
import styles from './scss/AccountInfoDatas.module.scss';


export default function Endereco () {
    return (
        <div>

            <div>
                <div className={styles.send}>
                    <label htmlFor="1" className={styles.map}>
                        <h3>Casa</h3>
                        <div>
                            <p>Casa: Rua natalia lopes naves</p>
                            <p>Bairro: Chacaras tubalina</p>
                            <p>Cidade: Uberlândia - MG</p>
                            <p>CEP: 38415-330</p>
                            <p>Estabelecimento: Condominio apt 32</p>
                            <p>Complemento: Comercial lima</p>
                        </div>
                    </label>
                    <div className={styles.inputFrete}>
                        <input type="radio" id="1" name="elements"/>
                        <div className={styles.buttonFrete}>
                            <button className={`${styles.button} ${styles.blue}`}>EDITAR</button>
                            <button className={`${styles.button} ${styles.red}`}>DELETAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

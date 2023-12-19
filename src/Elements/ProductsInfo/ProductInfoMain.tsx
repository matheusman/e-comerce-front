import React from 'react'
import styles from './scss/ProductInfoMain.module.scss'
import money from '../../assets/svg/029-price tag 1.svg'
import creditCard from '../../assets/svg/015-credit card 1.svg'
import addCart from '../../assets/svg/001-add cart 1.svg'
import delivery from '../../assets/svg/017-delivery 2.svg'
import plusCard from '../../assets/svg/Vector.svg'
import IconNav from '../../components/IconNav'
import quantity from '../../assets/svg/caixas (1) 1.svg'
import Quantity from '../../components/Quantity'

type ProductInfoType = {
    className : string
}

function ProductInfoMain({ className } : ProductInfoType) {
    const [parcela, setParcela] = React.useState(false)
    
  return (
    <main className={`animeBottom ${className}`}>
            <div>
                <p className={styles.title}>Fonte gamer 30W bronze master teste de string</p>
            </div>
            <div className={styles.price}>
                    <img src={money} />
                    <div className={styles.priceText}>
                        <div className={styles.prev} >
                            <p>De: </p>
                            <p className={`${styles.decorator}`}>R$ 899,00</p>
                            <p> Para:</p>
                        </div>
                        <div className={styles.promotion}>
                            <p className={styles.fontOne}>R$</p>
                            <p className={styles.fontTwo}>1000</p>
                            <p className={styles.fontThree}>,00</p>
                        </div> 
                        <p className={styles.pix}>A vista no <strong>PIX</strong> 20% off</p>
                    </div>
                </div>
            <div className={styles.card}>
                <img src={creditCard} />
                <div>
                    <div className={styles.cardPrice}>
                        <p className={styles.fontOne}>R$</p>
                        <p className={`${styles.fontTwo} ${styles.cardDecorator}`}> 1000</p>
                        <p className={styles.fontThree}>,00</p>
                    </div>
                    <div className={styles.textCard}>
                        <p className={styles.cardTextInfo}><strong>12X</strong> de <strong>R$ 624,00</strong> sem juros no cartão</p>
                    </div>
                    <div>
                        <IconNav img={plusCard} className={styles.viewCard} onClick={ () => setParcela( !parcela)} text='VER PARCELAMENTO'/>
                        
                    </div>
                    
                </div>
                
            </div>
            <div>{parcela && <div className={`${styles.parcelamento} animeBottom`}>
                            <div>1x de até 1000,00 por mes</div>
                            <div>2x de até 1000,00 por mes</div>
                            <div>3x de até 1000,00 por mes</div>
                            <div>4x de até 1000,00 por mes</div>
                            <div>5x de até 1000,00 por mes</div>
                            <div>6x de até 1000,00 por mes</div>
                            <div>7x de até 1000,00 por mes</div>
                            <div>8x de até 1000,00 por mes</div>
                        </div>}
                        </div>
            <div>
                <IconNav color='black' className={styles.quantity} text={"Quantidade:"} img={quantity} />
                <Quantity />
            </div>

            <div className={styles.shop}>
                <button>COMPRAR AGORA</button>    
                <img src={addCart} />
            </div>

            <div className={styles.frete}>
                <IconNav img={delivery} className={styles.delivery} text="Frete:"/>
                <form className={styles.freteForm}>
                    <input type="text" placeholder='00000-000' />
                    <button>CALCULAR</button>
                </form>
            </div>
        </main>
  )
}

export default ProductInfoMain
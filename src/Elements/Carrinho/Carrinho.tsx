import React from "react";
import Squares from "./Squares";
import styles from "./scss/Carrinho.module.scss";
import IconNav from "../../components/IconNav";
import delivery from "../../assets/svg/017-delivery 2.svg";
import location from "../../assets/svg/021-location 2.svg";
import car from "../../assets/svg/041-shopping cart 1.svg";

import produto from "../../assets/img/Caixa.jfif";
import plus from "../../assets/svg/mais 1.svg";
import Stages from "./Stages";
import Button from "../../components/ButtonShopCar";
import Result from "./Result";
import Radio from "../../components/Radio";
import Quantity from "../../components/Quantity";

function Carrinho() {
  const [quantity, setQuantity] = React.useState();
  return (
    <div className={styles.app}>
      <Stages />
      <Squares className={styles.car}>
        <IconNav img={location} text="Localização" className={styles.icons} />
        <div className={styles.content}>
          <h3>Casa</h3>
          <div className={styles.lines}>
            <div className={styles.container}>
              <p>
                Rua: Rua natalia lopes naves
              </p>
                Bairro: Chacaras tubalina
              <p>
              </p>
              <p>
                N°: 34
              </p>
            </div>
            <div className={styles.container}>
              <p>
                Cidade: Uberlândia - MG
              </p>
              <p>
                CEP: 38415-330
              </p>
              <p>
                Complemento: Comercial lima
              </p>
            </div>
            <div  className={styles.container}>
              <p>
              Complemento: Comercial lima
              </p>
            </div >
          </div>
          <div className={styles.edit}>
            <Button text="ALTERAR ENDEREÇO"  className={`${styles.buttons} ${styles.gray}`}/>
          </div>
        </div>
        
      </Squares>
      <div className={styles.car}>
        <IconNav img={car} text="Produtos" className={styles.icons} />
        <div className={`${styles.lines}`}>
          <div className={styles.products}>
            <div>
              <img src={produto} />
            </div>
            <div className={styles.infoProduct}>
              <p className={styles.lettersProduct}>
                Produto de qulidade teste de tamanho de fonte quantidade
                gigandtesca para testes unitarios
              </p>
              <div className={styles.infoPromtion}>
                <div>Desconto de até R$ 200,00</div>
                <button className={`${styles.buttons} ${styles.color} ${styles.red}`}>REMOVER O PRODUTO</button>
              </div>
            </div>
            <div className={`${styles.quantity} ${styles.infoTable}`}>
              <div>QUANTIDADE</div>
              <Quantity className={styles.quantityControl}/>
              <div></div>
            </div>
            <div className={`${styles.end} ${styles.endTable}`}>
              <div>VALOR PRODUTOS:</div>
              <div >R$ 1000,00</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.car}>
          <IconNav img={delivery} text="Frete" className={styles.icons} />
          <div className={styles.freteValues}>
          <div className={`${styles.valueToLocation} ${styles.contentFreteValue}`}>
            <p>Valor da entrega:</p>
            <form className={styles.form}>
              <Radio label="R$ 16,90" value="Frete da sedex - " name="priceOne" className="" />
              <Radio label="R$ 16,90" value="Frete da sedex - " name="priceOne" className="" />
              <Radio label="R$ 16,90" value="Frete da sedex - " name="priceOne" className="" />
              <Radio label="R$ 16,90" value="Frete da sedex - " name="priceOne" className="" />
            </form>
          </div>
          </div>
          
      </div>
      <Result />
      
    </div>
  );
}

export default Carrinho;

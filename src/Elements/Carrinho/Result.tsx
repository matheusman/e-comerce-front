import React from "react";
import styles from "./scss/Carrinho.module.scss";
import IconNav from "../../components/IconNav";
import bill from "../../assets/svg/006-bill 1.svg";
import Button from "../../components/ButtonShopCar";

function Result() {
  return (
    <div className={styles.absolute}>
      <div className={styles.result}>
        <div className={styles.resultContent}>
          <IconNav img={bill} text="RESUMO" className={styles.icons} />
          <div className={styles.widthContent}>
            <div
              className={`${styles.resultPrice} ${styles.resultPriceBorderOne}`}
            >
              <p>Valor dos produtos:</p>
              <h3>R$1300,00</h3>
            </div>
            <div className={styles.resultPriceBorderTwo}>
              <div className={styles.resultPrice}>
                <p>Valor dos produtos:</p>
                <h3>R$1300,00</h3>
              </div>
              <div className={styles.resultPrice}>
                <p>Valor dos produtos:</p>
                <h3>R$1300,00</h3>
              </div>
              <div className={styles.device}>(em até 10x de 1440,00 sem juros)</div>
            </div>
          </div>
        </div>
        <div className={styles.elements}>
          <div className={styles.pixSquares}>
            <p className={styles.valuePix}>Valor à Vista no <strong>PIX</strong></p>
            <h3>R$ 1.250,00</h3>
            <p className={styles.economy}>(Economize: R$ 254,00)</p>
          </div>
          <Button text="IR PARA O PAGAMENTO" />
        </div>
      </div>
    </div>
  );
}

export default Result;

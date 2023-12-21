import React from "react";
import styles from "../../styles/UI/BasketGood.module.scss";
import favorite from "../../assets/main-icons/favorite.png";
import snus from "../../assets/stickers/snus.png";
import trash from "../../assets/main-icons/trash.png";
import { useNavigate } from "react-router-dom";
import { PublicRoutesEnum } from "../../utils/consts";

const BasketGood = () => {
  const navigate = useNavigate();
  const param = 'dsadsa'
  const goodName = 'yahoo'
  const toCard = () => {
    navigate(`${PublicRoutesEnum.GoodPath}/${param}/${goodName}`);
  };
  return (
    <div className={styles.basket__good} onClick={toCard}>
      <div className={styles.good__grid}>
        <div className={styles.good__info__section}>
          <div className={styles.image__container}>
            <img src={favorite} />
            <img src={snus} className={styles.sticker} />
          </div>
          <div className={styles.info__container}>
            <h5 className={styles.good__info}>Название товара</h5>
            <h5 className={styles.good__description}>
              Описание товара и его характеристики
            </h5>
          </div>
        </div>
        <div className={styles.good__actions__section}>
          <div className={styles.amount__container}>
            <div className={styles.buttons}>
              <div className={styles.button__plus}>-</div>
              <div className={styles.amount}>1</div>
              <div className={styles.button__minus}>+</div>
            </div>
            <div className={styles.price__container}>
              <span>Цена :</span>
              <span className={styles.price}>
                <h5>12321</h5>
                <i>$</i>
              </span>
            </div>
          </div>
          <div className={styles.actions__container}>
            <img src={favorite} style={{ width: 25, height: 25 }} />
            <img src={trash} style={{ width: 25, height: 25 }} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketGood;

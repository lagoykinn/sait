import React, { FC, useState } from "react";
import styles from "../../styles/MainPage.module.scss";
import basket from "../../assets/nav-icons/basket.png";
import favorite from "../../assets/nav-icons/favorite.png";
import notFavorite from "../../assets/nav-icons/heart.png";
import image from "../../assets/image.png";
import { IShoes } from "../../types/shoes";

const GoodCard: FC<IShoes> = ({
  brand,
  color,
  model,
  price,
  shoes,
  size,
  type,
  info,
}) => {
  console.log(Object.entries(color).map((e) => e[0]));
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div className={styles.good__item}>
      <img src={notFavorite} className={styles.favorites__icon} />
      <img src={image} alt="" className={styles.item__image} />
      <div className={styles.item__description}>
        <div className={styles.name} style={{ margin: "10px 0", fontSize: 12 }}>
          {type}
        </div>
        <div className={styles.name} style={{ fontSize: 20 }}>
          {brand}
        </div>
        <div className={styles.description}>{info}</div>
        <div className={styles.amount}>
          <span>Цвета в наличии</span>
          <div className={styles.colors}>
            {color &&
              Object.entries(color).map((e) => (
                <div
                  key={e[0]}
                  onClick={() => setSelectedColor(e[0])}
                  className={styles.color__circle}
                  style={
                    selectedColor === e[0]
                      ? {
                          backgroundColor: `${e[0]}`,
                          height: 20,
                          width: 20,
                          border: "2px solid blue",
                        }
                      : {
                          backgroundColor: `${e[0]}`,
                          border: "2px solid black",
                        }
                  }
                />
              ))}
          </div>
        </div>
      </div>
      <div className={styles.item__buy__button}>
        <div className={styles.button}>
          <img src={basket} />
          <div className={styles.buy__button}>В корзину</div>
        </div>
      </div>
    </div>
  );
};

export default GoodCard;

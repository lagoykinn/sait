import React from "react";
import styles from "../../styles/UI/Navigation.module.scss";
import { useActions } from "../../hooks/useActions";
import { PublicRoutesEnum } from "../../utils/consts";
import { useNavigate } from "react-router-dom";

const arr = ["кроссовки", "кеды", "по скидке", "хайп"];

const NavigationPanel = () => {
  const navigate = useNavigate()
  const { setLightTheme, setDarkTheme, change, openModal } = useActions();

  const openPage = async (route: string, toProfile?: boolean) => {
    if (toProfile) {
      if (localStorage.getItem("isAuth")) {
        setDarkTheme();
        setTimeout(() => {
          navigate(PublicRoutesEnum.UserPath);
          setLightTheme();
        }, 1000);
      } else {
        openModal();
      }
    } else {
      setDarkTheme();
      setTimeout(() => {
        navigate(route);
        setLightTheme();
      }, 1000);
    }
  };

  return (
    <div
      className={styles.panel__container}
      style={{ height: arr.length * 60 + 50 }}
    >
      <h3 className={styles.panel__title}>Каталог</h3>
      {arr.map((e) => (
        <div key={e} className={styles.panel__category}>
          <span
            className={styles.category__name}
            onClick={() => openPage(PublicRoutesEnum.BasketPath, false)}
          >
            {e}
          </span>
        </div>
      ))}
    </div>
  );
};

export default NavigationPanel;

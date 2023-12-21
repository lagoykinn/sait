import burger from "../icons/burger.png";
import favorites from "../icons/favorites.png";
import loop from "../icons/loop.png";
import order from "../icons/order.png";
import login from "../icons/login.png";

import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { useActions } from "../hooks/useActions";
import { PublicRoutesEnum } from "../utils/consts";
import { Link, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ReactFlagsSelect from "react-flags-select";
import { Switch } from "@mui/material";
import { themes } from "../utils/colors";
import { History } from "./Functions/Navigate";
import { registration } from "../http/userApi";

const Navbar = () => {
  const { openModal, setLightTheme, setDarkTheme,  } = useActions();
  const navigate = useNavigate();
  const { theme } = useTypedSelector((state) => state.theme);
  const [flag, setFlag] = useState("RU");
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
    <header className={styles.header}>
      <div className={styles.second__header}>
        <div className={styles.second__grid}></div>
      </div>
      <div className={styles.main__header}>
        <div className={styles.main__grid}>
          <img src="#" alt="logo" />
          <div className={styles.catalog__container}>
            <img className={styles.burger__icon} src={burger} />
            <span className={styles.catalog__title}>Каталог</span>
          </div>

          <div className={styles.user__container}>
            <div className={styles.input__search}>
              <div>
                <img src={loop} />
              </div>
              <input type="text" />
            </div>
            <div className={styles.user__icons}>
              <img src={favorites} />
            </div>
            <div className={styles.user__icons}>
              <img src={order} />
            </div>
            <div
              className={styles.user__icons}
              onClick={() => openPage(PublicRoutesEnum.UserPath, true)}
            >
              <img src={login} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

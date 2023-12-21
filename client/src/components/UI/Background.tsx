import React, { useEffect, useState } from "react";
import styles from "../../styles/UI/Background.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const Background = () => {
  const { setDarkTheme, setLightTheme } = useActions();
  const [isDark, setIsDark] = useState(true);
  const { theme } = useTypedSelector((state) => state.theme);
  const cases: any = {
    LIGHT: false,
    DARK: true,
  };
  useEffect(() => {
    setIsDark(false);
  }, []);

  useEffect(() => {
    setIsDark(cases[theme])
  }, [theme])

  return (
    <div
      className={
        isDark
          ? `${styles.main__background} ${styles.active__background}`
          : styles.main__background
      }
    ></div>
  );
};

export default Background;

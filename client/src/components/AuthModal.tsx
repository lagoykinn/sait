import showpassword from "../icons/show.png";
import hidePassword from "../icons/hide.png";
import React, { ChangeEvent, FC, useState } from "react";
import styles from "../styles/UI/AuthModal.module.scss";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-input-2/lib/style.css";
import "../styles/Phone.scss";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { $user } from "../http";
import PhoneInput from "./UI/PhoneInput";
import axios from "axios";
import { Link } from "react-router-dom";
import { mailExp } from "../utils/regular";

const AuthModal: FC = () => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
  const { isOpen } = useTypedSelector((state) => state.modal);
  const { closeModal, openModal, registration } = useActions();
  const [login, setLogin] = useState<boolean>(false);
  const [phone, setPhone] = useState<any>();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [dirtyPassword, setDirtyPassword] = useState(false);
  const [dirtyEmail, setDirtyEmail] = useState(false);

  const [isPassword, setIsPassword] = useState(true);

  function checkEmail(e: any) {
    const isCorrect = mailExp.test(String(e).toLowerCase());
    if (!isCorrect) setEmailError("Некорректная почта");
    else setEmailError("");
  }

  function checkPassword(e: any) {
    if (e < 3 || e > 12) {
      setPasswordError(
        "Пароль должен быть не меньше 3 и не больше 12 символов"
      );
      if (!e) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  }

  const activeButton = passwordError || emailError !== "" ? true : false;

  return (
    <div
      className={
        isOpen
          ? `${styles.main__container_auth} ${styles.active}`
          : styles.main__container_auth
      }
      onClick={(e) => {
        closeModal();
      }}
    >
      <div
        className={
          isOpen ? `${styles.modal__content} ${styles.modal__active}` : ""
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.close} onClick={closeModal}>
          x
        </div>

        {!login ? (

        // REGISTRATION MODAL 

          <div className={styles.registration__modal}>
            <h3 className={styles.registration__title}>Регистрация</h3>
            <PhoneInput state={phone} setState={setPhone} />
            <div className={styles.input__container}>
              <span>ФИО</span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ФИО"
                className={`${styles.registration__username} registration__input`}
              />
            </div>
            <div className={styles.input__container}>
              <span>Email</span>
              <input
                onBlur={() => checkEmail(email)}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                type="email"
                placeholder="Email"
                className={`${styles.registration__email} registration__input`}
              />
              <div
                className={styles.data__checker}
                style={emailError ? { opacity: 1 } : { opacity: 0 }}
              >
                {emailError}
              </div>
            </div>
            <div className={styles.input__container}>
              <span>Password</span>
              <input
                onBlur={() => checkPassword(password.length)}
                type={isPassword ? "password" : "text"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                className={`${styles.registration__password} registration__input`}
              />
              <img
                src={!isPassword ? showpassword : hidePassword}
                onClick={() => setIsPassword(!isPassword)}
                className={styles.password__icon}
              />
              <div
                className={styles.data__checker}
                style={passwordError ? { opacity: 1 } : { opacity: 0 }}
              >
                {passwordError}
              </div>
            </div>
            <div className={styles.registration__agree}>
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                Нажимая кнопку "Продолжить", я даю свое согласие на обработку
                данных
              </label>
            </div>
            <div className={styles.auth__toggle}>
              Уже есть аккаунт? - <span onClick={() => setLogin(!login)}>войти</span>
            </div>
            <div className={styles.registration__button_container}>
              <button
                className={styles.registration__button}
                disabled={activeButton}
                onClick={() => registration(email, password, username)}
              >
                Продолжить
              </button>
            </div>
          </div>
        ) : (
            
            // LOGIN MODAL

          <div className={styles.registration__modal}>
            <h3 className={styles.registration__title}>Вход</h3>
            <div className={styles.input__container}>
              <span>Email</span>
              <input
                onBlur={() => checkEmail(email)}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                type="email"
                placeholder="Email"
                className={`${styles.registration__email} registration__input`}
              />
              <div
                className={styles.data__checker}
                style={emailError ? { opacity: 1 } : { opacity: 0 }}
              >
                {emailError}
              </div>
            </div>
            <div className={styles.input__container}>
              <span>Password</span>
              <input
                onBlur={() => checkPassword(password.length)}
                type={isPassword ? "password" : "text"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                className={`${styles.registration__password} registration__input`}
              />
              <img
                src={!isPassword ? showpassword : hidePassword}
                onClick={() => setIsPassword(!isPassword)}
                className={styles.password__icon}
              />
              <div
                className={styles.data__checker}
                style={passwordError ? { opacity: 1 } : { opacity: 0 }}
              >
                {passwordError}
              </div>
            </div>
            <div className={styles.auth__toggle}>
              Нету аккаунта? - <span onClick={() => setLogin(!login)}>регистрация</span>
            </div>
            <div className={styles.registration__button_container}>
              <button
                className={styles.registration__button}
                disabled={activeButton}
                onClick={() => registration(email, password, username)}
              >
                Продолжить
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;

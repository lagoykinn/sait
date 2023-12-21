import React from "react";
import styles from "../styles/Footer.module.scss";
import { payIcons } from "../utils/data";

const Footer = () => {
    return (
        <footer className={styles.footer__container}>
            <div className={styles.additionally__footer}>
                <div className={styles.store__info}>
                    Yarco © {new Date().getFullYear()}
                </div>
                    <div>license</div>
            </div>
        </footer>
    );
};

export default Footer;

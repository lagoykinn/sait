import React, { FC } from 'react';
import { ITitle } from '../types/types';
import styles from '../styles/Title.module.scss'

const Title:FC<ITitle> = ({title}) => {
    return (
        <div className={styles.main__title}>
            <span>{title}</span>
            <div>Главная страница - {title}</div>
        </div>
    );
};

export default Title;
import React from 'react';
import styles from '../styles/Body.module.scss'

const Body = ({children}: any) => {
    return (
        <div className={styles.body__container}>
            {children}
        </div>
    );
};

export default Body;
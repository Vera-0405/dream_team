import React from "react";
import styles from './index.module.css';

export const User = ({ username, phone, email }) => {

    return <div className={styles.wrapper}>
        <div>{username}</div>
        <div>{phone}</div>
        <div>{email}</div>
    </div>
};
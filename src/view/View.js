import React from 'react';
import styles from './view.module.css';
import Create from '../components/createForm/Create';
import List from '../components/listForm/List';

const View = () => {
    return (
        <section className={styles.container}>
            <Create />
            <List />
        </section>
    );
};

export default View;
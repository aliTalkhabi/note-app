import React from 'react';
import styles from './create.module.css';
import TitleInput from '../createForm/titleInput/TitleInput';


const Create = () => {
    return (
        <div className={styles.formContainer}>
            <TitleInput />
        </div>
    );
};

export default Create;
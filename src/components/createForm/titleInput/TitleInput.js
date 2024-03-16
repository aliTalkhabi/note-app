import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import styles from './TitileInput.module.css'
import { SendNoteRequest, sendNoteRequestSuccess } from '../../../servers/API';


const TitleInput = () => {
    const [titleData, setTitleData] = useState('');
    const [descriptionData, setDescriptionData] = useState('');
    const setValueTitleData = (e) => {
        setTitleData(e.target.value)
    }
    const setValueDescriptionData = (e) => {
        setDescriptionData(e.target.value)
    }
    const saveData = async () => {
        // await SendNoteRequestuest(titleData, descriptionData);
        await SendNoteRequest(titleData, descriptionData);
        await sendNoteRequestSuccess();
    }
    return (
        <>
            <Box maxWidth='95%' height='10%' margin='10px auto'>
                <TextField fullWidth value={titleData} label="Enter your title" type='text' color='primary' autoComplete='off' onChange={setValueTitleData} />

            </Box>
            <Box maxWidth='95%' height='75%' margin='10px auto'>
                <TextField className={`${styles.input},${styles.label}`} value={descriptionData} fullWidth label="Enter your description" type='text' color='primary' style={{ 'height': '100%' }} autoComplete='off' onChange={setValueDescriptionData} />
            </Box >
            <Box maxWidth='95%' height='10%' margin='10px auto' display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Button variant="outlined" onClick={saveData}>Save</Button>
            </Box>
        </>
    );
};

export default TitleInput;

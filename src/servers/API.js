
import axios from 'axios';

const Serv_URL = 'https://jsonplaceholder.typicode.com';


export const SendNoteRequest = async (titleData, descriptionData) => {
    axios.post(Serv_URL + '/posts', { titleData, descriptionData })
        .then((response => {
            titleData = response.data.titleData;
            descriptionData = response.data.descriptionData;

        }))
        .catch(error => { console.log(error); })

}
export const sendNoteRequestSuccess = async (titleData, descriptionData) => {
    // alert('sik')
    axios.get(Serv_URL + '/posts').then((response) => {
        console.log(response.data);
        console.log(titleData);
        console.log(descriptionData);
    })

}
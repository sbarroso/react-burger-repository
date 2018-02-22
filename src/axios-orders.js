import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburguer.firebaseio.com/'
})

export default instance;
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://frontend-dtmoney.herokuapp.com/api'
})
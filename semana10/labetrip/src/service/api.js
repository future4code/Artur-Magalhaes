import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/arturmagalhaes/',
});

export const apiCountry = axios.get('https://restcountries.eu/rest/v2/all')

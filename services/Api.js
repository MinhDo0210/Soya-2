/* eslint-disable prettier/prettier */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.thecoffeehouse.com/',
    timeout: 6000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const getProductList = () => instance.get('api/v2/menu');

export const getCategoryList = () => instance.get('api/v2/category/web');

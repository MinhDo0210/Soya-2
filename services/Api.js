/* eslint-disable prettier/prettier */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.thecoffeehouse.com/api/',
    timeout: 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const getProductList = () => instance.get('v2/menu');

export const getCategoryList = () => instance.get('v2/category/web');

export const getRestaurantList = () => instance.get('get_all_store');

export const login = (params) => instance.post('verify_mobile', params);

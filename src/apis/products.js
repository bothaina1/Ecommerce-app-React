import axiosInstance from './axiosInstance';

export const getProducts = (page) => axiosInstance.get('/products',{ params :{limit : 10 ,skip: (page - 1) * 10}});
export const getProductById = (id) => axiosInstance.get(`/products/${id}`);

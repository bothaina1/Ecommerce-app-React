import axiosInstance from './axiosInstance';

export const getProducts = () => axiosInstance.get('/products',{ params :{limit : 10 }});
export const getProductById = (id) => axiosInstance.get(`/products/${id}`);

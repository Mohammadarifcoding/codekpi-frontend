import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 4000,
});
const useAxios = () => {
    return instance
};

export default useAxios;
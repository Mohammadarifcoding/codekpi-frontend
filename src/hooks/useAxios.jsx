import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://backend.codekpi.club/api/v1',
  timeout: 4000,
});
const useAxios = () => {
    return instance
};

export default useAxios;
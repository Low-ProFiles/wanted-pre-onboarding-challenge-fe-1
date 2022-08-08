import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.WANTED_API,
});

export default Axios;

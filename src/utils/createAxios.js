import axios from 'axios';
import qs from 'qs';

export const createAxios = axios => baseURL =>
  axios.create({
    baseURL,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

export default createAxios(axios);

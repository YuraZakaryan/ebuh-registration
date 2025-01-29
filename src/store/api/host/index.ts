import axios from 'axios';

export const $api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const $edusHost = axios.create({
  baseURL: 'http://apidev.edusystems.am' + '/api',
});

$api.interceptors.request.use();

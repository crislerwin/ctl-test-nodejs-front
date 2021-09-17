import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://learn.eastus2.cloudapp.azure.com:8000',
});
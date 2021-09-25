import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3004',
});

// If you want to connect to api use http://nodeapi.eastus2.cloudapp.azure.com
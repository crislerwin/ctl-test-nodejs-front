import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3002',
});

// If you want to connect to api use http://nodeapi.eastus2.cloudapp.azure.com
// frontend/src/services/discoveryService.js
import apiClient from './api';

export const discoveryService = {
  query: async (query, limit = 20, opts = {}) => {
    const payload = { query, limit, ...opts };
    return await apiClient.post('/discovery/query', payload);
  },
  get: async (discoveryId) => {
    return await apiClient.get(`/discovery/${discoveryId}`);
  },
  products: async (query, limit = 20, opts = {}) => {
    const payload = { query, limit, ...opts };
    return await apiClient.post('/discovery/products', payload);
  }
};



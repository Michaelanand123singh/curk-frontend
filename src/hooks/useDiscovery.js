// frontend/src/hooks/useDiscovery.js
import { useState, useCallback } from 'react';
import { discoveryService } from '../services/discoveryService';

export const useDiscovery = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [discoveryId, setDiscoveryId] = useState(null);
  const [mode, setMode] = useState('companies'); // 'companies' | 'products'

  const search = useCallback(async (query, limit = 20, opts = {}) => {
    try {
      setLoading(true);
      setError(null);
      const data = mode === 'products'
        ? await discoveryService.products(query, limit, opts)
        : await discoveryService.query(query, limit, opts);
      setDiscoveryId(data.discovery_id);
      setResults(Array.isArray(data.results) ? data.results : []);
      return data;
    } catch (err) {
      setError(err.message || 'Discovery failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [mode]);

  return { loading, error, results, discoveryId, search, mode, setMode };
};



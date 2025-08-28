// frontend/src/pages/DiscoveryPage.jsx
import React, { useState } from 'react';
import { useDiscovery } from '../hooks/useDiscovery';
import { useAnalysis } from '../hooks/useAnalysis';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const DiscoveryPage = () => {
  const { search, results, loading, error, mode, setMode } = useDiscovery();
  const { startAnalysis } = useAnalysis();
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(20);
  const [useCrawl, setUseCrawl] = useState(true);
  const [locationHint, setLocationHint] = useState('Delhi');
  const [categoryHint, setCategoryHint] = useState('event management');
  const [provider, setProvider] = useState('google_places');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!query || query.trim().length < 4) return;
    await search(
      query.trim(),
      limit,
      { use_crawl: useCrawl, location_hint: locationHint, category_hint: categoryHint, provider }
    );
  };

  const handleAnalyze = async (url) => {
    try {
      await startAnalysis(url);
    } catch (err) {
      // swallow; errors handled in hook
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Discovery</h1>
          <p className="mt-2 text-gray-600">Describe what you need. We will find relevant company websites you can analyze.</p>
        </div>

        {error && (
          <div className="mb-6">
            <ErrorMessage message={error} />
          </div>
        )}

        <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="mb-3">
            <label className="block text-xs text-gray-600 mb-1">Search type</label>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="radio" name="mode" checked={mode === 'companies'} onChange={() => setMode('companies')} />
                Companies
              </label>
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="radio" name="mode" checked={mode === 'products'} onChange={() => setMode('products')} />
                Products
              </label>
            </div>
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your requirement</label>
          <textarea
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="e.g., List event management companies near Delhi"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Location hint</label>
              <input
                type="text"
                value={locationHint}
                onChange={(e) => setLocationHint(e.target.value)}
                className="w-full border rounded-md p-2"
                placeholder="e.g., Delhi"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Category hint</label>
              <input
                type="text"
                value={categoryHint}
                onChange={(e) => setCategoryHint(e.target.value)}
                className="w-full border rounded-md p-2"
                placeholder="e.g., event management"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Provider</label>
              <select value={provider} onChange={(e) => setProvider(e.target.value)} className="w-full border rounded-md p-2">
                <option value="google_places">Google Places</option>
                <option value="duckduckgo">DuckDuckGo</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Result limit</label>
              <input
                type="number"
                min={1}
                max={50}
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value) || 20)}
                className="w-full border rounded-md p-2"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" checked={useCrawl} onChange={(e) => setUseCrawl(e.target.checked)} />
                Improve results with crawling
              </label>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Searching…' : 'Search'}
              </button>
            </div>
          </div>
        </form>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Results</h2>
          </div>
          {loading ? (
            <div className="p-6"><LoadingSpinner /></div>
          ) : (
            <ul className="divide-y">
              {results.map((r, idx) => (
                <li key={idx} className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <a href={r.url} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                      {r.title || r.url}
                    </a>
                    <p className="text-sm text-gray-600 mt-1 break-all">{r.url}</p>
                    {mode === 'companies' && r.address && <p className="text-sm text-gray-700 mt-1">{r.address}</p>}
                    {mode === 'companies' && (r.phone || r.email) && (
                      <p className="text-sm text-gray-700 mt-1">
                        {r.phone && <span className="mr-3">📞 {r.phone}</span>}
                        {r.email && <span>✉️ {r.email}</span>}
                      </p>
                    )}
                    {mode === 'products' && (
                      <p className="text-sm text-gray-700 mt-1">
                        {r.platform && <span className="mr-3">🏷 {r.platform}</span>}
                        {r.price && <span className="mr-3">💰 {r.price}</span>}
                        {r.availability && <span>📦 {r.availability}</span>}
                      </p>
                    )}
                    {r.snippet && <p className="text-sm text-gray-500 mt-2">{r.snippet}</p>}
                  </div>
                  <div className="shrink-0">
                    {mode === 'companies' ? (
                      <button
                        onClick={() => handleAnalyze(r.url)}
                        className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        Analyze
                      </button>
                    ) : (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                      >
                        View
                      </a>
                    )}
                  </div>
                </li>
              ))}
              {results.length === 0 && (
                <li className="p-6 text-gray-500">No results yet. Try a search.</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPage;



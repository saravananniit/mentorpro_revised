import React, { useState } from 'react';

interface ApiKeyFormProps {
  onApiKeySubmit: (apiKey: string) => void;
  isLoading?: boolean;
}

export const ApiKeyForm: React.FC<ApiKeyFormProps> = ({ onApiKeySubmit, isLoading = false }) => {
  const [apiKey, setApiKey] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!apiKey.trim()) {
      setError('Please enter your Gemini API key');
      return;
    }

    if (!apiKey.startsWith('AIza')) {
      setError('Invalid API key format. Gemini API keys start with "AIza"');
      return;
    }

    setError('');
    onApiKeySubmit(apiKey.trim());
  };

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold mb-4">
          🔐 Secure Setup
        </span>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Configure Your API Key
        </h2>
        <p className="text-slate-600 text-lg mb-8">
          Enter your Gemini API key to start evaluating mentor sessions. Your key is only used during this session and is never stored.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg shadow-indigo-200/50 border border-slate-200 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 lg:p-10">
          <div className="space-y-6">
            {/* API Key Input */}
            <div>
              <label htmlFor="apiKey" className="block text-sm font-semibold text-slate-700 mb-3">
                Gemini API Key
              </label>
              <div className="relative">
                <input
                  id="apiKey"
                  type={showPassword ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value);
                    setError('');
                  }}
                  placeholder="AIza..."
                  disabled={isLoading}
                  className="w-full px-4 py-3 pl-4 pr-12 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 disabled:text-slate-300 transition-colors"
                  aria-label={showPassword ? 'Hide API key' : 'Show API key'}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM10 4a6 6 0 00-5.85 8.34l.896-1.345A4 4 0 0110 6a4 4 0 011.956.446l2.126-2.953A5.973 5.973 0 0010 4z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M10 3c-4.827 0-9 2.418-9 5.4 0 2.98 4.173 5.4 9 5.4s9-2.42 9-5.4c0-2.982-4.173-5.4-9-5.4zm0 2a3.4 3.4 0 110 6.8 3.4 3.4 0 010-6.8z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Get your free API key from{' '}
                <a
                  href="https://ai.google.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  ai.google.dev
                </a>
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg items-start">
                <svg
                  className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !apiKey.trim()}
              className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-indigo-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying API Key...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Continue to Analysis
                </>
              )}
            </button>

            {/* Information Box */}
            <div className="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="text-sm font-semibold text-indigo-900 mb-2">🔒 Your Privacy Matters</h3>
              <ul className="text-sm text-indigo-800 space-y-1">
                <li>✓ Your API key is never stored or saved</li>
                <li>✓ It's only used for this session</li>
                <li>✓ All processing happens in your browser</li>
                <li>✓ No data is collected or logged</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

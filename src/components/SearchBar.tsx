import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query) return;

    // Determine search type based on input format
    if (/^\d+$/.test(query)) {
      navigate(`/blocks/${query}`);
    } else if (query.startsWith('0x') && query.length === 66) {
      navigate(`/tx/${query}`);
    } else if (query.startsWith('0x') && query.length === 42) {
      navigate(`/address/${query}`);
    }

    setQuery('');
  };

  return (
    <form onSubmit={handleSearch} className="w-96">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by Address / Txn Hash / Block"
          className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </form>
  );
}
import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = ({searchQuery, setSearchQuery}) => {
    return (
             <div className="mb-6">
          <div className="relative max-w-4xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or student ID..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors focus:outline-none"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
    );
};

export default SearchBar;
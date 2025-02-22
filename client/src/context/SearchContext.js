import React, { createContext, useState, useContext } from 'react';

// Create the SearchContext
const SearchContext = createContext();

// Custom hook to use the SearchContext
export const useSearch = () => useContext(SearchContext);

// Context Provider
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

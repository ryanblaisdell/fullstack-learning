import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { search, transformSearchData  } from '../services';
import { SearchResult } from '../interfaces'

interface MainSearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<SearchResult>>;
}

const MainSearchBar: React.FC<MainSearchBarProps> = ({ setResults }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data: SearchResult = await search(searchText);
      const transformedData = transformSearchData(data);
      setResults(transformedData);
      console.log(data); // REMOVE: For debugging purposes
    } catch (error) {
      console.error('Error fetching data:', error);
    }    
    console.log('Search text:', searchText);
  };

  return (
    <div className="d-flex justify-content-center mt-3 mb-3">
      <form className="d-flex w-50" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
          style={{ 
            borderRadius: '25px 0 0 25px',
            outline: 'none',
            boxShadow: 'none'
           }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ borderRadius: '0 25px 25px 0' }}
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default MainSearchBar;
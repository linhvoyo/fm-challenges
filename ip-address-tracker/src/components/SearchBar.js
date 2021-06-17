import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [textInput, setInput] = useState('');

  const inputHandler = (e) => { setInput(e.target.value); };

  const placeholder = 'Search for any IP address or domain';

  return (
    <form className="SearchBar flex-by-row" onSubmit={(e) => onSearch(e, textInput)}>
      <input
        onChange={inputHandler}
        placeholder={placeholder}
        required
        type="text"
        value={textInput}
      />
      <button aria-label="submit" type="submit" />
    </form>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

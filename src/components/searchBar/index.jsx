import React from 'react';
import PropTypes from 'prop-types';

SearchBar.propTypes = {

};

function SearchBar(props) {
  return (
    <>
      <div className="col-auto">
        <label className="sr-only" htmlFor="inlineFormInput">Искать show</label>
        <input id="searchText" type="text" className="form-control mb-2" id="inlineFormInput"
               placeholder="Название выпуска" />
      </div>
      <div className="col-auto">
        <button id="searchButton" type="button" className="btn btn-primary mb-2">Search</button>
      </div>
    </>
  );
}

export default SearchBar;

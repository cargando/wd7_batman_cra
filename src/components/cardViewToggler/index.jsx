import React from 'react';
import PropTypes from 'prop-types';

CardViewToggler.propTypes = {

};

function CardViewToggler(props) {
  return (
    <div className="col-md-7">
      <div style={ {display: 'flex', justifyContent: 'flex-end'} }>
        <i className="fas fa-th-list text-muted" style={ {fontSize: "140%", marginRight: "10px" } } />

        <label className="form-switch">
          <input id="viewType" type="checkbox" />
          <i />
        </label>
        <i className="fas fa-address-card text-muted" style={ {fontSize: "140%", marginLeft: "10px"} } />
      </div>
    </div>
  );
}

export default CardViewToggler;

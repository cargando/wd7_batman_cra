import React from 'react';
import { connect } from 'react-redux';
import Switch from 'react-ios-switch';
import PropTypes from 'prop-types';
import {updateViewToggle} from '../../store/action_creatores';

CardViewToggler.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleToggleChange: PropTypes.func.isRequired,
};

function CardViewToggler({checked, handleToggleChange}) {
  return (
    <>
    <i className="fas fa-th-list text-muted" style={ {fontSize: "140%", marginRight: "10px" } } />
    <Switch
      checked={checked}
      onChange={handleToggleChange}
    />
    <i className="fas fa-address-card text-muted" style={ {fontSize: "140%", marginLeft: "10px"} } />
    </>
  );
}

export default connect(store => ({
  checked: store.app.toggleStatus,
}),
  dispatch => ({
    handleToggleChange: (val) => dispatch(updateViewToggle(val))
  }))(CardViewToggler);

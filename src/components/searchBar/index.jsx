import React from 'react';
import { connect } from 'react-redux';
import {Button, Form, Col, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {updateSearchText} from '../../store/action_creatores';

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
};

function SearchBar({searchText, handleTextChange, children}) {

  return (
    <Form>
      <Row>
        <Col>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Искать show</Form.Label>
          <Form.Control
            value={searchText}
            type="text"
            placeholder="Название show"
            onChange={handleTextChange}
          />
        </Form.Group>
        </Col>
        <Col>
          <Button size="small" variant="primary">Search</Button>
        </Col>
        <Col>
          {
            children
          }
        </Col>
      </Row>
    </Form>
  );
}

export default connect(store => ({
    searchText: store.app.searchText,
  }),
  dispatch => ({
    handleTextChange: (e) => dispatch(updateSearchText(e.target.value)),
  }))(SearchBar);

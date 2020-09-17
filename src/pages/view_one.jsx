import React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col } from 'react-bootstrap';

function ViewOneMoviePage(props) {

  const { code } = props.match.params;

  function searchActiveMovie() {
    const { movieList = [] } = props;

    let res = {};

    if (movieList.length) {
      movieList.forEach(item => {
        if(item.show.id == code) {
          res = item.show;
        }
      });
    }

    return res;
  }

  const data = searchActiveMovie();
  console.log("Data = ", data)

  return (
    <Container>
      <Row>
        <Col>
            <h1>Описание шоу: </h1>
          <h4 id="headerShowText">Идентификатор фильма: { props.match.params.code || '' }</h4>
          <hr />
          <h4> {data.name }</h4>
          <img src={ data.image && data.image.medium } />
          <div dangerouslySetInnerHTML={ {__html: data.summary} } />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (store) => ({
  movieList: store.app.movieList,

});

export default connect(mapStateToProps)(ViewOneMoviePage);

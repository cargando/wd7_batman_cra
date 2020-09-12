import React from 'react';
import Movies from '../components/movies';

function MovieListPage(props) {
  return (<Movies { ...props } />);
}

export default MovieListPage;

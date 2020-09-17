import React from 'react';
import Movies from '../components/movies';

function MovieListPage(props) {
  console.log("MovieListPage props: ", props)
  return (<Movies { ...props } />);
}

export default MovieListPage;

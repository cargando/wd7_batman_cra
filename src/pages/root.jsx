import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../router/url';


function RootPage(props) {
  return (
    <div>
      <h1>This is Root Page</h1>
      <h5>Select url</h5>

      <Link to={URL.MOVIES}>страница со списком фильмов</Link>
      <br />
      <br />
      <a href="http://mail.ru">перейти на www.mail.ru</a>
    </div>
  );
}

export default RootPage;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import * as URL from './url';

// импортируем страницы - это просто ваши компоненты, которые должны быть отрисованы для какого-то урла
import RootPage from "../pages/root";
import MovieListPage from "../pages/movies";
import ViewOneMoviePage from '../pages/view_one';

export default (
  <Router> { /* это Компонент-матрешка, он просто должен обернуть все то, что касается маршрутизации, и далее собственно этот компонент и занимается маршрутизацией */ }
    <Switch> { /* Компонент-матрешка, работает аналогично switch-case в JavaScript, только в качестве значения для сравнения использует URL из браузера  */ }
      <Route exact path={ URL.ROOT } component={ RootPage } /> {/* Маршруты - конкретные URL для которых отображаются конкретные компоненты */}

      <Route exact path={ URL.MOVIES } component={ MovieListPage } />

      <Route exact path={ URL.VIEW_ONE_MOVIE } component={ ViewOneMoviePage } />

    </Switch>
  </Router>
);

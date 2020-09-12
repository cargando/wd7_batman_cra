import { combineReducers } from "redux";
import * as ACT from './actions';

const initialStore = {
  movieList: [],
  isLoading: false,
  fetchStatus: null,
  searchText: '',
  toggleStatus: false,
};

function rootReducer(store = initialStore, action) {

  switch (action.type) {

    case ACT.UPDATE_LIST: // случилось событие - обновить список фильмов
      return {
        ...store,
        movieList: action.payload,
      }

    case ACT.UPDATE_LOADING: // случилось событие - обновить индикатор загрузки данных с сервера
      return {
        ...store,
        isLoading: action.payload,
      }

    case ACT.UPDATE_SEARCH_TEXT: // случилось событие - обновить текст в поисковой строке
      return {
        ...store,
        searchText: action.payload,
      }

    case ACT.UPDATE_VIEW_TOGGLE: // случилось событие - обновить состояние тоглера (переключатель режим вида карточки-таблица)
      return {
        ...store,
        toggleStatus: action.payload,
      }

    case ACT.FETCH_SUCCESS: // случилось событие - обновить статус загрузки - УСПЕХ
    case ACT.FETCH_FAILED: // случилось событие - обновить статус загрузки - ПРОВАЛ
      return {
        ...store,
        fetchStatus: action.payload,
      }

  }

  return store;
}

export default () => combineReducers({
  app: rootReducer,
})

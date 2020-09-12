// тут записываем так называемые экшн криэйторы - т.е. JS функции, которые должны сгенерировать
// и вернуть JS объект, который в свою очередь будет описывать ACTION - событие в экосистеме Redux
import * as ACT from './actions';

export function updateMoovieList(payload) {
  return { // это JS объект - и есть тот самый реальный Redux action
    type: ACT.UPDATE_LIST,
    payload,
  };
}

export function updateViewToggle(payload) {
  return { // это JS объект - и есть тот самый реальный Redux action
    type: ACT.UPDATE_VIEW_TOGGLE,
    payload,
  };
}

export function fetchFailed() {
  return {
    type: ACT.FETCH_FAILED,
  }
}

export function fetchSuccess() {
  return {
    type: ACT.FETCH_SUCCESS,
  }
}

export function updateLoading(payload) {
  return {
    type: ACT.UPDATE_LOADING,
    payload,
  }
}

export function updateSearchText(payload) {
  // return {
  //   type: ACT.UPDATE_SEARCH_TEXT,
  //   payload,
  // }

  return (dispatch) => {

    dispatch({
        type: ACT.UPDATE_SEARCH_TEXT,
        payload,
      });
    dispatch(fetchData(payload));
  }
}

export function clearSearchText(payload) {
  return {
    type: ACT.CLEAR_SEARCH_TEXT,
    payload,
  }
}

export function fetchData(searchText) {

  return (dispatcher) => {

    dispatcher(updateLoading(true)); // установить индикатор загрузки данных в ТРУ - включить спинер
    const data = fetch(`https://api.tvmaze.com/search/shows?q=${ searchText }`);

    data.then(response => {
      return response.json();
    }).then(localData => {
      // this.setState({movieList: data}); - остатки от вызова в классе (когда фетчинг данных из класса)
      dispatcher(updateMoovieList(localData)); // записать в ридакс стор список фильмов

      dispatcher(fetchSuccess()); // установить статус состояния загрузки - УСПЕШНО загружены данные
    }).catch((e) => {

      dispatcher(fetchFailed()); // установить статус состояния загрузки - ПРОВАЛ данные НЕ удалось загрузить

      console.log('Sabotage: data fetch ERROR.', e);
    }).finally(() => {

      dispatcher(updateLoading(false)); // установить индикатор загрузки данных в FALSE (выключить спинер)

    });

  }
}

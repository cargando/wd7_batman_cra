// тут записываем так называемые экшн криэйторы - т.е. JS функции, которые должны сгенерировать
// и вернуть JS объект, который в свою очередь будет описывать ACTION - событие в экосистеме Redux
import * as ACT from './actions';

export function updateMoovieList(payload) {
  return { // это JS объект - и есть тот самый реальный Redux action
    type: ACT.UPDATE_LIST,
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
  return {
    type: ACT.UPDATE_SEARCH_TEXT,
    payload,
  }
}

export function clearSearchText(payload) {
  return {
    type: ACT.CLEAR_SEARCH_TEXT,
    payload,
  }
}

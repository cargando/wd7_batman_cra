import React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col } from 'react-bootstrap';

import SearchBar from './components/searchBar';
import CardViewToggler from './components/cardViewToggler';
import Table from './components/tableView';
import { fetchData } from './store/action_creatores';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>TV Maze Shows</h1>
            <h4 id="headerShowText"></h4>
          </Col>
        </Row>
        <Row>
          <Col>
              <SearchBar>
                <CardViewToggler />
              </SearchBar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table list={ this.props.movieList } />

            <div id="cardsList" style={{display: "none"}}>


            </div>

          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

/*

const mapStateToProps = (store) => { // какие свойства из ридкс стораджа мы должны подключить к нашему компоненту в виде пропсов
  // эта функция на вход от ридакса получает глобал стор, далее вы из этого глобал стора выбираете нужные вам поля и возвращаете их в виде объекта


  console.log('STORE', store)

  // эта функция должна на выход вернуть объект
  return { // возвращаем объект, названия полей этого объекта вы определяете самостоятельно
    // поля этого объекта будут как бы скопированы (property injection) в ваш компонент в виде одноименных пропсов.
    movieList: store.app.movieList,
    isLoading: store.app.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => { // какие экшн креаторы мы хотим подключить к нашему компоненту в виде пропсов
  // которые потом можно будет дернуть и обновить данные в ридакс сторадже или сделать фетч данных
  // эта функция на вход от ридакса получает метод диспетчер (dispatch), который умеет создавать (инициировать) события в экосистеме Ридакса

  // эта функция должна на выход вернуть объект
  return {// возвращаем объект, названия полей этого объекта вы определяете самостоятельно
    // поля этого объекта будут как бы скопированы (property injection) в ваш компонент в виде одноименных пропсов.
    getData: (searchText) => dispatch(fetchData(searchText)), // ссылка на безымянную функцию, которая через механизм "замыкания" имеет доступ к диспетчеру
    // который прилетел на вход в функцию mapDispatchToProps
    // и потом с помощью диспетчера может инициировать события Ридакса (через вызов экшн креаторов, которые в свою очередь возвращают экшн)
  }
}

// предназначение функции connect в том, чтобы
// 1) выбрать нужные данные из ридакс сторадж - колбэк mapStateToProps
// 2) выбрать нужные экшн-креаторы - колбэк mapDispatchToProps
// 3) внедрить их в ваш компонент в виде пропсов
// работа функции connect() выполняется в 2 этапа - на первом этапе вы ей передаете то, что указно выше в комменте под пунктами 1 и 2
// далее функция возвращает указать на новую функцию, которую нужно исполнить на втором этапе
// соответственно на втором этапе мы исполняем возвращенную функцию и передаем ей на вход в качестве параметра
// компоент реакта (любой) в который и будут внедрены пропсы из пунктов 1 и 2

const connected = connect(mapStateToProps, mapDispatchToProps) // коннект на вход принимает 2 колбэка


export default connected(App); // исполяем функцию, которую вернула connect() и передаем ей на вход наш компонент

// */
////////////////////////////
// альтернативная форма записи connect - более короткая

export default connect(store => ({
  movieList: store.app.movieList,
  isLoading: store.app.isLoading,
}),
  dispatch => ({
    getData: (searchText) => dispatch(fetchData(searchText)),
  }))(App);

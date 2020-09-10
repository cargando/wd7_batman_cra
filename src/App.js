import React from 'react';
import { connect } from 'react-redux';
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
      <div id="pageContainer" className="container">
        <div className="row">
          <div className="col-md">
            <h1>TV Maze Shows</h1>
            <h4 id="headerShowText"></h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <form>
              <div className="form-row align-items-center">
                <SearchBar />
                <CardViewToggler />
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <Table list={ this.props.movieList } />

            <div id="cardsList" style={{display: "none"}}>


            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-md">
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (store) => { // какие свойства из ридкс стораджа мы должны подключить к нашему компоненту в виде пропсов
  // эта функция на вход от ридакса получает глобал стор, далее вы из этого глобал стора выбираете нужные вам поля и возвращаете их в виде объекта

  // эта функция должна на выход вернуть объект
  console.log('STORE', store)

  return { // возвращаем объект, названия полей этого объекты вы определяете самостоятельно
    // поля этого объекты будут как бы скопированы (property injection) в ваш компонент в виде одноименных пропсов.
    movieList: store.app.movieList,
    isLoading: store.app.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => { // какие экшн креаторы мы хотим подключить к нашему компоненту в виде пропсов
  // которые потом можно будет дернуть и обновить данные в ридакс торадже или сделать фетч данных
  // эта функция на вход от ридакса получает метод диспетчер (dispatch), который умеет создавать (инициировать) события в экосистеме Ридакса

  // эта функция должна на выход вернуть объект
  return {// возвращаем объект, названия полей этого объекты вы определяете самостоятельно
    // поля этого объекты будут как бы скопированы (property injection) в ваш компонент в виде одноименных пропсов.
    getData: (searchText) => dispatch(fetchData(searchText)),
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

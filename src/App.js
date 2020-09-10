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

  // эта функция должна на выход вернуть объект
  console.log('STORE', store)
  return {
    movieList: store.app.movieList,
    isLoading: store.app.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {

  // эта функция должна на выход вернуть объект
  return {
    getData: (searchText) => dispatch(fetchData(searchText)),
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps) // коннект на вход принимает 2 колбэка

export default connected(App);

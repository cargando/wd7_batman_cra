import React from 'react';
import SearchBar from './components/searchBar';
import CardViewToggler from './components/cardViewToggler';
import Table from './components/tableView'
import './App.css';

class App extends React.Component {

  state = {
    movieList: [],
  }

  componentDidMount() {

    const data = fetch(`https://api.tvmaze.com/search/shows?q=batman`);

    data.then(response => {
      return response.json();
    }).then(data => {
      this.setState({movieList: data});
    });

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
            <Table list={ this.state.movieList } />

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

export default App;

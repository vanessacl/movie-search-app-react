import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './components/searchMovies';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search (React)</h1>
        <SearchMovies />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
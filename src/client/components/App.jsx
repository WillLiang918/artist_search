import React from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';

import '../../stylesheets/app.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <SearchBar search={this.props.search}/>
        <SearchResults artists={this.props.artists}/>
      </div>
    );
  }
}

export default App;

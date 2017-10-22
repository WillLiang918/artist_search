import React from 'react';
import ArtistList from './ArtistList.jsx';

import '../../stylesheets/search-results.scss';

class SearchResults extends React.Component {
  renderNoResults() {
    return (
      <div>
        No Results found
      </div>
    );
  }

  render() {
    const artistsFound = this.props.artists.length > 0;

    return (
      <div className='search-results-container'>
        {
          artistsFound
            ? <ArtistList artists={this.props.artists}/>
            : this.renderNoResults()
        }
      </div>
    );
  }
}

export default SearchResults;

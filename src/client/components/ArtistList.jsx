import React from 'react';
import ArtistListItem from './ArtistListItem.jsx';
import '../../stylesheets/artist-list.scss';

class ArtistList extends React.Component {
  render() {
    return (
      <div className='artist-list-container'>
        {
          this.props.artists.map((artist, index) => (
              <ArtistListItem
                key={index}
                name={artist.name}
                description={artist.description}
                imageUrl={artist.imageUrl}
              />
            ))
        }
      </div>
    );
  }
}

export default ArtistList;

import React from 'react';
import '../../stylesheets/artist-list-item.scss';

class ArtistListItem extends React.Component {
  render() {
    return (
      <div className='artist-list-item-container'>
        <div className='artist-list-item'>
          <img className='artist-image' src={this.props.imageUrl}></img>
          <div className='artist-name'>{this.props.name}</div>
          <div className='artist-description'>{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default ArtistListItem;

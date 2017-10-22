import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import {
  FormControl,
  FormGroup,
  InputGroup,
} from 'react-bootstrap';

import '../../stylesheets/search-bar.scss';

const SEARCH_PLACEHOLDER = 'Search for your favorite artists';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: '',
    };
  }

  updateKeywords = (e) => {
    this.setState({
      keywords: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();

    if (this.state.keywords) {
      this.props.search(this.state.keywords);
    }
  };

  render() {
    return (
      <div className='search-bar-container'>
        <form className='search-bar-form' onSubmit={this.handleSearch}>
          <FormGroup>
            <InputGroup>
              <FormControl
                 type="text"
                 className='search-input'
                 value={this.state.keywords}
                 onChange={this.updateKeywords}
                 placeholder={SEARCH_PLACEHOLDER}/>
               <InputGroup.Addon
                 className='search-icon'
                 onClick={this.handleSearch}>
                 <FaSearch /></InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './Search.css';
import SearchResult from '../SearchResult';

@withStyles(styles)
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this)
  }
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  handleChange(event) {
    this.setState({value : event.target.value});
  };

  render() {
    const title = 'Search';
    this.context.onSetTitle(title);
    var value = this.state.value;
    return (

      <div className="Search">
        <div className="Search-container">
          <h1>{title}</h1>
          <div class="form-wrapper"> 

            <input onChange={this.handleChange} placeholder="Search a product" value={value}/>
          </div>
        </div>
         <SearchResult result={value} key={value}/>
      </div>

    );
  }

}

export default Search;

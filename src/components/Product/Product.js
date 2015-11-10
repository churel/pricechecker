/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SearchResult.css';
import $ from 'jquery'

@withStyles(styles)
class Product extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      product: props.product,
    };
  }
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  
  render() {
    const title = 'Result';
    this.context.onSetTitle(title);
    var value = this.state.value;
    return (
        <div 
    );
  }

}

export default Product;

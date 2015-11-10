/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SearchResult.css';

import bootstraptable from './react-bootstrap-table-all.min.css';
import $ from 'jquery';
import {BootstrapTable} from 'react-bootstrap';
import {TableHeaderColumn} from 'react-bootstrap-table';

@withStyles(styles)
@withStyles(bootstraptable)
class SearchResult extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      result: props.result,
      api_key : '_apikey=ac49bb84e4214374a67f1d5bc430a1f0fe7ee7cafc96924ec60dc35c2f70ac538e5aa53206915d5330f20942c01b4146e5bd7c4721e770aebed550222bf7170ae4060fa824421eacb304add8e759ca17&',
      user : '_user=ac49bb84-e421-4374-a67f-1d5bc430a1f0&',
      gpu : [],
      results : [],
    };
  }
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentDidMount() {
     var shoptoiturl =  'http%3A%2F%2Fwww.shoptoit.ca%2Fsearch%3Fsearch-term%3Dcore%20i5%2B6600k&';
     var that = this;

     var gpu = []
     // Get i5-6600k
     //shoptoit
     console.log('https://api.import.io/store/data/ba6e7d50-06dc-45eb-b3ee-1ddcd29cc20a/_query?input/webpage/url=' + shoptoiturl + this.state.user + this.state.api_key);
     $.get('https://api.import.io/store/data/ba6e7d50-06dc-45eb-b3ee-1ddcd29cc20a/_query?input/webpage/url=' + shoptoiturl + this.state.user + this.state.api_key, function(result) {
         console.log(result);
        result.results.forEach(function(product) {
         console.log(product); 
          if(product.titre.indexOf('6600K') != -1) {
            product.prix =  Number.parseInt( product.prix, 10);
            gpu.push(product)
          }
        });
        that.setState({results : result.results});
        that.setState({gpu : gpu});

     });
     //Shopbot
     var url =  'http%3A%2F%2Fwww.shopbot.ca%2Fm%2F%3Fm%3Di5%2B6600k&';
  
     $.get('https://api.import.io/store/data/2cbb7b50-fbae-4921-a78d-547c4ab9e621/_query?input/webpage/url=' + url + this.state.user + this.state.api_key, function(result) {
     
        result.results.forEach(function(product) {
         
          if(product.titre.indexOf('6600K') != -1) {
        //    gpu.push(product)
          }
        });
        that.setState({results : result.results});
        that.setState({gpu : gpu});

     });
  }

  formatCell(cell, row) {
    return '<a href="' + cell +'">shoptoit</a>';
  }
  render() {
    const title = 'Result';
    var ReactBsTable  = require('react-bootstrap-table');
    var BootstrapTable = ReactBsTable.BootstrapTable;
    var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
    var props = {};
    props.options = {sortOrder: 'asc', sortName:'prix'}
    this.context.onSetTitle(title);
    
    return (

      <div className="SearchResult">
        <div className="SearchResult-container">
          <h2>GPU</h2>
          <div className="result-wrapper"> 
          <BootstrapTable data={this.state.gpu} {...props} >
            <TableHeaderColumn dataField="titre" dataSort={true}>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="prix" dataAlign="center" dataSort={true} >Product Price</TableHeaderColumn>
            <TableHeaderColumn dataField="lien" isKey={true} dataAlign="center" dataFormat={this.formatCell} >Product Link</TableHeaderColumn>
          </BootstrapTable>
          </div>
        </div>
      </div>
    );
  }

}

export default SearchResult;

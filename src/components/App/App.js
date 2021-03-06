/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import bootstrap from '../../public/bootstrap/css/bootstrap.min.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Footer from '../Footer';
import Search from '../Search';
import SearchResult from '../SearchResult';

@withContext
@withStyles(bootstrap)
@withStyles(styles)


class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    return !this.props.error ? (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;

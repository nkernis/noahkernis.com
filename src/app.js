import React from 'react';
import PropTypes from 'prop-types';

import AppRoutes from './routes.js'
import NavBar from './navbar.js'

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <NavBar />
        <AppRoutes />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;

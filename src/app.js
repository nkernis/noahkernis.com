import React from 'react';
import AppRoutes from './routes.js'
import NavBar from './components/navbar.js'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <AppRoutes />
      </React.Fragment>
    );
  }
}

export default App;

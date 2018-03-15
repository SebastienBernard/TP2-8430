// App.js

import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default App;
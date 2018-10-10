import React, { Component } from 'react';

import './App.css';

import Header from './Header.js';
import Home from './home/Home.js';
import Property from './property/Property.js';
import Footer from './Footer.js';
import Error from './error/error.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <div className="App">

        <BrowserRouter>
          <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/property" component={Property} />
            <Route component={Error} />
          </Switch>
          </div>
        </BrowserRouter>
        <Footer />

      </div>
    )
  }
}





export default App;
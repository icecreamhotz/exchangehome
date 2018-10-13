import React, { Component } from 'react';

import './App.css';

import Header from './Header.js';
import Home from './home/Home.js';
import Search from './search/Search.js';
import Property from './property/Property.js';
import Article from './articles/Article.js';
import Contact from './contact/Contact.js';
import Footer from './Footer.js';
import Error from './error/error.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class App extends Component {
  render() {
    const Content = withRouter(props =>
       (props.location.pathname === "/article" || props.location.pathname === '/contact') ? 
       <div class="pt-50">
        <Search />
       </div> : ''
    );
    return (

      <div className="App">

        <BrowserRouter>
          <div>
          <Header />
          <Content />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/property" component={Property} />
            <Route path="/article" component={Article} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <Footer />
          </div>
        </BrowserRouter>

      </div>
    )
  }
}





export default App;

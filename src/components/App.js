import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import ArticleSelection from './ArticleSelection.js';
import StepContainer from './StepContainer.js';
import HelpContainer from './HelpContainer.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <ArticleSelection />
        <StepContainer />
        <HelpContainer />
        <Footer />
      </div>
    )
  }
}





export default App;

import React , { Component } from 'react';
import Content from './Content.js';
import ArticleSelection from './ArticleSelection.js';
import StepContainer from './StepContainer.js';
import HelpContainer from './HelpContainer.js';


class Home extends React.Component {
    render() {
        return(
            <div>
            <Content />
            <ArticleSelection />
            <StepContainer />
            <HelpContainer />
            </div>
        )
    }
}



export default Home
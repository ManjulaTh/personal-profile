import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'

import HomeContainer from './container/Home/Home'
import AboutContainer from './container/About/About'
import PortfolioContainer from './container/Portfolio/Portfolio'
import Navbar from './components/Navbar/Navbar'

import './App.css';

class App extends Component {
  state = {
    links: [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
      { name: 'Portfolio', url: '/portfolio' }
    ],

    portfolioLinks: [
      { name: 'java', url: "https://github.com/cooksystemsinc/java-xml-file-transfer-assessment-ManjulaTh.git" },
      { name: 'javaScript', url: "https://github.com/cooksystemsinc/js-assessment-quizler-ManjulaTh.git" },
      { name: 'spring', url: "https://github.com/cooksystemsinc/spring-controllers-and-services-ManjulaTh.git" },
      { name: 'react', url: "https://github.com/cooksystemsinc/spring-controllers-and-services-ManjulaTh.git" },
    ]

  }

  render() {
    return (
      <Fragment>
        <Navbar links={this.state.links} />

        <Switch>
          {/* <Route
            path='/Portfolio'
            render={() => <PortfolioContainer props={this.state.portfolioLinks} />}
          /> */}
          <Route path='/Portfolio' component={PortfolioContainer} />
          <Route path='/about' component={AboutContainer} />
          <Route path='/' component={HomeContainer} />
        </Switch>

      </Fragment>
    )
  }
}

export default App;
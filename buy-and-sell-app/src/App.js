import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import AdsContainer from './components/AdsContainer'
import AdDetailsContainer from './components/AdDetailsContainer'
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Route path="/" exact component={Welcome} />
          <Route path="/ads" exact component={AdsContainer} />
          <Route path="/ads/:id" component={AdDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;

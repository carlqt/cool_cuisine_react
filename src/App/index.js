import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Root from './Root';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="routerContainer">
          <Route exact path="/" component={Root} />
          <Switch>
            <Route exact path="/menu" component={Menu} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;



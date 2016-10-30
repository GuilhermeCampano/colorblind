import styles from './index.scss';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Home, About } from './pages/pages.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
    )
  }
}

render(<App/>, document.querySelector("#app"));

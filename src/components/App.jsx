import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/styles.css';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TabWindow from './components/TabWindow';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TabWindow} />
      </Switch>
    </Router>
  );
}

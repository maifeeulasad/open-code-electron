import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CodeEditor from './components/CodeEditor';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={CodeEditor} />
      </Switch>
    </Router>
  );
}

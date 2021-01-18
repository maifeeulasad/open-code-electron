import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CodeEditorTem from './components/CodeEditor';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={CodeEditorTem} />
      </Switch>
    </Router>
  );
}

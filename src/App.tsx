import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CodeEditorTem from './components/CodeEditor';
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

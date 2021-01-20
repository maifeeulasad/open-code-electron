import Editor, { loader } from '@monaco-editor/react';
import React from 'react';

const path = require('path');
const fs = require('fs');

function uriFromPath(_path) {
  let pathName = path.resolve(_path).replace(/\\/g, '/');

  if (pathName.length > 0 && pathName.charAt(0) !== '/') {
    pathName = `/${pathName}`;
  }
  return encodeURI(`file://${pathName}`);
}

loader.config({
  urls: {
    monacoLoader: uriFromPath(
      path.join(__dirname, '../node_modules/monaco-editor/min/vs/loader.js')
    ),
    monacoBase: uriFromPath(
      path.join(__dirname, '../node_modules/monaco-editor/min/vs')
    ),
  },
});

class CodeEditor extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    content: '',
  };

  // eslint-disable-next-line react/sort-comp
  readFile = () => {
    fs.readFile(
      // eslint-disable-next-line react/prop-types,react/destructuring-assignment
      `${this.props.directory}/${this.props.file}`,
      'UTF-8',
      (err, res) => {
        this.setState({ content: res });
      }
    );
  };

  componentDidMount() {
    this.readFile();
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Editor
        height={window.innerHeight * 0.9}
        width={window.innerWidth * 0.95}
        language="javascript"
        theme="dark"
        // eslint-disable-next-line react/destructuring-assignment
        value={this.state.content}
      />
    );
  }
}

export default CodeEditor;

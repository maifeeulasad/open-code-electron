import Editor, { loader } from '@monaco-editor/react';
import React, { useRef, useState } from 'react';

const path = require('path');

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

export default function CodeEditor() {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const valueGetter = useRef(null);

  function handleEditorDidMount(_valueGetter) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Editor
      height={window.innerHeight * 0.9}
      width={window.innerWidth * 0.95}
      language="javascript"
      theme="dark"
      value="// write your code here"
      editorDidMount={handleEditorDidMount}
    />
  );
}

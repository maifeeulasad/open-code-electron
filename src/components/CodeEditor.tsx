import React from 'react';
import Editor from '@monaco-editor/react';

// eslint-disable-next-line react/prefer-stateless-function
class CodeEditor extends React.Component<any, any> {
  // eslint-disable-next-line react/require-render-return
  render() {
    return <Editor />;
  }
}

export default CodeEditor;

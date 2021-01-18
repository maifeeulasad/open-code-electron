import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import CodeEditor from './CodeEditor';
// import { IpcRenderer } from 'electron';
const { ipcRenderer } = window.require('electron');
// const { ipcRenderer } = window.require('electron');

// eslint-disable-next-line react/prefer-stateless-function
class TabWindow extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    filenames: ['a', 'bb', 'ccc'],
  };

  renderTabs = () => {
    // eslint-disable-next-line react/destructuring-assignment
    return this.state.filenames.map((file) => {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <Tab key={file} eventKey={file} title={file}>
          <CodeEditor />
        </Tab>
      );
    });
  };

  openFileD = () => {
    // eslint-disable-next-line promise/catch-or-return
    ipcRenderer
      .showOpenDialog(ipcRenderer.getCurrentWindow(), {
        properties: ['openFile'],
      })
      // eslint-disable-next-line promise/always-return
      .then((files) => {
        console.log(files);
      });
  };

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <Button onClick={this.openFileD} />
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          {this.renderTabs()}
        </Tabs>
      </div>
    );
  }
}

export default TabWindow;

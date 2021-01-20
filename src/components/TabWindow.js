import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { ipcRenderer } from 'electron';
import CodeEditor from './CodeEditor';

// eslint-disable-next-line react/prefer-stateless-function
class TabWindow extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    filenames: ['a', 'bb', 'ccc'],
  };

  constructor(props) {
    super(props);
    ipcRenderer.on('file-res', (res) => {
      console.log(res);
    });
  }

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

  openFile = () => {
    console.log('test');
    ipcRenderer.send('file-command', 'open');
  };

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <Button onClick={this.openFile} />
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          {this.renderTabs()}
        </Tabs>
      </div>
    );
  }
}

export default TabWindow;

import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { ipcRenderer } from 'electron';
import CodeEditor from './CodeEditor';

const fs = require('fs');

// eslint-disable-next-line react/prefer-stateless-function
class TabWindow extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    filenames: [],
    fileDirectory: '',
  };

  constructor(props) {
    super(props);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    ipcRenderer.on('file-res', (e, args) => {
      this.setState({
        fileDirectory: args.files[0],
      });
      fs.readdirSync(args.files[0]).forEach((file) => {
        this.setState({
          filenames: [...that.state.filenames, file],
        });
      });
    });
  }

  renderTabs = () => {
    // eslint-disable-next-line react/destructuring-assignment
    return this.state.filenames.map((file) => {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <Tab key={file} eventKey={file} title={file}>
          {/* eslint-disable-next-line react/destructuring-assignment */}
          <CodeEditor directory={this.state.fileDirectory} file={file} />
        </Tab>
      );
    });
  };

  openFile = () => {
    ipcRenderer.send('file-command', 'open');
  };

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <Button onClick={this.openFile}>Open Folder</Button>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          {this.renderTabs()}
        </Tabs>
      </div>
    );
  }
}

export default TabWindow;

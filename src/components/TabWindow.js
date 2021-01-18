import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import CodeEditor from './CodeEditor';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          {this.renderTabs()}
        </Tabs>
      </div>
    );
  }
}

export default TabWindow;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '# Welcome to the markdown editor!'
    }
  }

  // User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
  onChange = (event) => {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Editor onChange={this.onChange} markdownText={this.state.text}/>
        <Preview text={this.state.text}/>
      </div>
    );
  }
}

export default App;

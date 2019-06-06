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

  onChange = (event) => {
    console.log('t')
    console.log(event.target.value);
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Editor onChange={this.onChange} markdownText={this.state.text}/>
        <Preview/>
      </div>
    );
  }
}

export default App;

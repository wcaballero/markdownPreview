import React, { Component } from 'react';
import marked from 'marked';

console.log(marked("__markdwon__"));

export default class App extends Component {
  // can run methods but not vanilla js

  constructor(props) {
    super(props);

    // init state to manage data flow
    this.state = {
      markdown: ''
    };
  }
  render() {
    return (
      <div className="App container">
        <div className="row">
          <textarea
            type="text"
            className="col-xs-6"
            value= {this.state.markdown}
            onChange = {(event) => {this.setState({markdown: event.target.value});}}
          />
          <div className="col-xs-6">{this.state.markdown}</div>
        </div>
      </div>

    );
  }

}

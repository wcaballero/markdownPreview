import React, { Component } from 'react';
import marked from 'marked';
import {gfmInitText} from './gfmInitText';

// setting up markdown to work with github flavor markdown
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});


export default class App extends Component {
  // can run methods but not vanilla js

  constructor(props) {
    super(props);

    // init state to manage data flow
    this.state = {
      markdown: gfmInitText
    };
  }

  render() {

    return (
      <div className="App container">
        <div className="row">
          <textarea
            type="text"
            className="col-xs-12 col-lg-6"
            value= {this.state.markdown}
            onChange = {(event) => {this.setState({markdown: event.target.value});}}
          />
          <div className="col-xs-12 col-lg-offset-1 col-lg-5"
            dangerouslySetInnerHTML= {{__html: marked(this.state.markdown)}} />
        </div>
      </div>

    );
  }

}

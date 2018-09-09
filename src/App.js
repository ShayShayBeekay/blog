import React, { Component } from 'react';
import './App.css';

import BlogPost from './components/BlogPost';
let indices = require('./resources/post_indices.json')

class App extends Component {
  constructor(){
    super();
    this.state = { index: indices.length-1 };
    this.postHandler = this.postHandler.bind(this);
  }

  postHandler(action){
    let currState = this.state.index
    switch(action){
      case('prev'):
        this.setState({index: currState - 1})
        break;
      case('next'):
        this.setState({index: currState + 1})
        break;
      default:
        return 0;
    }
  }

  render() {
    let postName = indices[this.state.index].fileName;
    let post = require(`./resources/posts/${postName}`)
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">shayshaybeekay.github.io</h1>
        </header>
        <div>
          <BlogPost noOfPosts={indices.length} index={this.state.index} handler={this.postHandler} {...post}/>
        </div>
      </div>
    );
  }
}

export default App;

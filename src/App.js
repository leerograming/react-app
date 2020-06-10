import React, { Component } from 'react';
import './App.css';

import Nav from "./components/Nav.js";
import Content from './components/Contents.js';
import Subject from './components/Subject.js';

class App extends Component{
  
  constructor(props){ // render보다 먼저 실행. 초기화가 필요할 때 선언
    super(props);
    this.state = {
      Subject:{title : "state web", sub:"state world wide web"},
      contents:[{id:1,title:"html",desc:"HTML is HyperText..."},
                {id:2,title:"css",desc:"CSS is Design..."},
                {id:3,title:"js",desc:"JavaScript is for Interactive..."}],
      mode:"read",
      welcome:{title:"welcome", desc:"hello, React!"}
    };
  }
   render(){
     var _title, _desc = null;
     if(this.state.mode === "welcome"){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
     } else if (this.state.mode === "read"){
        _title = this.state.contents[0].title;
        _desc = this.state.contents[0].desc;
     }
     return (
    <div className="App">
      <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}></Subject>
      <Nav data={this.state.contents}></Nav>
      <Content title={_title} desc={_desc}></Content>
    </div>
  );
  }
};

export default App;

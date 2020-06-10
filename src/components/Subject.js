import React, { Component } from 'react';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1 href="./">WEB</h1>
    <h1>{this.props.title}</h1>
        {this.props.sub}
        world wide web!
      </header>
    );
  }
}

  export default Subject; //컴포넌트를 외부에서 사용할 수 있게 한다.
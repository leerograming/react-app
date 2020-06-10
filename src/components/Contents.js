import React, { Component } from 'react';

  class Content extends Component {
    render(){
      return (
       <article>
         <h2>{this.props.title}</h2>
         <h2>{this.props.desc}</h2>
       </article>
      );
    }
  }

  export default Content; //컴포넌트를 외부에서 사용할 수 있게 한다.
import React, { Component } from 'react';

class Nav extends Component{
    render(){
      var data = this.props.data;
      var i = 0;
      var list = [];
      while(i < data.length){
        list.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].desc}</a></li>)
        i= i+1;
      }
      return (
        <nav>
          <ul>
            {list}
          </ul>
        </nav>
      );
    }
  }

  export default Nav; //컴포넌트를 외부에서 사용할 수 있게 한다.
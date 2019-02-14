import React, { Component } from 'react';

class Navegacion1 extends Component{
  render(){
    return(
      <nav className="nav navbar-dark bg-dark">
        <a href="#" className="text-white">{this.props.titulo} </a>
      </nav>
    )
  }
}

export default Navegacion1;

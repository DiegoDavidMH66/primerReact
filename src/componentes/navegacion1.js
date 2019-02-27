import React, { Component } from 'react';
//import PropTypes from  'prop-types';

class Navegacion1 extends Component{
  /*static propTypes ={
    nombre: PropTypes.string,
    edad: PropTypes.number
  };*/
  render(){
    //const {nombre, apellido} = this.props;
    //const nombre = this.props.nombre;

    return(
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <a className="navbar-brand" href="#">Tareas <span className="badge badge-pill badge-light ml-2">{this.props.nombre}</span></a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Empleados</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Reportes</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Rep 1</a>
            <a className="dropdown-item" href="#">Rep 2</a>
            <a className="dropdown-item" href="#">Rep 3</a>
          </div>
        </li>
      </ul>
      </nav>
    )
  }
}
export default Navegacion1;

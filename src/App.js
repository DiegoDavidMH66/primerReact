import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Navegacion1 from './componentes/navegacion1.js';
import FormIngreso from './componentes/formulario.js'

import {task} from './todos.json';
//console.log(task);

class App extends Component {
  //Constructor para inicializar los datos al cargar la pagina(componente)
  constructor(){
     super();
     this.state = {task};
     this.agregarTarea = this.agregarTarea.bind(this);
  }

  agregarTarea(tarea){
    this.setState({task: [...this.state.task, tarea]})
  }

  render() {
    const tareas = this.state.task.map((task, i) => {
      var tipo = "";

      switch (task.prioridad) {
        case "Alta":
          tipo="badge badge-pill badge-danger ml-2";
          break;
        case "Media":
          tipo="badge badge-pill badge-warning ml-2";
          break;
        case "Baja":
          tipo="badge badge-pill badge-success ml-2";
          break;
        default:
      }
      return(
        <div className="col-md-4"  key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.titulo}</h3>
              <span className={tipo} >{task.prioridad}</span>
            </div>
            <div className="card-body">
              <p>{task.descripcion}</p>
              <p><mark>{task.responsable}</mark></p>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="nav navbar-dark bg-dark">
          <a href="www.google.com" className="text-white">
          Tareas<span className="badge badge-pill badge-light ml-2">{this.state.task.length}</span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <img src={logo} className="App-logo" alt="logo" />
              <FormIngreso enAgregarTarea={this.agregarTarea}/>
            </div>
            <div className="col-md-8">
              <div className="row">
                {tareas}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

class FormIngreso extends Component {
  constructor(){
    super();
    this.state = {titulo:'', responsable:'', descripcion:'', prioridad:'baja'};
    this.obtenerValor = this.obtenerValor.bind(this);
    this.enviarDatos_enSubmit = this.enviarDatos_enSubmit.bind(this);
  }

  obtenerValor(e){
    //console.log("valor:"+e.target.value);
    //console.log(e.target.value,e.target.name);
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
    //console.log(this.state);
  }

  enviarDatos_enSubmit(e){
    e.preventDefault();
    this.props.enAgregarTarea(this.state);
    console.log(this.state);
    //alert("sad");
  }

  render(){
    return(
      <div className="card">
      <form className="card-body" onSubmit={this.enviarDatos_enSubmit}>
        <div className="form-group ml-4 mr-4 mt-4">
          <input className="form-control" type="text" onChange={this.obtenerValor} name="titulo" placeholder="Titulo"/>
        </div>
        <div className="form-group ml-4 mr-4">
          <input className="form-control" type="text" onChange={this.obtenerValor} name="responsable" placeholder="Responsable"/>
        </div>
        <div className="form-group ml-4 mr-4">
          <input className="form-control" type="text" onChange={this.obtenerValor} name="descripcion" placeholder="Descripción"/>
        </div>
        <div className="form-group ml-4 mr-4">
          <select className="form-control" onChange={this.obtenerValor} name="prioridad">
            <option>Baja</option>
            <option>Media</option>
            <option>Alta</option>
          </select>
        </div>
        <div className="form-group ml-4 mr-4">
          <input className="btn btn-primary" type="submit" value="Agregar" id="" name=""/>
        </div>
      </form>
      </div>
    )
  }
}

export default FormIngreso;

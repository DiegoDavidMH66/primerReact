import React, {Component} from 'react';

class FormIngreso extends Component {
  constructor(){
    super();
    this.state = {txtTit:'', txtRes:'', txtDes:'', txtPri:'baja'};
    this.obtenerValor = this.obtenerValor.bind(this);
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

  enviarDatos(){
    
  }

  render(){
    return(
      <div className="card">
      <form className="card-body" onSubmit={this.enviarDatos}>
        <div className="form-group ml-4 mr-4 mt-4">
          <input className="form-control" type="text" onChange={this.obtenerValor} name="txtTit" placeholder="Titulo"/>
        </div>
        <div className="form-group ml-4 mr-4">
          <input className="form-control" type="text" onChange={this.obtenerValor} name="txtRes" placeholder="Responsable"/>
        </div>
        <div className="form-group ml-4 mr-4">
          <input className="form-control" type="text" onChange={this.obtenerValor} name="txtDes" placeholder="Descripción"/>
        </div>
        <div className="form-group ml-4 mr-4">
          <select className="form-control" onChange={this.obtenerValor} name="txtPri">
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

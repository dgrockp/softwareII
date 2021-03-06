import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {blue50, blue900} from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';

const items = [];
for( let i = 1; i<=5; i++ ){
  items.push(<MenuItem value={i} primaryText={i} />);
}

export default class AddSuiteModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: false,  
      openSnack: false,
      nombre:"",
      tipo: "Single",
      capacidad:1,
      estado:"Limpia",
      tarifa:0,
      suites:undefined,
      nombreValido:null,
      tarifaValido:"Campo Requerido",
      disabled:false
    };

    this.handleAddOpen = this.handleAddOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleChangeNombre = this.handleChangeNombre.bind(this);
    this.handleChangeTipo = this.handleChangeTipo.bind(this);
    this.handleChangeCapacidad = this.handleChangeCapacidad.bind(this);
    this.handleChangeEstado = this.handleChangeEstado.bind(this);
    this.handleChangeTarifa = this.handleChangeTarifa.bind(this);
    this.onKeypressTarifa = this.onKeypressTarifa.bind(this);
  }

  handleAddOpen(){
    this.setState({
      open: true,
      nombre:"",
      tipo: "Single",
      capacidad:1,
      estado:"Limpia",
      tarifa:0,
    });
  }

  handleClose(){
    this.setState({open: false});
  }

  handleRequestClose(){
    this.setState({openSnack: false});
  }

  handleChangeNombre(event){
    var error=null, disabled=false, exp="";
    this.setState({nombre: event.target.value});
    this.state.suites.map(function (suite){
      exp = new RegExp("^"+suite.nombre+"\\s*$","i"); 
      if( exp.test(event.target.value)){
        console.log("true");
        error='Ya existe una Habitación con este nombre';
        disabled=true;
      }
      return suite;
    }, this);
    this.setState({nombreValido:error, disabled:disabled});
  }

  handleChangeTipo (event, index, value){
    this.setState({tipo: value});
  }

  handleChangeCapacidad (event, index, value){
    this.setState({capacidad: value});
  }

  handleChangeEstado (event, index, value){
    this.setState({estado: value});
  }

  handleChangeTarifa(event, index, value){
   var exp = /^\d+(\.\d{1,2})?$/i, empty = /^\s*$/i;
   var error =null, disabled=false;

   if(empty.test(event.target.value)){
      error="Campo Requerido";
      disabled=true;
   }
   else if(!exp.test(event.target.value)){
    error="Error de formato";
    disabled=true;
   }
   this.setState({tarifa:value, tarifaValido:error, disabled:disabled});
  }

  onKeypressTarifa(event){
    var chr = event.key;
    var exp = /^[0-9]$/i
    console.log(chr);
    if (!exp.test(chr) && chr!=='Backspace' && chr!=='.') {
      event.preventDefault();
    }
  }


  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Agregar"
        primary={true}
        onTouchTap={this.props.onTouchTap}
        disabled={this.state.disabled}
      />,
    ];

    return (
      <div>
        <Dialog
          title={"Nueva Habitación"}
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <div style = {{color:blue900}}>
            <hr/><br/><br/>

            <div>
              <TextField
                hintText="Nombre"
                floatingLabelText="Nombre"
                errorText={this.state.nombreValido}
                onChange={this.handleChangeNombre}
              /><br />
              <br />
              Tipo:
              <DropDownMenu value={this.state.tipo} onChange={this.handleChangeTipo}>
              
                  <MenuItem  value={"Single"} primaryText="Single" />
                  <MenuItem  value={"Twin"} primaryText="Twin" />
              </DropDownMenu>
              <br />
              <TextField
                hintText="Tarifa"
                floatingLabelText="Tarifa"
                errorText={this.state.tarifaValido}
                onChange={this.handleChangeTarifa}
                onKeyDown={this.onKeypressTarifa}
              />
              <br />
              Capacidad:
              <DropDownMenu value={this.state.capacidad} onChange={this.handleChangeCapacidad}>
                 {items}
              </DropDownMenu>
              
              Estado:
              <DropDownMenu value={this.state.estado} onChange={this.handleChangeEstado}>
                  <MenuItem value={"Limpia"} primaryText="Limpia" />
                  <MenuItem value={"Sucia"} primaryText="Sucia" />
              </DropDownMenu>
              <br />
            </div>

          </div> 
        </Dialog>

        <Snackbar
          open={this.state.openSnack}
          message="Agregada nueva habitación"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

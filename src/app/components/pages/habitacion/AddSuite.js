import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {blue50, blue900} from 'material-ui/styles/colors';
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */

const items = [];
for( let i = 1; i<=5; i++ ){
  items.push(<MenuItem value={i} primaryText={i} />);
}

const dividerStyle = {
  fill:blue900
}
export default class AddSuiteForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          tipo: 1,
          capacidad:1,
          estado:1,
        };

        this.handleChangeTipo = this.handleChangeTipo.bind(this);
        this.handleChangeCapacidad = this.handleChangeCapacidad.bind(this);
        this.handleChangeEstado = this.handleChangeEstado.bind(this);
      }

      handleChangeTipo (event, index, value){
        this.setState({["tipo"]: value});
      }

      handleChangeCapacidad (event, index, value){
        this.setState({["capacidad"]: value});
      }

      handleChangeEstado (event, index, value){
        this.setState({["estado"]: value});
      }

    render(){
      return(
        <div>
          <TextField
            hintText="Nombre"
          /><br />
          <br />
          Tipo:
          <DropDownMenu value={this.state.tipo} onChange={this.handleChangeTipo}>
          
              <MenuItem  value={1} primaryText="Single" > <div class="tipo"></div> </MenuItem>
              <MenuItem  value={2} primaryText="Twin" />
          </DropDownMenu>
    
          Capacidad:
          <DropDownMenu value={this.state.capacidad} onChange={this.handleChangeCapacidad}>
             {items}
          </DropDownMenu>
          
          Estado:
          <DropDownMenu name="estado" value={this.state.estado} onChange={this.handleChangeEstado}>
              <MenuItem name="estado" value={1} primaryText="Limpia" />
              <MenuItem name="estado" value={2} primaryText="Sucia" />
          </DropDownMenu>
          <br />
        </div>

      )
    }

}


export default class AddSuiteModal extends React.Component {
  
  constructor(props, context) {
    super(props);
    this.state = {open: false};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(){
  console.log(this);
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

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
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Agregar" onTouchTap={this.handleOpen} />
        <Dialog
          title="Nueva Habitación"
          actions={actions}
          modal={true}
          open={this.state.open}
          children={AddSuiteForm}
        >
          <div style = {{color:blue900}}>
            <hr/><br/><br/>
            <AddSuiteForm/>
          </div> 
        </Dialog>
      </div>
    );
  }
}
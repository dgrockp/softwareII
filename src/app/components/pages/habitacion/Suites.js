import React, {Component} from 'react';
import {AppBar, List, Drawer, ListItem, Dialog, FlatButton, RaisedButton} from 'material-ui';
import {deepOrange500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Router } from 'react-router';

import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {grey400, grey900, blueGrey50, darkBlack, lightBlack, blue50, cyan200, blue900} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


import Header from '../../Main';
import AddSuiteModal from './AddSuite';

const muiTheme = getMuiTheme({
  palette: {
    borderColor: cyan200,
  }
});

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);


const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Editar</MenuItem>
    <MenuItem>Eliminar</MenuItem>
  </IconMenu>
);

const showCheckB = false;

var divTableStyle = {
  padding:'10%',
  background:blue50

};

var headerTableStyle = {
  color:blue900
};

export default class Suites extends Component {
  
 

  render() {


    return (

        <MuiThemeProvider muiTheme={muiTheme}>
                
          <div >
            <Header/>
            
            <div style={divTableStyle}>
             <Table >
              
              <TableHeader
                displaySelectAll={showCheckB}
                adjustForCheckbox={showCheckB}
              >
                <TableRow>
                  <TableHeaderColumn colSpan="4" tooltip="Super Header" style={{textAlign: 'center'}}>
                    <span style={{color: darkBlack}}><h3>Habitaciones</h3></span>
                  </TableHeaderColumn>
                  <TableHeaderColumn colSpan="1" tooltip="Super Header" style={{textAlign: 'center'}}>
                    <span ><AddSuiteModal/></span>
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn style={headerTableStyle}>Nombre</TableHeaderColumn>
                  <TableHeaderColumn style={headerTableStyle}>Tipo</TableHeaderColumn>
                  <TableHeaderColumn style={headerTableStyle}>Capacidad</TableHeaderColumn>
                  <TableHeaderColumn style={headerTableStyle}>Estado</TableHeaderColumn>
                  <TableHeaderColumn></TableHeaderColumn>
                </TableRow>
              </TableHeader>

              <TableBody
                displayRowCheckbox={showCheckB}
                >
                <TableRow>
                  <TableRowColumn>Hab1</TableRowColumn>
                  <TableRowColumn>Single</TableRowColumn>
                  <TableRowColumn>1</TableRowColumn>
                  <TableRowColumn>Limpia</TableRowColumn>
                  <TableRowColumn><span>{rightIconMenu}</span></TableRowColumn>

                </TableRow>
                <TableRow>
                  <TableRowColumn>Hab2</TableRowColumn>
                  <TableRowColumn>Single</TableRowColumn>
                  <TableRowColumn>1</TableRowColumn>
                  <TableRowColumn>Limpia</TableRowColumn>
                  <TableRowColumn><span>{rightIconMenu}</span></TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Hab3</TableRowColumn>
                  <TableRowColumn>Single</TableRowColumn>
                  <TableRowColumn>1</TableRowColumn>
                  <TableRowColumn>Limpia</TableRowColumn>
                  <TableRowColumn><span>{rightIconMenu}</span></TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Hab4</TableRowColumn>
                  <TableRowColumn>Single</TableRowColumn>
                  <TableRowColumn>1</TableRowColumn>
                  <TableRowColumn>Limpia</TableRowColumn>
                  <TableRowColumn><span>{rightIconMenu}</span></TableRowColumn>
                </TableRow>
              </TableBody>

            </Table>

          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}



export default Suites;
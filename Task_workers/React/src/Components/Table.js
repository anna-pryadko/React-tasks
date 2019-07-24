//import React from 'react';
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import './Table.css';

class table extends Component {
    render() {
    console.log("props : " , this.props)
    return (
        <div>
          <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id'>
            Id
            </TableHeaderColumn>
            <TableHeaderColumn dataField='name'>
             Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField='age'>
            Age
            </TableHeaderColumn>
            <TableHeaderColumn dataField='mail'>
            Mail
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
}
}

export default table
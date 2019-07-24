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
          <TableHeaderColumn isKey dataField='Id'>
            Id
            </TableHeaderColumn>
            <TableHeaderColumn dataField='Name'>
             Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField='Description'>
            Description
            </TableHeaderColumn>
            <TableHeaderColumn dataField='Price'>
            Price
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
}
}

export default table
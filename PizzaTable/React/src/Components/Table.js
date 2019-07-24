import React from 'react';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';

const table = (props) => {
    console.log("props : " , props)
    return (
        <div className="App mt-3">
               <table className="table"  striped bordered>
                    <thead>
                        <tr>
                            <th scope="col">Diameter</th>
                            <th scope="col">Slices</th>
                            <th scope="col">Toppings</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.pizza()}
                    </tbody>
                </table>
        </div>
    );
}

export default table
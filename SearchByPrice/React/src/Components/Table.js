import React from 'react';

const table = (props) => {
    console.log("props : " , props)
    return (
        <div className="App mt-3">
               <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {props.products()}
                    </tbody>
                </table>
        </div>
    );
}

export default table
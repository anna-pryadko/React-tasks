import React from 'react';

const table = (props) => {
    console.log("props : " , props)
    return (
        <div className="App mt-3">
               <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.students()}
                    </tbody>
                </table>
        </div>
    );
}

export default table
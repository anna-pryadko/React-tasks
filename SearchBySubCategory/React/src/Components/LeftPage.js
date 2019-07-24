import React from 'react';

const left = (props) => {
    return (
        <tr>
            <th>{props.name}</th>
            <td>{props.mail}</td>
            <td>{props.phone}</td>
        </tr>
    )
}

export default left
/**
 * A general table component
 */
import React from 'react';

function Table(props){

    //props.head = ["value1", "value2", "value3"]
    const headers = props.heads.map((head, index) => (
        <th key={index}>
            {head}
        </th>
    ))

    /**
    * props.data = [
        { name: "task1", time: "11-11-2011", status:"Running" },
      ];
    */
    const rows = props.rows.map((row, index) => (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.time}</td>
          <td>{row.status}</td>
        </tr>
    ));
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
   );
}

export default Table;
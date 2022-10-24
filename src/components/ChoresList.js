import { TableCell, TableRow } from '@mui/material';
import * as React from 'react';


const ChoresList = (props) => {
  return (
    // <table>
    //     <tr>
    //         <th>Chore</th>
    //         <th>Description</th>
    //         <th>Date</th>
    //     </tr>
    //     <tr key={props.id}>
    //         <td>{props.name}</td>
    //         <td>{props.desc}</td>
    //         <td>{props.date}</td>
    //     </tr>
    // </table>
    <TableRow key={props.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
      <TableCell align="center">{props.name}</TableCell>
      <TableCell align="center">{props.desc}</TableCell>
      <TableCell align="center">{props.date}</TableCell>
    </TableRow>
  
  )
}

export default ChoresList

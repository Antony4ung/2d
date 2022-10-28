import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, useTheme } from '@mui/material';

export default function DenseTable({data}:any) {

    const theme = useTheme()

  return (
    <TableContainer component={Paper}>
      <Table sx={{}} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Set</TableCell>
            <TableCell align="center">Value</TableCell>
            <TableCell align="center">2D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data[0]?.child.map((row:any,index:number) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
              {row.time}
              </TableCell>
              <TableCell align="center">{row.set}</TableCell>
              <TableCell align="center">{row.value}</TableCell>
              <TableCell sx={{fontSize:20,color:theme.palette.warning.dark}} align="center">
                <Button variant="contained">
                    {row.twod}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

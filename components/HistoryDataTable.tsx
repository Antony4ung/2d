import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Typography, useTheme} from '@mui/material'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function HostoryDataTable({data}:any) {
  const theme = useTheme()
  return (
    <TableContainer component={Paper}>
      <Table sx={{width:"100%" }} size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Set</StyledTableCell>
            <StyledTableCell align="center">Value</StyledTableCell>
            <StyledTableCell align="center">2D</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {data[0]?.child.map((row:any,index:number) => (
            <StyledTableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell align="center" component="th" scope="row">
              {row.time}
              </StyledTableCell>
              <StyledTableCell align="center">{row.set}</StyledTableCell>
              <StyledTableCell align="center">{row.value}</StyledTableCell>
              <StyledTableCell sx={{fontSize:20,color:theme.palette.warning.dark}} align="center">
                <Button size='small' variant="contained">
                <Typography sx={{ fontWeight: "bold" }} variant="body1">
                    {row.twod}
                  </Typography>
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
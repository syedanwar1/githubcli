import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { keyframes } from "@mui/system";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(900px); }
  100% { opacity: 1; transform: translateY(0); }
`;

function createData(
  name,
  year,
  percentage
) {
  return { name, year, percentage };
}

const rows = [
  createData('SSLC', 2013, 90.4),
  createData('HSC', '2014 - 2015', 90.5),
  createData('Electronics & Instrumentation(BE)', '2015 - 2019', 72),
];

export default function Education() {
  return (
    <TableContainer sx={{mt:'3rem',              
        opacity: 0,
        animation: `${fadeInUp} 2s ease forwards`,

        '@media (prefers-reduced-motion: reduce)': {
          animation: "none",
          opacity: 1,
          transform: "none",
        },}}component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ '& td': { fontWeight: 'bold' } }}>
            <TableCell>Education</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.year}</TableCell>
              <TableCell align="left">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// ● Bachelor’s degree in Electronic & Instrumentation at Bannari Amman Institute of technology,
// Sathyamangalam (2015 -2019)
// ● HSC 12th

// in Vijayalakshmi Matric Higher secondary school. Sirumugai.
// ● SSLC in Carewell Matriculation Higher Secondary School. Mettupalayam.
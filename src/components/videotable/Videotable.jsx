import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./videotable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/videos')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Nickname</TableCell>
            <TableCell className="tableCell">Title</TableCell>
            <TableCell className="tableCell">Views</TableCell>
            <TableCell className="tableCell">Likes</TableCell>
            <TableCell className="tableCell">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.nickname}</TableCell>
              <TableCell className="tableCell">{row.title}</TableCell>
              <TableCell className="tableCell">{row.views}</TableCell>
              <TableCell className="tableCell">{row.likes}</TableCell>
              <TableCell className="tableCell">{row.created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

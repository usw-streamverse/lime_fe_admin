import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Oneusertable.scss";
import api from "../../api"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Oneusertable = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.getUserInfo(userId)
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, [userId]);

  return (
    <div>
      {user ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Nickname</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userid}</TableCell>
                <TableCell>{user.nickname}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Oneusertable;

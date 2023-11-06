import "../user11/User11.scss";
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button } from '@mui/material';
import { getAllUsers, searchUsers, editUser } from '../../api/Apis'; 

const User11 = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editUserId, setEditUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({
    nickname: '',
    status: '',
    role: '',
  });

  useEffect(() => {
    // 모든 유저 정보를 가져와서 표시
    getAllUsers()
      .then((response) => {
        setUsers(response.success);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  const handleSearch = () => {
    // 검색어를 사용하여 유저 검색
    searchUsers(searchTerm)
      .then((response) => {
        setUsers(response.success);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  const handleEditUser = (userId) => {
    // 유저 정보 수정을 위한 함수
    setEditUserId(userId);
  };

  const handleSaveEdit = () => {
    // 수정된 정보를 저장하는 함수
    const userToEdit = users.find((user) => user.id === editUserId);
    if (userToEdit) {
      editUser(editUserId, editedUser.nickname, editedUser.status, editedUser.role)
        .then((response) => {
          console.log('User edited successfully:', response);
          setEditUserId(null);
          // 재로딩하지 않고 수정된 정보를 업데이트할 수도 있음
          setUsers((prevUsers) => {
            const updatedUsers = prevUsers.map((user) => {
              if (user.id === editUserId) {
                return {
                  ...user,
                  nickname: editedUser.nickname,
                  status: editedUser.status,
                  role: editedUser.role,
                };
              }
              return user;
            });
            return updatedUsers;
          });
        })
        .catch((error) => {
          console.error('Error', error);
        });
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userid', headerName: 'User ID', width: 150 },
    { field: 'nickname', headerName: 'Nickname', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 100,
      renderCell: (params) => (
        <Button
          variant="outlined"
          onClick={() => handleEditUser(params.row.id)}
          disabled={params.row.id !== editUserId}
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div>
      <TextField
        label="Search by User ID or Nickname"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          disableColumnFilter
        />
      </div>
      {editUserId !== null && (
        <div>
          <TextField
            label="Nickname"
            variant="outlined"
            value={editedUser.nickname}
            onChange={(e) =>
              setEditedUser({ ...editedUser, nickname: e.target.value })
            }
          />
          <TextField
            label="Status"
            variant="outlined"
            value={editedUser.status}
            onChange={(e) =>
              setEditedUser({ ...editedUser, status: e.target.value })
            }
          />
          <TextField
            label="Role"
            variant="outlined"
            value={editedUser.role}
            onChange={(e) =>
              setEditedUser({ ...editedUser, role: e.target.value })
            }
          />
          <Button variant="contained" onClick={handleSaveEdit}>
            Save Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default User11;

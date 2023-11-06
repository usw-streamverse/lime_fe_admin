import React, { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./DatatableUser.scss";
import apis from '../../api/Apis';

const DatatableUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // 백엔드에서 모든 사용자 정보를 가져오는 API를 호출
        apis.getAllUsers()
            .then(response => {
                if (response.success) {
                    setUsers(response.users);
                } else {
                    console.error('모든 사용자 정보를 불러오는 데 문제가 발생했습니다.');
                }
            })
            .catch(error => {
                console.error('모든 사용자 정보를 불러오는 데 문제가 발생했습니다.', error);
            });
    }, []);

    const handleDelete = (id) => {
        // 사용자 삭제 로직을 추가할 수 있습니다.
        console.log(`Delete user with ID: ${id}`);
    };

    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "username",
            headerName: "User",
            width: 230,
            renderCell: (params) => {
                return (
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt="avatar" />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: "email",
            headerName: "Email",
            width: 230,
        },
        {
            field: "age",
            headerName: "Age",
            width: 100,
        },
        {
            field: "status",
            headerName: "Status",
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus ${params.row.status}`}>
                        {params.row.status}
                    </div>
                );
            },
        },
    ];

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                All Users
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={users}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default DatatableUser;

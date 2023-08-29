export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
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
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "lim",
      img: "https://hhc.kz/detox/img/limeImg.png",
      status: "active",
      email: "aaaaa@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "bbbb",
      img: "https://hhc.kz/detox/img/limeImg.png",
      email: "ddddd@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "cccc",
      img: "https://hhc.kz/detox/img/limeImg.png",
      email: "ccccc@gmail.com",
      status: "pending",
      age: 45,
    },
  ];
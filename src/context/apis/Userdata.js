// import axios, { AxiosRequestHeaders ,axoiis} from 'axios'
// import REact, {useEffect, useState} from 'react';
// import { Interface } from 'readline';




// const USerdata = () => {
//     const instance = axios.create({
//         baseURL: 'http://localhost:8000'
//     });

//     instance.interceptors.request.use(
//         (config) => {
//             const token = localStorage.getItem('accessToken');
//             if(token)
//                 config.headers = {
//                     'Authorization': `Bearer ${token}`
//                 } as CustomRequestHeaders;
//             return config;
//         }
//     );
//     return (
//          {instance }
//     )


// }

// export default Userdata;
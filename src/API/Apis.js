import axios from 'axios';


const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;
// 특정 유저 정보 가져오기
export const getUserInfo = (userId) => {
  return axios.get(`${backendBaseUrl}/users/${userId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// 유저 정보 가져오기
export const getUsers = () => {
  return axios.get(`${backendBaseUrl}/users`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// 비디오 정보 가져오기
export const getVideos = () => {
  return axios.get(`${backendBaseUrl}/videos`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// 모든 유저 정보 가져오기
export const getAllUsers = () => {
  return axios.get(`${backendBaseUrl}/users`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};



// 유저 검색
export const searchUsers = (searchTerm) => {
  return axios.post(`${backendBaseUrl}`, { search: searchTerm })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// 유저 정보 수정
export const editUser = (userId, nickname, status, role) => {
  return axios.put(`${backendBaseUrl}/search/edit`, { id: userId, nickname, status, role })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export default {
  getUserInfo,
  getUsers,
  getVideos,
  getAllUsers,
  editUser,
  searchUsers,
};

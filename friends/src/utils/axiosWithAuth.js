import axios from 'axios';

const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: 'http://localhost:5000/api',
  });
};

export default axiosWithAuth;

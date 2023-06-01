import axios from 'axios';

axios.defaults.baseURL = 'https://6462869a4dca1a6613488ff7.mockapi.io/api/v1';

export const fetchUsers = async () => {
  try {
    const res = await axios.get(`/users`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

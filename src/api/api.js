import axios from 'axios';
import Notiflix from 'notiflix';
axios.defaults.baseURL = 'https://6462869a4dca1a6613488ff7.mockapi.io/api/v1';

export const fetchUsers = async () => {
  try {
    const res = await axios.get(`/users`);
    if (!res) {
      Notiflix.Notify('Oops, something went wrong');
    }
    return res;
  } catch (e) {
    console.log(e);
  }
};

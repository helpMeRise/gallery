import { ACCESS_KEY, REDIRECT_URI, SECRET_KEY } from './const';
import axios from 'axios';

const params = new URLSearchParams(location.search);
const code = params.get('code');


export const setToken = (token) => {
  localStorage.setItem('Bearer', token);
};
let token;
axios.post(`https://unsplash.com/oauth/token?client_id=${ACCESS_KEY}&client_secret=${SECRET_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}&grant_type=authorization_code`)
  .then(response => {
    token = response.data['access_token'];
    localStorage.setItem('Bearer', token);
  });

export const getToken = () => {
  setToken(token);

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  }

  return token;
};

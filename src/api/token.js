export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';
  if (location.pathname.includes('/auth')) {
    const params = new URLSearchParams(location.search);
    token = params.get('code');
    setToken(token);
  }

  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  }

  return token;
};

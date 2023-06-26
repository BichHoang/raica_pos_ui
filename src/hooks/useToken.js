import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken.data));
    setToken(userToken.data);
  };

  const clearToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  }

  return {
    setToken: saveToken,
    clearToken: clearToken,
    token
  }
}

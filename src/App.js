import { Outlet } from 'react-router-dom';
import Login from './login';
import Layout from './components/layout';
import useToken from './hooks/useToken';

async function logoutUser(token) {
  return fetch(`${process.env.REACT_APP_API_HOST}/api/auth/logout`, {
    method: 'DELETE',
    headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Authorization': `${token.token_type} ${token.access_token}`,
    },
  })
   .then(data => data.json())
}

function App() {
  const { token, setToken, clearToken } = useToken();

  const handleLogout = async e => {
    e.preventDefault();
    const data = await logoutUser(token);
    clearToken();
  }

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Layout>
      <Outlet />
      <button onClick={handleLogout}>log out</button>
    </Layout>
  );
}

export default App;

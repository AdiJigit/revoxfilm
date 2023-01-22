import { useContext } from 'react';
import { useState } from 'react';
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <form className="loginForm">
        <h1 className="loginTitle">Login</h1>
        <input
          type="email"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="input loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={isFetching}
          className="loginButton"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
}

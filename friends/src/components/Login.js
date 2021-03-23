import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (evt) => {
    setCreds({
      ...creds,
      [evt.target.name]: evt.target.value,
    });
    setError('');
  };

  const login = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    axios
      .post('http://localhost:5000/api/login', creds)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        setIsLoading(false);
        history.push('/friends');
      })
      .catch((err) => {
        setError(err.response.data.error);
        setIsLoading(false);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={login}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={creds.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
          />
        </label>
        {!isLoading ? (
          <button className="login-btn">Log in</button>
        ) : (
          <button className="login-btn loading">Loading</button>
        )}
        {error && <p style={{ color: `red`, fontSize: '12px' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

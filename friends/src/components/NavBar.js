import { Link, useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const NavBar = () => {
  const history = useHistory();

  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then((res) => {
        console.log(res);
        localStorage.removeItem('token');
        history.push('/login');
      });
  };

  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/friends">
            Friends
          </Link>
        </li>
        <li>
          <Link className="nav-link" onClick={logout}>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

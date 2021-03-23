import NavBar from './components/NavBar';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={Friends} />
      </Switch>
    </div>
  );
};

export default App;

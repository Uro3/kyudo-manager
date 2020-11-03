import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/global/Auth';
import AuthRouter from './components/global/AuthRouter';
import Navbar from './components/global/Navbar';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Signout from './components/pages/Signout';
import Home from './components/pages/Home';
import RecordList from './components/pages/RecordList';


const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/signin' component={Signin}></Route>
      <Route path='/signout' component={Signout}></Route>
      <AuthRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/record' component={RecordList}></Route>
        </Switch>
      </AuthRouter>
    </Switch>
  );
};

const App: React.FC = () => {
  return (
    <Auth>
      <BrowserRouter>
        <Navbar />
        <AppRoute />
      </BrowserRouter>
    </Auth>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import RecordList from './components/pages/RecordList';

const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/record' component={RecordList}></Route>
    </Switch>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;

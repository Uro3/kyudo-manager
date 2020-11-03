import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from './Auth';

type Props = {
  children: React.ReactNode;
};

const AuthRouter: React.FC<Props> = props => {
  const { user } = React.useContext(UserContext);

  if (user.isLoggedIn) {
    return <>{props.children}</>
  }
  return <Redirect to='/signin'/>;
};

export default AuthRouter;

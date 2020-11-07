import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { UserAuthContext } from './Auth';
import UserNameEditCard from '../parts/UserNameEditCard';

type Props = {
  children: React.ReactNode;
};

const AuthRouter: React.FC<Props> = props => {
  const { userAuth } = React.useContext(UserAuthContext);

  if (!userAuth.isLoggedIn) {
    return <Redirect to='/signin'/>;
  }

  if (userAuth.name === '') {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <UserNameEditCard />
        </div>
      </div>
    );
  }

  return <>{props.children}</>;
};

export default AuthRouter;

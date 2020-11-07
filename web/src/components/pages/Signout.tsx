import * as React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { UserAuthContext, initialUserAuth } from '../global/Auth';

const Signout: React.FC<{}> = () => {
  const [isSignoutFinished, setIsSignoutFinished] = React.useState(false);
  const { setUserAuth } = React.useContext(UserAuthContext);
  const history = useHistory();

  React.useEffect(() => {
    auth.signOut().then(() => {
      setUserAuth(initialUserAuth);
      setIsSignoutFinished(true);
    }).catch(error => {
      console.log(error);
      history.goBack();
    });
  }, [history, setUserAuth]);

  if (isSignoutFinished) {
    return <Redirect to='/signin'/>;
  }
  return <p>Logging out...</p>;
};

export default Signout;

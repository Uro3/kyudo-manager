import * as React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { UserContext, initialUser } from '../global/Auth';

const Signout: React.FC<{}> = () => {
  const [isSignoutFinished, setIsSignoutFinished] = React.useState(false);
  const { setUser } = React.useContext(UserContext);
  const history = useHistory();

  React.useEffect(() => {
    auth.signOut().then(() => {
      setUser(initialUser);
      setIsSignoutFinished(true);
    }).catch(error => {
      console.log(error);
      history.goBack();
    });
  }, [history, setUser]);

  if (isSignoutFinished) {
    return <Redirect to='/signin'/>;
  }
  return <p>Logging out...</p>;
};

export default Signout;

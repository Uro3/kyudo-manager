import * as React from 'react';
import { auth } from '../../firebase';

type Props = {
  children: React.ReactNode;
};

type UserAuth = {
  isLoggedIn: boolean;
  uid: string;
  name: string;
};

type UserAuthContextType = {
  userAuth: UserAuth;
  setUserAuth: React.Dispatch<React.SetStateAction<UserAuth>>;
};

export const initialUserAuth: UserAuth = {
  isLoggedIn: false,
  uid: '',
  name: ''
};

const initialUserAuthContext: UserAuthContextType = {
  userAuth: initialUserAuth,
  setUserAuth: () => {}
}

export const UserAuthContext = React.createContext(initialUserAuthContext);

const Auth: React.FC<Props> = props => {
  const [userAuth, setUserAuth] = React.useState(initialUserAuth);
  const [isCheckingFinished, setIsCheckingFinished] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log(currentUser);
        
        setUserAuth({
          isLoggedIn: true,
          uid: currentUser.uid || '',
          name: currentUser.displayName || ''
        });
      }
      setIsCheckingFinished(true);
    });
  }, []);

  if (isCheckingFinished) {
    return (
      <UserAuthContext.Provider value={{ userAuth, setUserAuth }}>
        {props.children}
      </UserAuthContext.Provider>
    );
  }
  return <p>Please wait...</p>;
};

export default Auth;

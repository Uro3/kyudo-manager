import * as React from 'react';
import { auth } from '../../firebase';

type Props = {
  children: React.ReactNode;
};

type User = {
  isLoggedIn: boolean;
  uid: string;
  name: string;
  email: string;
};

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const initialUser: User = {
  isLoggedIn: false,
  uid: '',
  name: '',
  email: ''
};

const initialUserContext: UserContextType = {
  user: initialUser,
  setUser: () => {}
}

export const UserContext = React.createContext(initialUserContext);

const Auth: React.FC<Props> = props => {
  const [user, setUser] = React.useState(initialUser);
  const [isCheckingFinished, setIsCheckingFinished] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log(currentUser);
        
        setUser({
          isLoggedIn: true,
          uid: currentUser.uid || '',
          name: currentUser.displayName || '',
          email: currentUser.email || ''
        });
      }
      setIsCheckingFinished(true);
    });
  }, []);

  if (isCheckingFinished) {
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {props.children}
      </UserContext.Provider>
    );
  }
  return <p>Please wait...</p>;
};

export default Auth;

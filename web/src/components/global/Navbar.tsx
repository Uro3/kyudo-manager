import * as React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './Auth';
import logo from '../../images/logo.png';

const Navbar: React.FC<{}> = () => {
  const ACTIVE_CLASSNAME = 'is-active';
  const [isActive, setIsActive] = React.useState('');
  const { user } = React.useContext(UserContext);

  const toggleBurger = (): void => {    
    if (isActive === ACTIVE_CLASSNAME) {
      setIsActive('');
    } else {
      setIsActive(ACTIVE_CLASSNAME);
    }
  };

  const addActive = (name: string): string => {
    return name + ' ' + isActive;
  }

  let navbarStartItem: JSX.Element;  
  let navbarEndItem: JSX.Element;  
  if (user.isLoggedIn) {
    navbarStartItem = (
      <Link to="/" className="navbar-item">Home</Link>
    );
    navbarEndItem = (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          User Name
        </a>

        <div className="navbar-dropdown is-right">
          <Link to="/signout" className="navbar-item">サインアウト</Link>
        </div>
      </div>
    );
  } else {
    navbarStartItem = <div style={{ display: 'none' }}></div>;
    navbarEndItem = (
      <div className="buttons">
        <Link to="/signup" className="button is-primary">サインアップ</Link>
        <Link to="/signin" className="button is-light">サインイン</Link>
      </div>
    );
  }
  

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="dropdown navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={logo} alt="logo" width="112" height="28"/>
        </Link>

        <a role="button" className={addActive('navbar-burger')} aria-label="menu" aria-expanded="false" onClick={toggleBurger}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={addActive('navbar-menu')}>
        <div className="navbar-start">
          {navbarStartItem}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {navbarEndItem}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

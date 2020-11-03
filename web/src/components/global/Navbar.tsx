import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC<{}> = () => {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="dropdown navigation">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/record" className="navbar-item">Record</Link>
      <Link to="/signup" className="navbar-item">サインアップ</Link>
      <Link to="/signin" className="navbar-item">サインイン</Link>
      <Link to="/signout" className="navbar-item">サインアウト</Link>
    </nav>
  );
};

export default Navbar;

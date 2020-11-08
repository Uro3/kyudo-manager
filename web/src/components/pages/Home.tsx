import * as React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC<{}> = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/record/edit">記録する</Link>
        </li>
        <li>
          <Link to="/record">記録を見る</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

import {Link, useLocation} from 'react-router-dom';



const NavTab = () => {
  const location = useLocation().pathname;

  return (
    <nav className="nav-tab">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className={location === '/' ? 'active' : ''}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ErrorPage" className={location === '/ErrorPage' ? 'active' : ''}>
            ErrorPage
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
import {Link, useLocation} from 'react-router-dom';

interface NavProps {
  currentPage: string,
  setCurrentPage: (string: string) => void
}

const NavTab = ({ currentPage, setCurrentPage }: NavProps) => {
 // const currentPage = useLocation().pathname;
 

  return (
    <nav className="nav-tab">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className={currentPage === '/' ? 'active' : ''}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ErrorPage" className={currentPage === '/ErrorPage' ? 'active' : ''}>
            ErrorPage
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
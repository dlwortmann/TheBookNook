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
          <Link to="/ProfilePage" className={currentPage === '/ProfilePage' ? 'active' : ''}>
            Profile Page
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/BookSearch" className={currentPage === '/BookSearch' ? 'active' : ''}>
            Book Search
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/MovieSearch" className={currentPage === '/MovieSearch' ? 'active' : ''}>
            Movie Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
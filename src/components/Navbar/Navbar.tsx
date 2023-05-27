import { Link } from 'react-router-dom';
import './navbar-style.css';

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className='navbar__link' to="/posts">Посты</Link>
        </li>
        <li className="navbar__item">
          <Link className='navbar__link' to="/about">Обо мне</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
import { useState } from "react";
import './header-style.css';
import Navbar from "../Navbar/Navbar";
import photo from '../../assets/photo_5445165426725212706_y.jpg'

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="container">
      <div className="header">
        <div className="menu-btn" onClick={() => setMenu(prev => !prev)}>
          <span className="row"></span>
          <span className="row"></span>
          <span className="row"></span>
        </div>
        <div
          className={`menu ${menu && 'menu-open'}`}
          onClick={() => setMenu(prev => !prev)} 
        >
          <Navbar />
          <img className="menu__photo" src={photo} alt="" />
          <span className="menu__name">Александр Васнев</span>
          <span className="menu__location">адрес: г. Сочи, пер. Васильковый, 33 "Д"</span>
        </div>
      </div>
    </div>
  )
}

export default Header
import  { Link } from "react-router-dom";
import './Navbar.css';
import './Fonts.css';

const Navbar = () => {
  return (
    <nav className="navbar bungee-spice-regular">
        <h1>Hollywoodddd, not historical, not dictators</h1>
        <div>Navbar</div>
        <div className="links">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/MovieStarList">Movie Stars: Holly Stars Woods</Link></div>
            <div><Link to="/Dummy">Dummy</Link></div>
        </div>
    </nav>
  )
}

export default Navbar;
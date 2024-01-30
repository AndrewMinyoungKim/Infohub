import  { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Hollywoodddd, not historical, not dictators</h1>
        <div>Navbar</div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/MovieStarList">Movie Stars: Holly Stars Woods</Link>
            <Link to="/Dummy">Dummy</Link>
        </div>
    </nav>
  )
}

export default Navbar;
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
        Projects
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
        About
        </Link>
        <Link to="/articles" style={{ padding: 5 }}>
        Articles
        </Link>
        </nav>
    )
}

export default NavBar;
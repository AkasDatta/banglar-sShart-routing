import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/review"><button>Order Review</button></Link>
            <Link to="/grandpa"><button>Grandpa</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
        </nav>
    );
};

export default Header;
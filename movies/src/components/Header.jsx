import React from 'react';
import { Link } from 'react-router-dom'
const Header = (props) => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/movies'>Movies</Link>
            <button><span className="logout" onClick={props.logout}>Logout</span></button>
        </nav>
    )
}

export default Header
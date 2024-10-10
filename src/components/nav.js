import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Inventory Managment System</h2>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;

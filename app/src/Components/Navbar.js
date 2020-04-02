import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-medium-grey navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#">Skills</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Stats</a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="#root">Inventory</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Quests</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
import React from 'react';
import './navBar.css';

function NavBar () {

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <div className="navbar_home">
                    <a href="#">Home</a>
                </div>
                <div className="navbar_likes">
                    <a href="#">Likes</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
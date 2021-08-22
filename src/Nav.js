import React, { useEffect, useState } from 'react'
import './Nav.css'
import Bell from './bell.png'
import {NavLink} from 'react-router-dom'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix Logo"
            />

            <div>
                <nav className='nav__links'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>TV Show</NavLink>
                    <NavLink to='/'>Movies</NavLink>
                    <NavLink to='/'>New & Popular</NavLink>
                    <NavLink to='/'>My List</NavLink>
                </nav>
            </div>

            <img
                className="nav_search"
                src="https://www.queryly.com/images/whitesearchicon.png"
                alt="Netflix Logo"
            />

            <img
                className="nav_notification"
                src="https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F651849913%2Ficons%2Fmonochrome_large.png%3Fversion%3D0?w=240&h=240&s=d44d4ef387913496be892568b10cf49e"
                alt="Netflix Logo"
            />

            <img
                className="nav_avatar"
                src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav

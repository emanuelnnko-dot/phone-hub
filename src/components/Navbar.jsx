import React from 'react'

function Navbar() {

    return (
        <nav className="">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Products</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
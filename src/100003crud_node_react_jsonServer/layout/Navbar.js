import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav >
        <div className="container">
          <Link  to="/">
            Recat User
          </Link>
  
          <div >
            <ul >
              <li >
                <NavLink  exact to="/">
                  Home
                </NavLink>
              </li>
              <li >
                <NavLink  exact to="/about">
                  About
                </NavLink>
              </li>
              <li >
                <NavLink  exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
  
          <Link  to="/users/add">Add User</Link>
        </div>
      </nav>
    );
  };

export default Navbar
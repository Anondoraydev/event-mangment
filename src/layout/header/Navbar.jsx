import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import profileImage from '../../assets/user.png';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      console.log('Logged out');
    }).catch(err => console.error(err));
  };

  const navItems = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/tickets">Tickets</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      {
        user ? (
          <>
            <li><button onClick={handleLogOut}>Logout</button></li>
          </>
        ) : (
          <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </>
        )
      }
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="avatar online">
          <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {
              user && user.photoURL
                ? <img src={user.photoURL} alt="User" />
                : <img src={profileImage} alt="Default User" />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {

  const auth = useSelector(state => state.auth)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      { auth ? (
        <Link to="/home" className="navbar-brand">Home</Link>

      ): (
        <Link to="/" className="navbar-brand">Flo</Link>
      )}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">


          { auth ? (
              <>
                <li className="nav-item">
                  <Link to="/resources" className="nav-link">Resources</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signout" className="nav-link">Sign Out</Link>
                </li>
                <li className="nav-item">
                  <Link to="/study" className="nav-link">Study</Link>
                </li>
                <li className="nav-item">
                  <Link to="/resources/new" className="nav-link">New resource</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
              </>
            )
          }       


          <li className="nav-item">
            <Link to="/account" className="nav-link">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
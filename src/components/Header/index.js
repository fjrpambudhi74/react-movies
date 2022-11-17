import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">MyFlix</span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link" href="#">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link" href="#">
                  My Favourites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

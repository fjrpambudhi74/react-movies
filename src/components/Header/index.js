import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";

export default function index() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <span className="navbar-brand">Movie Finder</span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-5">
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
            <div className="ml-auto">
              <Button
                variant="outline-warning"
                href="https://github.com/fjrpambudhi74/react-movies"
              >
                <span>
                  <i className="bi bi-github mr-2"></i>
                </span>
                Github
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

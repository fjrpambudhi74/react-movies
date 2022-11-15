import React from 'react'
import { NavLink } from 'react-router-dom'

export default function index() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span class="navbar-brand">
            MyFlix
          </span>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <span class="nav-link" href="#">
                  <NavLink to="/">Movies</NavLink>
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link" href="#">
                  <NavLink to="/favourites">My Favourites</NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

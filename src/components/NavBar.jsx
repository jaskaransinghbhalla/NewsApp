import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand mx-4" to="google.com">
            News
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

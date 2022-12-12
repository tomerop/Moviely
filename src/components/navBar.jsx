import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              {" "}
              Home
            </Link>
          </div>
          <div className="container-fluid">
            <Link to="/add" className="navbar-brand">
              {" "}
              Add New Movie
            </Link>
          </div>
          <div>
            <input
              min={1}
              type="number"
              onChange={(e) => this.props.thePage(e.target.value)}
              placeholder="enter number of movies"
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

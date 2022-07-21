import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active ">
                            <Link className="nav-link" to="/users">
                                ALL-users
                            </Link>
                        </li>
                        <li className="nav-item active ">
                            <Link className="nav-link" to="/tasks">
                                ALL-tasks
                            </Link>
                        </li>
                        <li className="nav-item active ">
                            <Link className="nav-link" to="/vacations">
                                ALL-vacations
                            </Link>
                        </li>
                        <li className="nav-item active ">
                            <Link className="nav-link" to="/myvacation">
                                My-vacation
                            </Link>
                        </li>
                        {/* <li className="nav-item">
              <Link className="nav-link" to="/artists/:id">
                Show
              </Link>
            </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/departments">
                                All-Departments
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/complaints">
                                All-Complaints
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Error">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

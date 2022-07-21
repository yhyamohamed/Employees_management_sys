import {useContext} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../App";

const Navbar = () => {
    const {user, setUser} = useContext(UserContext);

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
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
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
                    <ul className="navbar-nav ">
                        {user.authenticated ? (
                            <li className="nav-item">
                                <span className="nav-link"
                                      style={{cursor: "pointer"}}
                                        onClick={() => {
                                            localStorage.removeItem('token');
                                            setUser({authenticated: false, token: ''});
                                        }}
                                >
                                    Logout
                                </span>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

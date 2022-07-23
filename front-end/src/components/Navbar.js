import {useContext} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../App";
import APIService from "../services/APIService";

const Navbar = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container">
                <Link className="navbar-brand" to="/home">
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
                        {
                            (user.authenticated && (user.employee_group === 'admin' || user.employee_group === 'higher-management' || user.employee_group === 'middle-management')) && (
                                <>
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
                                        <Link className="nav-link" to="/attendance">
                                            ALL-Attendance
                                        </Link>
                                    </li>
                                    <li className="nav-item active ">
                                        <Link className="nav-link" to="/leave">
                                            ALL-Leave
                                        </Link>
                                    </li>
                                    {/*<li className="nav-item active ">*/}
                                    {/*    <Link className="nav-link" to="/myattendance">*/}
                                    {/*        My Attendance*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item active ">*/}
                                    {/*    <Link className="nav-link" to="/myleave">*/}
                                    {/*        My Leave*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item active ">*/}
                                    {/*    <Link className="nav-link" to="/myovertime">*/}
                                    {/*        My Overtime*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                    <li className="nav-item active ">
                                        <Link className="nav-link" to="/over-time">
                                            ALL-Overtime
                                        </Link>
                                    </li>
                                    <li className="nav-item active ">
                                        <Link className="nav-link" to="/vacations">
                                            ALL-vacations
                                        </Link>
                                    </li>
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
                                </>
                            )
                        }
                        {/*{*/}
                        {/*    user.authenticated && (*/}
                        {/*        <>*/}
                        {/*            <li className="nav-item active ">*/}
                        {/*                <Link className="nav-link" to="/myvacation">*/}
                        {/*                    My-vacation*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li className="nav-item active ">*/}
                        {/*                <Link className="nav-link" to="/mytasks">*/}
                        {/*                    My-tasks*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*            <li className="nav-item active ">*/}
                        {/*                <Link className="nav-link" to="/mycomplaints">*/}
                        {/*                    My-complaints*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*        </>*/}
                        {/*    )*/}
                        {/*}*/}
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
                                        onClick={async () => {
                                            await APIService.post('http://127.0.0.1:8000/api/leave', {
                                                user_id: user.id,
                                            });
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

import React from "react";
import { useNavigate } from "react-router-dom";
import "../home.css"
import { Link } from "react-router-dom";
function Home(props) {
  const navigate = useNavigate();

  return (
    <>
      <div id="container">
        <nav className="menu">
          <input
            type="checkbox"
            href="#"
            className="menu-open"
            name="menu-open"
            id="menu-open"
          />
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="lines line-1"></span>
            <span className="lines line-2"></span>
            <span className="lines line-3"></span>
          </label>

          <Link className="menu-item blue" to="/users">
            {"  "}
            <i className="fa fa-anchor"></i>{" "}
          </Link>

          <Link className="menu-item green" to="/mytasks" title="my-tasks">
            {" "}
            <i className="fa-solid fa-list-check"></i>{" "}
          </Link>

          <Link className="menu-item red" to="/myvacation" title="my-vacations">
            {" "}
            <i className="fa-solid fa-list-check"></i>{" "}
          </Link>
          {/* <a href="#" className="menu-item red">
            {" "}
            <i className="fa fa-heart"></i>{" "}
          </a> */}
          <a href="#" className="menu-item purple">
            {" "}
            <i className="fa fa-microphone"></i>{" "}
          </a>
          <a href="#" className="menu-item orange">
            {" "}
            <i className="fa fa-star"></i>{" "}
          </a>
          <a href="#" className="menu-item lightblue">
            {" "}
            <i className="fa fa-diamond"></i>{" "}
          </a>
        </nav>
      </div>
    </>
  );
}

export default Home;

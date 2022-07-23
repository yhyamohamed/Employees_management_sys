import {useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../App";
import { Link } from "react-router-dom";
import "../about.css"
function About() {
//   const navigate = useNavigate();

//   const {user} = useContext(UserContext);


  

  return (
    <>
      <div className="row">
        <div className="card align-center">
            <p>
            Employee Management system is an application that enables users to create and store Employee Records.<br></br>
            The application also provide the higher/middle management  to manage the foundation through each  employee device.<br></br>
            This application is helpful to department of the organization which maintains data of employees related to an organization .<br></br>
            <b>Higher management (CEO-CTO)</b> can add or remove employees (middle management or employee), approve requests and approve bonus/deduction.<br></br>
            <b>Middle management (department manager-project manager)</b> can assign tasks, approve vacations requests, send notification and recommend bonuses or salary deduction.<br></br>
            <b>An employee</b> can submit vacation request, mark a task(done-pending-need help), submit a complaint, send a
            notification, can see his salary sheet and can submit request for help.
            </p>

        </div>
      </div>
    </>
  );
}

export default About;

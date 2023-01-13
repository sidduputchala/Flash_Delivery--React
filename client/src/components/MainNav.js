import React from "react"
import {Link} from "react-router-dom"
import "./css/MainNav.css"

function MainNav(){

    return(
 <div className="mainnav">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="navbar"  >
      <div className="container-fluid">
            <a class="navbar-brand" href="#">Flash <span style={{color:"lightseagreen"}}>Delivery </span></a>
        
          <button className="navbar-toggler "type="button"data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul style={{"margin-right":"70px"}} className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" to="/" >
                  <u>Home</u>
                </Link>
              </li>
             <li className="nav-item">  
              <Link className="nav-link active" to="/login" >
                  <u>Login</u>
               </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/signup" >
                  <u>Signup</u>
                </Link>
              </li>
          </ul>
         </div>
        </div>
      </nav>
 </div>
    );
}
export default MainNav
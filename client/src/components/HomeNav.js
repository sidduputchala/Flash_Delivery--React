import {React,useContext} from 'react'
import { store } from "../App.js"
import {Link} from 'react-router-dom'
import axios from "axios"
import './css/HomeNav.css'

const HomeNav = (props) => {
  const [cartItems]  = useContext(store);
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">Flash <span style={{color:"lightseagreen"}}>Delivery </span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{"font-size":"18px","margin-right":"30px"}}>
      <ul style={{"margin-right":"35px"}} className="navbar-nav ms-auto mb-2 mb-lg-0">
        
      <li className="nav-item">
        <input  style={{height:"29px",marginTop:"7px"}} class="form-control me-2 " type="search" placeholder="search" aria-label="search" onChange={(e)=>
        {  
          axios.get(`http://localhost:3001/others?dsc_like=${e.target.value}`).then((res)=>
          {
            
            props.parentcall(res.data,e.target.value)
          })
        }}></input>

        </li>
        <li className="nav-item">
         <Link to="/home"> <a className="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu">
            <Link to="/order"><li><a className="dropdown-item" href="#"> <i  style={{marginRight:"15px",fontSize:"18px"}}  class="fas fa-shopping-bag"></i>Orders</a></li></Link>              
            <li><hr class="dropdown-divider"/></li>
          <Link to="/"><li><a class="dropdown-item" href="#"><i style={{marginRight:"15px",fontSize:"18px"}} class="fa fa-sign-out" aria-hidden="true"></i>Logout</a></li></Link>
          </ul>
        </li>
             
        <li className="nav-item">
        <Link to="/cart"><a className="nav-link active position-relative" > <i  style={{marginRight:"5px",fontSize:"23px"}} class="fa-solid fa-cart-shopping"></i> <span  style={{color:"white" ,fontSize:"15px",backgroundColor:"lightseagreen"}} class=" top-0 start-100 translate-middle badge rounded-circle">
 {cartItems.length}

  </span>
 </a></Link>                 
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default HomeNav
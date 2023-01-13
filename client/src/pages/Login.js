import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import MainNav from "../components/MainNav";
import { store} from "../App.js"
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [pmsg, setPmsg] = useState("");
  const [imsg, setImsg] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "") {
      e.preventDefault();
      setMsg("Enter your email!"); 
    } else if (!email.includes("@")) {
      e.preventDefault();
      setMsg("Enter a valid email!");
    } else if (password === "") {
      e.preventDefault();
      setPmsg("Enter your password!");
    } 
    else {
            navigate('/home')
    }
  };

  return (
    <>
    <MainNav/>
    <img className = " bg-img" src="./main.jpg"/>
        <form className="form_l" onSubmit={(e)=>{
            submitHandler(e)
        }}>
          <h3>Login Here</h3>
          <p style={{ color: "rgb(102, 7, 26)" }}>{pmsg}</p>
          <div className="input__box">
            <label className="label_l" for="username"><p className="names">Username</p></label>
            <input className="input_l"
              type="text"
              id="username"
              name="email"
              placeholder="Email"
              required="required"
              onChange={(e) => {
                setMsg("")
                setImsg("")
                setEmail(e.target.value);
              }}
            />
              <p style={{ color:"rgb(102, 7, 26)" }}>{msg}</p>
          </div>
          <div className="input__box">
            <label for="password"><p className="names">Password</p></label>
            <input className="input_l"
              type={passwordType}
              id="password"
              name="password"
              required="required"
              placeholder="Password"
              onChange={(e) => {
                setPmsg("")
                setImsg("")
                setPassword(e.target.value);
              }}
            />
             <p style={{ color: "rgb(102, 7, 26)" }}>{pmsg}</p>
          </div>
    
          <div className="input__box">
            <button type="submit" className="button_l">
              Log in
            </button>
          </div>
          <p class="forget">Don't have an account? <Link to="/signup">Sign up</Link> </p>
            </form>
</>
  );
}
export default Login;
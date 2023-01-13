import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import MainNav from "../components/MainNav";
import "./css/Signup.css";
import Axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstName: "",lastName: "",email: "", phone: "",address: "",city: "",state: "",pincode: "",password: "", confirmPassword: "",});
  const [firstNameMsg, setFirstNameMsg] = useState("");
  const [lastNameMsg, setLastNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [addressMsg, setAddressMsg] = useState("");
  const [cityMsg, setCityMsg] = useState("");
  const [stateMsg, setStateMsg] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState("");
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const { firstName,lastName,email,phone,address,city,state,pincode,password,   confirmPassword,} = user;
    if (firstName === "") {
      setFirstNameMsg("First name is required!");
    } else if (lastName === "") {
      setLastNameMsg("Last name is required!");
    } else if (email === "" || !email.includes("@")) {
      setEmailMsg("Enter valid email!");
    } else if (phone === "" || phone.length !== 10) {
      setPhoneMsg("Enter valid phone number!");
    } else if (state === "") {
      setStateMsg("State is required!");
    } else if (pincode === "" || pincode.length !== 6) {
      setPincodeMsg("Enter valid pincode!");
    } else if (password === "" || password.length < 5) {
      setPasswordMsg("Pwd should be atleast 5 chars long!");
    } else if (confirmPassword === "" || confirmPassword !== password) {
      setConfirmPasswordMsg("Password doesn't match!");
    } else {
      Axios.get(`http://localhost:3001/users?email=${email}`).then((res) => {
        if (res.data.length === 0) {
          var id = Math.floor(Math.random() * 10000000000000);

          Axios.post(`http://localhost:3001/users`, { id,firstName,lastName,email,phone,address,city,state,pincode,password,confirmPassword,}).then((res) => {
            if (res.data) {
              alert("Registration successful!");
              navigate("/login");
            } else {
              alert("Something went wrong");
            }
          });
        } else {
          setEmailMsg("Email already exists!");
        }
      });
    }
  };
  return (
    <>
      <MainNav />
      <img className="bg-img" src="./main.jpg" />
      <form className="form_s" onSubmit={submitHandler}>
        <h3 style={{marginTop:"-29px"}}>Register Here</h3>
        <div className="flex-container">
          <div class="input__box inline_1 flex-child">
            <p className="name">First Name</p>
            <input
              className="input_s"
              required="required"
              type="text"
              name="firstName"
              aria-describedby="emailHelp"
              placeholder="john etc.."
              onChange={(e) => {
                setFirstNameMsg("");
                handleInputs(e);
              }}
            />
            <p style={{ color: "rgb(102, 7, 26)" }}>{firstNameMsg}</p>
          </div>
          <div class="input__box inline_1 flex-child">
            <p className="name"> Last Name</p>
            <input
              type="text"
              name="lastName"
              className="input_s"
              required="required"
              aria-describedby="emailHelp"
              placeholder="doe"
              onChange={(e) => {
                setLastNameMsg("");
                handleInputs(e);
              }}
            />
            <p style={{ color: "rgb(102, 7, 26)" }}>{lastNameMsg}</p>
          </div>
        </div>
        <div className="flex-container">
          <div class="input__box inline_1 flex-child">
            <p className="name">Email</p>
            <input
              type="email"
              name="email"
              required="required"
              className="input_s"
              aria-describedby="emailHelp"
              placeholder="john@gmail.com"
              onChange={(e) => {
                setEmailMsg("");
                handleInputs(e);
              }}
            />
            <p style={{ color: "rgb(102, 7, 26)" }}>{emailMsg}</p>
          </div>
          <div class="input__box inline_1 flex-child magenta">
            <p className="name"> Phone</p>
            <input
              type="text"
              required="required"
              name="phone"
              className="input_s"
              aria-describedby="emailHelp"
              placeholder="9014690041"
              onChange={(e) => {
                setPhoneMsg("");
                handleInputs(e);
              }}
            />
            <p style={{ color: "rgb(102, 7, 26)" }}>{phoneMsg}</p>
          </div>
        </div>
        <div className="flex-container">
          <div class="input__box inline_1 flex-child">
            <p className="name">Address</p>
            <input
              type="text"
              name="address"
              required="required"
              className="input_s"

              aria-describedby="emailHelp"
              placeholder="old street"
              onChange={(e) => {
                setAddressMsg("");
                handleInputs(e);
              }}
            />
            <p style={{ color: "rgb(102, 7, 26)" }}>{addressMsg}</p>
          </div>
          <div class="input__box inline_1 flex-child magenta">
            <p className="name">City</p>
            <input
              type="text"
              name="city"
              required="required"
              className="input_s"
              aria-describedby="emailHelp"
              placeholder="Chennai"
              onChange={(e) => {
                setCityMsg("");
                handleInputs(e);
              }}
            />
            <p style={{ color: "rgb(102, 7, 26)" }}>{cityMsg}</p>
          </div>
        </div>
        <div className="flex-container">
          <div class="input__box inline_1 flex-child">
            <p className="name">State</p>
            <input
              type="text"
              required="required"
              name="state"
              className="input_s"
              aria-describedby="emailHelp"
              placeholder="State"
              onChange={(e) => {
                setStateMsg("");
                handleInputs(e);
              }}
            />
            <p style={{ color: "rgb(102, 7, 26)" }}>{stateMsg}</p>
          </div>
          <div class="input__box inline_1 flex-child">
            <p className="name">  Pincode</p>
            <input
              type="number"
              name="pincode"
              className="input_s"
              required="required"
              aria-describedby="emailHelp"
              placeholder="500001"
              onChange={(e) => {
                setPincodeMsg("");
                handleInputs(e);
              }}
            />
            <p style={{ color: "rgb(102, 7, 26)" }}>{pincodeMsg}</p>
          </div>
        </div>
        <div className="flex-container">
          <div class="input__box inline_1 flex-child">
            <p className="name">               Password</p>
            <input
              type="password"
              name="password"
              required="required"
              className="input_s"
              aria-describedby="emailHelp"
              placeholder="****"
              onChange={(e) => {
                setPasswordMsg("");
                handleInputs(e);
              }}
            />
            <p style={{ color: "rgb(102, 7, 26)" }}>{passwordMsg}</p>
          </div>
          <div class="input__box inline_1 flex-child">
            <p className="name"> Confirm Password</p>
            <input
              type="password"
              required="required"
              name="confirmPassword"
              className="input_s"
              aria-describedby="emailHelp"
              placeholder="****"
              onChange={(e) => {
                setConfirmPasswordMsg("");
                handleInputs(e);
              }}
            />
            <p style={{ color: "rgb(102, 7, 26)" }}>{confirmPasswordMsg}</p>
          </div>
        </div>
        <button class="button_s">
          Register
        </button>
      </form>
    </>
  );
}

export default Signup;
import React, { useState, useContext, useEffect } from "react";
import HomeNav from "../components/HomeNav.js";
import Footer from "../components/Footer.js";
import { store } from "../App.js";
import "./css/Cart.css";
import {useNavigate} from 'react-router-dom'

function Cart() {

  const [sum,setSum]=useState(0);
  const [nameMsg, setNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [stateMsg, setStateMsg] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");
  const [address1Msg, setAddress1Msg] = useState("");
  
  const [cartitems,setCartitems,userdetails,setUserdetails,orderitems,setOrderitems,] = useContext(store);


  const [orderItems,setOrderItems] =useState({add_name:"",add_email:"",add_phone:"",add_address1:"",add_address2:"",add_state:"",add_pincode:"",add_date:"",add_orderItems:[],add_total:0});
  const navigate = useNavigate();

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOrderItems({ ...orderItems, [name]: value });
    var date=new Date();  
    var day=date.getDate();  
    var month=date.getMonth()+1;  
    var year=date.getFullYear();  
    var today=day+"-"+month+"-"+year;   
    var h=date.getHours();  
    var m=date.getMinutes();  
    var time=h+":"+m;
    var dateTime=today+" "+time;
    setOrderItems(previtem=>{
      return {...previtem,add_date:dateTime,add_orderItems:cartitems}
      })
  };

  const submitHandlerCart=(e)=>{
    e.preventDefault();
  
    if(cartitems.length <= 0){
      alert("Please add items to cart")
    }
    else if(orderItems.add_name===""){
      setNameMsg("Enter your name!");
    }
    else if(orderItems.add_email==="" || !orderItems.add_email.includes("@")){
      setEmailMsg("Enter valid email!");
    }
    else if(orderItems.add_phone==="" || !orderItems.add_phone.match(/^[0-9]{10}$/)){
      setPhoneMsg("Enter valid phone number!");
    }
    else if(orderItems.add_address1===""){
      setAddress1Msg("Enter your address!");
    }
    else if(orderItems.add_state===""){
      setStateMsg("Enter your state!");
    }
    else if(orderItems.add_pincode==="" || !orderItems.add_pincode.match(/^[0-9]{6}$/)){
      setPincodeMsg("Enter valid pincode!");
    }
    else{
      orderItems.add_orderItems.map((cartItem)=>{
        setOrderitems((prevlist)=>{
          return(
          [...prevlist,{add_name:orderItems.add_name,add_email:orderItems.add_email,add_phone:orderItems.add_phone,add_address1:orderItems.add_address1,add_address2:orderItems.add_address2,add_state:orderItems.add_state,add_pincode:orderItems.add_pincode,add_date:orderItems.add_date,add_orderItems:cartItem,add_total:orderItems.add_total,...cartItem}]
          )
        });
      })
      setCartitems([]);
      alert("Ordered Successfully");
      navigate("/order")
    }
  }

  useEffect(()=>{
    setSum(0)
      cartitems.forEach((item)=>{
      setSum(prevsum=>{
        return prevsum +item.price;})
        })
      setOrderItems(previtem=>{
        return {...previtem,add_total:sum}  })
    },[cartitems])

  return (
    <div>
      <HomeNav />
    <p style={{marginTop:"90px"}}></p>
      <div className="cart-header" style={{ display: "flex",flexDirection: "row",justifyContent: "space-between",width:"600px"}}>
        <div>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px"}}>
          <i
            style={{ marginRight: "20px"}}
            class="fa-solid fa-cart-shopping"
          ></i>
          Cart Items
        </h1>
        </div>
      </div>
      <hr style={{ width: "900px", height: "3px",color:"rgb(0, 0, 0)" }}></hr>


    {cartitems.length === 0 ? (
        <div className="empty-cart" style={{display:"flex",justifyContent:"center"}}>
          <h1 style={{color:"grey"}}>Cart is empty</h1>
        </div>
        ) : (

    <div className="container" >
       <div className="row" >
        {cartitems.map((item,key)=>{
         return(
        <div className="card col-md-3 col-sm-6">
           <img className = "card-img" src={item.img} style={{width:"300px",height:"170px"}} alt="Appliance" />
            <div className="card-body">
             <h5 class="card-title">{item.name}</h5>
                 <p><i className="fa fa-inr"></i>{item.price}</p>
                 <p class="card-text">This {item.name} is a special one made of very delicious ingredients </p>
                 
              <button className="btn btn-dark" style={{float:"right",color:"lightseagreen",fontWeight:"100px"}}
                onClick={() => {
                  setCartitems(cartitems.filter((i,id) => id !== key));
                  setSum(0) }}>
                <i style={{ marginRight: "5px" }}class="fa-solid fa-cart-shopping"></i>Remove
              </button>
  
           </div>
        </div>
         );
         })}        

     </div>
   </div>
     )}
 {cartitems.length === 0 ?(<div className ="empty-cart" style={{display:"flex",justifyContent:"center"}}><i style={{fontSize:"100px", color:"lightseagreen"}} className="far fa-frown-o"></i><div></div> </div>):(
    <div>   
      <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i
            style={{ marginRight: "20px" }}
            class="fas fa-shipping-fast"
          ></i>
          Enter Shipping Address
        </h1>
      </div>
      <hr style={{ width: "900px", height: "2px" }}></hr>   
      <div className="cart-form">
        <div> 
      <form onSubmit={submitHandlerCart}>
            <div className="container">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Name</b>
                  </label>
                  <input
                    type="text"
                    name="add_name"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="john"
                    onChange={(e)=>{
                      setNameMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{ nameMsg }</p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    name="add_email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="john@gmail.com"
                    onChange={(e)=>{
                      setEmailMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{emailMsg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Phone</b>
                  </label>
                  <input
                    type="text"
                    name="add_phone"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="9014690041"
                    onChange={(e)=>{
                      setPhoneMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{phoneMsg}</p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Address Line 1</b>
                  </label>
                  <input
                    type="text"
                    style={{height:"70px"}}
                    name="add_address1"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                    onChange={(e)=>{
                      setAddress1Msg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{address1Msg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Address Line 2</b>
                  </label>
                  <input
                    type="text"
                    style={{height:"70px"}}
                    name="add_address2"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                    onChange={(e)=>{
                      setPhoneMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{}</p>
                </div>
              </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ "margin-right": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>State</b>
                  </label>
                  <input
                    type="text"
                    name="add_state"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Andhra Pradesh"
                    onChange={(e)=>{
                      setStateMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{stateMsg}</p>
                </div>
                <div style={{ "margin-left": "10px" }} class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    <b>Pincode</b>
                  </label>
                  <input
                    type="text"
                    name="add_pincode"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="500001"
                    onChange={(e)=>{
                      setPincodeMsg("");
                      handleInputs(e)
                    }}
                  />
                  <p style={{ color: "red" }}>{pincodeMsg}</p>
                </div>
              </div>
              <hr style={{ width: "400px", height: "2px" }}></hr>
              <div>
              <label for="exampleInputEmail1" class="form-label">
                    <h3>Total Bill</h3>
                </label>
                <p style={{ fontSize: "30px" }}>₹ {sum}</p>
              </div>
                <button type="submit" class="btn btn-success">
                Confirm order
              </button>
            </div>
          </form>
          </div>
      </div>
      <Footer/>
    </div>
    )} 
    
    </div>
  );
} 

export default Cart;
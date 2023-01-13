import React,{ useState, useContext,useEffect} from 'react'
import HomeNav from '../components/HomeNav.js'
import Footer from '../components/Footer.js'
import {store} from '../App.js'
import './css/Order.css'
import {Link,useNavigate} from 'react-router-dom'


function Orders() {
    
    const [cartitems,setCartitems,userdetails,setUserdetails,orderitems,setOrderitems,] = useContext(store);
   const [total,settotal] = useState(0)
    const navigate = useNavigate();
    useEffect(()=>{
      if(userdetails.length===0){
        navigate("/login")
      }
      settotal(0)
 orderitems.map((item,key)=>{
    settotal(prevsum =>{return prevsum + item.price;})
 })
       
    },[userdetails])  

  return (
    <div>
       <HomeNav/>
       <div style={{marginTop: "80px"}}></div>
       <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i style={{ marginRight: "20px" }}  class="fas fa-shopping-bag"></i>Order Summary</h1>
      </div>
      <hr style={{ width: "900px", height: "2px" }}></hr>
      <div >
            {orderitems.length > 0 ? (
                <div className="container">
                <div className="row" >
                  {console.log("insideeee",orderitems[0])}
              {orderitems.map((item,key)=>{
              
                return(
                  <div className="card col-md-3 col-sm-6">
                  <img className = "card-img" src={item.img} style={{width:"300px",height:"170px"}} alt="Appliance" />
                   <div className="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p><i className="fa fa-inr"></i>{item.price}</p>
                
                  </div>
               </div>
                )
              })}
                     <div style={{display: "flex", flexDirection: "column","justify-content":"center",alignItems: "left"}}>
                     <h3 style={{marginTop:"20px",color:""}} >Bill summary: </h3>
                            {orderitems.map((item,key)=>{
                            
                              return(
                                <div>
                                  <h5 style={{color:"green"}}>{item.name} : <i style={{color:"seagreen"}} className='fa fa-inr'></i>{item.price}</h5>
                                
                                </div>
                              )
                            })}
                        <h4 style={{color:"seagreen"}}>Total Amount :<i className='fa fa-inr'></i>{total}</h4>
                        <h3 style={{marginTop:"20px","margin-bottom":"20px"}} >Shipping Details:</h3>
                        <h5>Name: {orderitems[0].add_name}</h5>
                        <h5>Email: {orderitems[0].add_email}</h5>
                        <h5>Contact number: {orderitems[0].add_phone}</h5>   
                        <h5>Ordered Time : {orderitems[0].add_date}</h5>          
                        <h4 style={{marginTop:"10px"}}>Address:</h4>
                        <h5>{orderitems[0].add_address1}</h5>
                        <h5>{orderitems[0].add_address2}</h5>
                        <h5>State :{orderitems[0].add_state}</h5>
                        <h5>Pincode : {orderitems[0].add_pincode}</h5>    
                     </div>
              </div>
              </div>
    
    ) : (
      <h1 style={{display:"flex",justifyContent:"center",marginTop: "100px",color:"lightseagreen"}}>No Orders Placed <i className="far fa-meh-blank"></i></h1>
      )}
        </div>
      <Footer/>
    </div>
  )
}

export default Orders

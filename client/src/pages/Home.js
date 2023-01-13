import React, { useContext, useEffect, useState } from "react"
import HomeNav from "../components/HomeNav"
import Footer from "../components/Footer"
import "./css/Home.css"
import offer1 from "./images/offer-1.jpg"
import offer2 from "./images/offer-2.png"
import offer3 from "./images/offer-3.jpg"
import offer4 from "./images/offer-4.jpg"
import {store} from "../App"
import axios from "axios"

function Home(){
  const [ cartitems,setCartitems] = useContext(store)
  const [specialItems,setSpecialItems] = useState([])
  const [empty,setempty] = useState("")
  const [food,setFood] = useState([])

  const call=(data,e)=>{
     setFood(data)
     if(e==="")
     setSpecialItems(empty)
     else
     setSpecialItems([])

  }
  useEffect(()=>{
    
    axios.get("http://localhost:3001/specials").then((res)=>
    {
      setSpecialItems(res.data)
      setempty(res.data)
    })
    
    axios.get("http://localhost:3001/others").then((res)=>
    {
      setFood(res.data)
    })
    
  },[]);
  return(
  <div>     
     <HomeNav parentcall={call}/>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active"  data-bs-interval="2000">
      <img src={offer4} style ={{height:"500px"}}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={offer2} style ={{height:"500px"}}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={offer1} style ={{height:"500px"}}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item"  data-bs-interval="2000">
      <img src={offer3} style ={{height:"500px"}}class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      {specialItems.length !==0 ? (<div><h1 style={{marginTop:"75px",fontFamily:"cursive",marginBottom:"15px",textAlign:"center"}}>Today's Special</h1></div>) :(<div></div>)  }
      <div className="container" style={{display:"flex",justifyContent:"center"}}>
      <div className="row" >
   {specialItems.map((item,key)=>{
     return(
       <div className="card col-md-3 col-sm-6">
          <img className = "card-img" src={item.img} style={{width:"300px",height:"170px"}} alt="Appliance" />
         <div className="card-body">
         <h5 class="card-title">{item.name}</h5>
          <p><i className="fa fa-inr"></i>{item.price}</p>
      <p class="card-text">This {item.name} is a special one made of very delicious ingredients </p>
      <p><i class="fa fa-star" style={{marginTop:"1px",marginRight:"5px",color:"orange"}}  aria-hidden="true"></i>{item.rate}
       <button onClick={()=>{
        alert("added to cart")
          setCartitems([...cartitems,{name:item.name,img:item.img,price:item.price,rate:item.rate}])
      }}   
      className="btn" style={{float:"right",color:"lightseagreen"}}> <i  style={{ marginRight: "8px" }}class="fa-solid fa-cart-shopping"></i>
           Add
      </button></p>        
         </div>
      </div>
   )
  })}        
    
      </div>
     </div>
     <hr style={{ width: "900px", height: "3px",color:"rgb(0, 0, 0)" }}></hr>
     <h3 style={{marginTop:"75px",fontFamily:"cursive",marginBottom:"30px", textAlign:"center" ,color:"dark" }}>  ALL RESTAURANTS</h3>
     <div className="container" style={{display:"flex",justifyContent:"center"}}>
      <div className="row" >
   {food.map((item,key)=>{
     return(
       <div className="card col-md-3 col-sm-6">
          <img className = "card-img" src={item.img} style={{width:"300px",height:"170px"}} alt="Appliance" />
         <div className="card-body">
         <h5 class="card-title">{item.name}</h5>
          <p><i className="fa fa-inr"></i>{item.price}</p>
      <p class="card-text">This {item.name} is a special one made of very delicious ingredients </p>
      <p><i class="fa fa-star" style={{marginTop:"1px",marginRight:"5px",color:"orange"}}  aria-hidden="true"></i>{item.rate}
       <button onClick={()=>{
        alert("added tp cart")
          setCartitems([...cartitems,{name:item.name,img:item.img,price:item.price,rate:item.rate}])
         
      }}   
      className="btn" style={{float:"right",color:"lightseagreen"}}> <i  style={{ marginRight: "8px" }}class="fa-solid fa-cart-shopping"></i>
           Add
      </button></p>        
         </div>
      </div>
   )
  })}        
      </div>
     </div>
  <Footer/>
</div>
    );
}
export default Home
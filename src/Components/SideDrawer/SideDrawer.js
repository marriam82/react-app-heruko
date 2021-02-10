import React from "react"
import {Navbar,Row,Col,Nav,Container,Card,CardGroup,Badge,Toast,Button,Modal,Alert,Carousel,Accordion} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import logo from "../logo/logo.svg";
import explore from "../logo/explore.svg"
import setting from "../logo/setting.svg";
import message from "../logo/messages.svg";
import order from "../logo/orders.svg";
import fav from "../logo/favourites.svg";

const sideDrawer = props => (
<div className="side-drawer">
<Navbar.Brand href="/" className=" pt-2 " 
        style={{width:"100%"}}>
          <img src={logo}   style={{height:"10vh"}} />
          </Navbar.Brand>      
  <Nav defaultActiveKey="/" className="flex-column" >
  <Nav.Link className="mt-3 p-3 " href="/" 
  style={{background:"#E3424B",borderRadius:"10px",width:"80%",
  color:"white",fontWeight:"bold",}}>
    <i class="fas fa-home "
   style={{fontSize:"19px"}}></i>&nbsp; &nbsp; 
   <span >Home</span></Nav.Link>


  <Link to="/exploring" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font" href="/exploring" style={{color:"black",}}>  
  <img style={{height:"3vh",marginLeft:"1px"}} 
  src={explore}/>&nbsp; &nbsp; &nbsp;<span >Explore</span>
  </Nav.Link>
  </Link>
  <Link to="/favorite" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font"  href="/favorite" style={{color:"black"}}>
  <img style={{height:"3.2vh",marginLeft:"1px"}} src={fav}/>&nbsp; 
  &nbsp; &nbsp; <span >
     Favourite</span></Nav.Link></Link>
  <Link to="/orders" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 "  href="/orders" style={{color:"black"}}>
  <img style={{height:"3vh",}} src={order}/>&nbsp; &nbsp; &nbsp;<span 
  >Orders</span></Nav.Link></Link>

  <Link to="/messages" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 " href="/messages" 
  style={{color:"black"}}>
  <img style={{height:"2.5vh"}} src={message} className="m-b"/>
  &nbsp; &nbsp; &nbsp;<span >Messages</span> 
  &nbsp; &nbsp; &nbsp; &nbsp;<Badge className="badge "
   style={{background:"#E3424B",
   borderRadius:'100%',color:"white"}}>
     2</Badge></Nav.Link>
     </Link>
  <Link to="/settings" style={{textDecoration:"none"}}>
     
  <Nav.Link className="mt-2 " href="#settings" style={{color:"black"}}><img style={{height:"3vh"}} src={setting}/>&nbsp; &nbsp; &nbsp;<span >Settings</span></Nav.Link>
</Link>
</Nav>
<Toast style={{marginTop:"40px",height:"200px",
background:"#F7F7F7",width:"90%",
borderRadius:"16px",}}  >
  <Toast.Header style={{color:"black",border:"none",background:"#F7F7F7",
  borderRadius:"16px"}}>
    <img src="holder.js/20x20?text=%20" className="rounded mr-2 ml-auto" alt="" style={{color:"black"}}/>
    </Toast.Header>
    <div style={{marginLeft:"26%"}}>
    <Button className="ml-4 fire" style={{background:"#FFDD73",color:"#E3424B",width:"55px",
    fontSize:"30px",border:"none",marginTop:"20px",borderRadius:"12px"}}><i class="fas fa-fire"></i></Button>
    </div>
  <h1 className="mt-4" style={{textAlign:"center",fontWeight:"bold",fontSize:"15px"}}>Free delivery on <br></br>
  all orders over <span style={{color:"orange"}}>$25</span></h1>
  <p style={{color:"grey",textAlign:"center"}}>it is a limited offer that<br></br>will expire soon</p>
<Button className="mt-3" style={{background:"#223142",border:"none",marginLeft:"27px",borderRadius:"8px"}}>Order Now  &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></Button>
<Button style={{background:"transparent",border:"none",color:"transparent"}}>i</Button>
<Button style={{background:"transparent",border:"none",color:"transparent"}}>i</Button>

</Toast>
</div>
);


export default sideDrawer;
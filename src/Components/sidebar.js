import React, { Component,useState } from 'react';
import img1  from "../Components/demo-more-1.jpg"
import img2 from "../Components/Avada-2-Master-Final-Header.jpg";
import img3 from "../Components/fss-demo-church.jpg"
import img4 from "../Components/fss-demo-creative.jpg"
import img5 from "../Components/fss-demo-construction.jpg"
import logo from "../logo/logo.svg";
import explore from "../logo/explore.svg"
import order from "../logo/orders.svg";
import fav from "../logo/favourites.svg";
import home from"../logo/home.svg";
import setting from "../logo/setting.svg";
import message from "../logo/messages.svg";
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import all from "../category/all.svg";
import botique from "../category/boutique.svg";
import elec from "../category/electronics.svg";
import restaurants from "../category/restaurants.svg";
import sup from "../category/supermarket.svg";
import taxi from "../category/delivery taxi.svg";
import Footer from "../Components/footer"
import {Link} from 'react-router-dom';
import {Navbar,Row,Col,Nav,Container,Card,CardGroup,Badge,Toast,Button,Form,FormControl,Carousel} from 'react-bootstrap'
import "../App.css";
export default class sidebar extends Component {
  render() {
    return (

        <>
  
            <Container  fluid>
  <Row className="grid">
    <Col sm={2} >
        <Navbar.Brand href="#home" className=" ml-2 pt-2" style={{width:"100%"}}>
          <img src={logo} id="imgg" style={{height:"12vh",width:"50%"}} />
          </Navbar.Brand>      
        <Nav defaultActiveKey="/home" className="flex-column" >
  <Nav.Link className="mt-3 p-3 color " href="#home" style={{background:"#E3424B",borderRadius:"10px",color:"white",fontWeight:"bold",}}><i class="fas fa-home" style={{fontSize:"19px"}}></i>&nbsp; &nbsp; <span className="home">Home</span></Nav.Link>
  <Link to="/explore"  style={{outline:"none",listStyle:"none",textDecoration:"none"}}><Nav.Link className="mt-2 font" href="#explore" style={{color:"black",}}><img style={{height:"3vh"}} src={explore}/>&nbsp; &nbsp; &nbsp;<span className="home">Explore</span></Nav.Link></Link>
  <Nav.Link className="mt-2 font"  href="#favorite" style={{color:"black"}}><img style={{height:"3vh"}} src={fav}/>&nbsp; &nbsp; &nbsp;<span className="home">Favorite</span></Nav.Link>
  <Nav.Link className="mt-2 font"  href="#orders" style={{color:"black"}}><img style={{height:"3vh"}} src={order}/>&nbsp; &nbsp; &nbsp;<span className="home">Orders</span></Nav.Link>
  <Nav.Link className="mt-2 font" href="#messages" style={{color:"black"}}><img style={{height:"2.5vh"}} src={message}/>&nbsp; &nbsp; &nbsp;<span className="home">Messages</span> &nbsp; &nbsp; &nbsp; &nbsp;<Badge id="no" className="badge" style={{background:"#E3424B",borderRadius:'100%',color:"white"}}>2</Badge></Nav.Link>
  <Nav.Link className="mt-2 set font" href="#settings" style={{color:"black"}}><img style={{height:"3vh"}} src={setting}/>&nbsp; &nbsp; &nbsp;<span className="home">Settings</span></Nav.Link>

</Nav>
<Toast style={{marginTop:"40px",background:"#F6F6F6"}} id="no" className="tost">
  <Toast.Header >
    <img src="holder.js/20x20?text=%20" className="rounded mr-2 ml-auto" alt="" />
    </Toast.Header>
    <div className="ml-4">
    <div className="ml-4" >
    <Button className="ml-4 fire" style={{background:"#FFDD73",color:"#E3424B",fontSize:"30px",border:"none",marginTop:"20px"}}><i class="fas fa-fire"></i></Button>
    </div>
    </div>
  <h1 className="mt-4" style={{textAlign:"center",fontWeight:"bold",fontSize:"15px"}}>Free delivery on <br></br>
  all orders over <span style={{color:"orange"}}>$25</span></h1>
  <p style={{color:"grey",textAlign:"center"}}>it is a limited offer that<br></br>will expire soon</p>
<Button className="mt-3" style={{background:"#223142",border:"none",marginLeft:"25px",borderRadius:"8px"}}>Order Now  &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></Button>
<Button style={{background:"transparent",border:"none",color:"transparent"}}>i</Button>
</Toast>
    </Col>
    {/* ---------------------- */}
    <Col sm={10} className="up">
   <Navbar className="mt-1 ">
   <Nav className="mr-4">
   <Nav.Link style={{color:"black",fontWeight:"normal",fontSize:"14px",marginRight:"-25px"}} id="no" className="no" ><img src={delivery}style={{height:"3vh"}} />&nbsp; &nbsp; Sen Francisain California &nbsp;<i class="fas fa-angle-down"></i> </Nav.Link>
      <Nav.Link className="ml-4 pl-3"style={{color:"black",fontWeight:"normal",fontSize:"14px"}} id="no"><img src={deal}style={{height:"3vh"}} />&nbsp; &nbsp; Best deals &nbsp; <i class="fas fa-angle-down"></i></Nav.Link>
      <button className="mt-2 ml-4 p-0" style={{background:"#E3424B",border:"none",color:"white",fontSize:"14px",height:"4vh",borderRadius:"7px"}} id="no"> &nbsp; EN  &nbsp; <i class="fas fa-angle-down"></i> &nbsp;</button>
    </Nav>
    <input type="text" placeholder="Search for anything... " 
    
    style={{width:"46%",borderRadius:"6px",fontSize:"14px",background:"#F6F6F6",border:"none",outline:"none",
    paddingLeft:"10px",padding:"13px",
  boxSizing:"border-box"}}/>
<div id="fle" >
  <Button className="ml-3"  style={{background:"#E3424B",paddingRight:"14px",textAlign:"center",border:"none",borderRadius:"7px",height:"7vh",paddingLeft:"14px"}}><i class="fas fa-user" style={{textAlign:"center"}}></i> </Button>
  <Button className="ml-2"  style={{background:"#E3424B",border:"none",borderRadius:"7px",height:"7vh",}}><i class="fas fa-shopping-cart"></i></Button>
</div>
</Navbar> 
{/* ============ */}
  <Carousel className="over mt-2" id="car"style={{height:"50vh",width:"101%"}}>
  <Carousel.Item >
    <img
      className="d-block  over " id="carr" 
      src={img1} style={{height:"50vh",width:"101%"}}
    //   alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block " id="carr" 
      src={img2} style={{height:"50vh",width:"101%"}}

    />

  </Carousel.Item>
</Carousel>
<h3 className="exp ml-4"style={{color:"black",fontWeight:"bold", marginTop:"25px"}}> Explore Catagories</h3>
<div id="all " style={{marginTop:"30px",width:"100%",marginLeft:"22px"}}>
  <Button id="alll"style={{background:"#E3424B",
  border:"none",
   borderRadius:"9px",color:"white",paddingRight:"100px",
   paddingBottom:"10px",height:"7vh",width:"15%"}}>
  <img src={all} style={{color:"white",height:"3vh"}}/>
  &nbsp;All</Button>

  <Button id="alll" style={{background:"#F6F6F6",
  color:"black",border:"none"
  ,marginLeft:"10px", paddingBottom:"10px",
  paddingRight:"70px",height:"7vh", 
  borderRadius:"9px",width:"15%"}}><img src={botique} 
  style={{height:"3vh"}}/>&nbsp;Botique</Button>

  <Button  id="alll" style={{background:"#F6F6F6",
  color:"black",border:"none",
  marginLeft:"10px",paddingRight:"50px",
  paddingBottom:"10px",
  height:"7vh", borderRadius:"9px",width:"15.1%"
  }}>
    <img src={elec} style={{height:"3vh"}}/>&nbsp;Electronics</Button>{' '}
  
  <Button  id="alll" style={{
    background:"#F6F6F6",
    color:"black",border:"none",
    marginLeft:"10px",paddingRight:"50px",
    paddingBottom:"10px",
    height:"7vh", borderRadius:"9px",width:"16%"
  }}><img src={restaurants} style={{height:"3vh"}}/>
  &nbsp;Restaurants</Button>{' '}
  <Link to='/supermarket' style={{textDecoration:"none"}}>
     <Button style={{background:"#F6F6F6",
  color:"black",border:"none",
  marginLeft:"10px",paddingRight:"40px",
  paddingBottom:"10px",
  height:"7vh", borderRadius:"9px",width:"16%"}}><img src={sup} style={{height:"3vh"}}/>&nbsp;Supermarket</Button> </Link>
  <Button style={{
    background:"#F6F6F6",
    color:"black",border:"none",
    marginLeft:"10px",paddingRight:"40px",
    paddingBottom:"10px",
    height:"7vh", borderRadius:"9px",width:"16%"
  }}><img src={taxi} style={{height:"3vh"}}/>
  &nbsp;Delivery Taxi</Button>{' '}
</div>
<CardGroup id="cards" style={{border:"none",marginTop:"35px",width:"100%",marginLeft:"22px",
  paddingBottom:"10px",

border:"none"}}>
  <Card style={{border:"none"}}>
    <Card.Img variant="top" id="card" src={img3} style={{height:"30vh",borderRadius:"10px",width:"96%"}}/>
  </Card>
  <Card style={{border:"none"}}>
    <Card.Img variant="top" id="card" src={img4} style={{border:"0",height:"30vh",borderRadius:"10px",width:"96%"}}/>
  </Card>
  <Card style={{border:"none"}}>
    <Card.Img variant="top" id="card" src={img5} style={{height:"30vh",borderRadius:"10px",width:"96%"}}/>
  </Card>
</CardGroup>
    </Col>
  </Row>
</Container>
<div className="mt-4">
<Footer/>
</div>
        </>
       )
      }
  }

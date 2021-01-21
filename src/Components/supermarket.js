import React from 'react'
import {Link} from 'react-router-dom'
import slider1 from "../xadok/Artboard 3-100dd.png"
import slider2 from "../xadok/Artboard 4-100dd.png"
import img6  from "../xadok/01.png"
import img3 from "../xadok/abstract-blur-supermarket-interior.jpg"
import fav from "../logo/favourites.svg";
import logo from "../logo/logo.svg";
import explore from "../logo/explore.svg"
import order from "../logo/orders.svg";
import setting from "../logo/setting.svg";
import message from "../logo/messages.svg";
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import all from "../black/all.svg";
import botique from "../category/boutique.svg";
import elec from "../category/electronics.svg";
import restaurants from "../category/restaurants.svg";
import sup from "../category/supermarket.svg";
import taxi from "../category/delivery taxi.svg";
import "../App.css"
import Footer from "../Components/footer"




import {Navbar,Row,Col,Nav,Container,Card,CardGroup,Badge,Toast,Button,Form,FormControl,Carousel} from 'react-bootstrap'
export default function Sidebar() {
 
    return (
        <>
            <Container fluid>
  <Row className="grid" >
    <Col sm={2} >
    <Navbar.Brand href="#home" className=" pt-2" style={{width:"100%"}}>
          <img src={logo} id="imgg" style={{height:"10vh"}} />
          </Navbar.Brand>      
        <Nav defaultActiveKey="/home" className="flex-column" >
  <Nav.Link className="mt-3 p-3 color" href="#home" style={{background:"#E3424B",borderRadius:"10px",color:"white",fontWeight:"bold",}}><i class="fas fa-home house" style={{fontSize:"19px"}}></i>&nbsp; &nbsp; <span className="home">Home</span></Nav.Link>
  <Nav.Link className="mt-2 font" href="#explore" style={{color:"black",}}>  
  <img style={{height:"3vh",marginLeft:"1px"}} src={explore}/>&nbsp; &nbsp; 
  &nbsp;<span className="home">Explore</span></Nav.Link>
  <Nav.Link className="mt-2 font"  href="#favorite" style={{color:"black"}}>
  <img style={{height:"3.2vh",marginLeft:"1px"}} src={fav}/>&nbsp; 
  &nbsp; &nbsp; <span className="home"> Favourite</span></Nav.Link>
  <Nav.Link className="mt-2 font"  href="#orders" style={{color:"black"}}>
  <img style={{height:"3vh",}} src={order}/>&nbsp; &nbsp; &nbsp;<span 
  className="home">Orders</span></Nav.Link>
  <Nav.Link className="mt-2 font" href="#messages" style={{color:"black"}}>
  <img style={{height:"2.5vh"}} src={message}/>&nbsp; &nbsp; &nbsp;<span className="home">Messages</span> &nbsp; &nbsp; &nbsp; &nbsp;<Badge id="no" className="badge" style={{background:"#E3424B",borderRadius:'100%',color:"white"}}>2</Badge></Nav.Link>
  <Nav.Link className="mt-2 set font" href="#settings" 
  style={{color:"black"}}><img style={{height:"3vh"}} src={setting}/>&nbsp; &nbsp; &nbsp;<span className="home">Settings</span></Nav.Link>

</Nav>
<Toast style={{marginTop:"40px",background:"#F7F7F7",width:"105%",
borderRadius:"16px",}} id="no" className="tost">
  <Toast.Header style={{color:"black",border:"none",background:"#F7F7F7",borderRadius:"16px"}}>
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
    </Col>
    <Col sm={10}  className="up" fluid>
       
    <Navbar className="mt-1 ">
   <Nav className="mr-4">
   <Nav.Link style={{color:"black",fontWeight:"normal",fontSize:"14px",marginRight:"-25px"}} id="no" className="no" ><img src={delivery}style={{height:"3vh"}} />&nbsp; &nbsp; Sen Francisain California &nbsp;<i class="fas fa-angle-down"></i> </Nav.Link>
      <Nav.Link className="ml-4 pl-3"style={{color:"black",fontWeight:"normal",fontSize:"14px"}} id="no"><img src={deal}style={{height:"3vh"}} />&nbsp; &nbsp; Best deals &nbsp; <i class="fas fa-angle-down"></i></Nav.Link>
      <button className="mt-2 ml-4 p-0" style={{background:"#E3424B",border:"none",
      color:"white",fontSize:"13px",height:"3.1vh",borderRadius:"7px"}} id="no"> &nbsp; EN  &nbsp; <i class="fas fa-angle-down"></i> &nbsp;</button>
    </Nav>
    <div className="input-container">
    <i class="fas fa-search icon"></i>
    <input type="text" className="input-field inpu" placeholder="Search for anything... "   
    style={{fontSize:"14px",background:"#F6F6F6",border:"none",outline:"none",padding:"13px",
  boxSizing:"border-box"}}/>
    </div>
<div id="fle" >
  <Button className="ml-3"  style={{background:"#E3424B",paddingRight:"14px",textAlign:"center",border:"none",borderRadius:"7px",height:"7vh",paddingLeft:"14px"}}><i class="fas fa-user" style={{textAlign:"center"}}></i> </Button>
  <Button className="ml-2"  style={{background:"#E3424B",border:"none",borderRadius:"7px",height:"7vh",}}><i class="fas fa-shopping-cart"></i></Button>
</div>
</Navbar> 
{/* ============ */}
  <Carousel className="over mt-4" id="car"style={{height:"45vh",width:"101%"}}>
  <Carousel.Item >
    <img
      className="d-block  over " id="carr" 
      src={slider1} style={{height:"45vh",width:"101%"}}
      
    />
     <Carousel.Caption style={{position:"absolute",top:"9%",left:"3%",color:"black",textAlign:"left"}}>
      <h2 style={{fontWeight:"bold",color:"#223142",fontSize:"40px"}}>Stay Home</h2>
      <h2 style={{fontWeight:"bold",color:"#E3424B",fontSize:"40px",marginTop:"-10px"}}>Shop Online</h2>
      <p style={{fontSize:"15px"}}>Finibus feugiat libero. Duis a ex nisl. Phasellus sodales justo eros.<br></br>
      sagittis fermentum sapienn malesuada nec.In porta turpis ex,sed<br></br>
      sollicitudin velit finibus id.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block " id="carr" 
      src={slider2} style={{height:"45vh",width:"101%"}}
    />
     <Carousel.Caption style={{position:"absolute",top:"9%",left:"3%",color:"black",textAlign:"left"}}>
     <h2 style={{fontWeight:"bold",color:"#223142",fontSize:"40px"}}>Stay Home</h2>
      <h2 style={{fontWeight:"bold",color:"#E3424B",fontSize:"40px",marginTop:"-10px"}}>Shop Online</h2>
      <p style={{fontSize:"15px"}}>Finibus feugiat libero. Duis a ex nisl. Phasellus sodales justo eros.<br></br>
      sagittis fermentum sapienn malesuada nec.In porta turpis ex,sed<br></br>
      sollicitudin velit finibus id.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<h3 className="exp ml-4"style={{color:"black",fontWeight:"bold", marginTop:"25px"}}> Explore Catagories</h3>
<div id="all " style={{marginTop:"30px",width:"100%",marginLeft:"22px"}}>
<Link to='/' style={{textDecoration:"none"}}>
  <Button id="alll "style={{textAlign:"center",
  background:"#F6F6F6", border:"none",
   borderRadius:"9px",color:"black",paddingRight:"100px",
   fontSize:"17px",paddingTop:"5px",
   paddingBottom:"5px",height:"7.3vh",width:"15%"}}>
  <img src={all} style={{color:"black",height:"3vh"}}/>
  &nbsp; <b style={{paddingTop:"20px",marginTop:"10px",fontWeight:"normal"}}>
    All</b></Button> </Link>
  <Button id="alll" style={{background:"#F6F6F6",
  color:"black",border:"none",fontSize:"17px"
  ,marginLeft:"10px", paddingBottom:"5px",paddingTop:"5px",
  paddingRight:"30px",height:"7.3vh", 
  borderRadius:"9px",width:"15%"}}><img src={botique} 
  style={{height:"3vh"}}/><b style={{marginLeft:"15px",paddingTop:"10px",marginTop:"10px",
  fontWeight:"normal"}}>Boutique</b></Button>

<Button id="alll" style={{background:"#F6F6F6",
  color:"black",border:"none",fontSize:"17px"
  ,marginLeft:"10px", paddingBottom:"5px",paddingTop:"5px",
  paddingRight:"30px",height:"7.3vh", 
  borderRadius:"9px",width:"15%"}}><img src={elec} 
  style={{height:"3vh"}}/><b style={{marginLeft:"15px",paddingTop:"10px",marginTop:"10px",
  fontWeight:"normal"}}>Electronics</b></Button>
  
  <Button id="alll" style={{background:"#F6F6F6",
  color:"black",border:"none",fontSize:"17px"
  ,marginLeft:"10px", paddingBottom:"5px",paddingTop:"5px",
  paddingRight:"30px",height:"7.3vh", 
  borderRadius:"9px",width:"15.2%"}}><img src={ restaurants } 
  style={{height:"3vh"}}/><b style={{marginLeft:"15px",paddingTop:"10px",marginTop:"10px",
  fontWeight:"normal"}}>Restaurants</b></Button>
  <Button id="alll" style={{background:" #E3424B",
  color:"white",border:"none",fontSize:"17px"
  ,marginLeft:"10px", paddingBottom:"5px",paddingTop:"5px",
  paddingRight:"30px",height:"7.3vh", 
  borderRadius:"9px",width:"17%"}}><img src={sup} 
  style={{height:"3vh"}}/><b style={{marginLeft:"15px",
  paddingTop:"10px",marginTop:"10px",
  fontWeight:"normal"}}>Supermarket</b></Button>
    <Button id="alll" style={{background:"#F6F6F6",
  color:"black",border:"none",fontSize:"17px"
  ,marginLeft:"10px", paddingBottom:"5px",paddingTop:"5px",
  paddingRight:"30px",height:"7.3vh", 
  borderRadius:"9px",width:"17%"}}><img src={taxi} 
  style={{height:"3vh"}}/><b style={{marginLeft:"15px",paddingTop:"10px",marginTop:"10px",
  fontWeight:"normal"}}>Delivery Taxi</b></Button>
</div>
<Card style={{ width: '22rem',marginTop:"35px" ,marginLeft:"22px",border:"none"}}>
  <div variant="top" id="card"
    style={{height:"30vh",borderRadius:"10px",width:"96%"
    ,background:`url(${img3})`,backgroundSize:"100% 100%"}}>
  <Link to="/explore"  style={{textDecoration:"none"}}>
      <div style={{color:"black",marginLeft:"6%",marginTop:"5%"}}>
      <img src={img6} style={{width:"80px",
      height:"80px",borderRadius:"100%"}}/>
      <h5 style={{fontWeight:"bold",marginTop:"2px"}} >Ramez</h5>
      <p style={{fontSize:"15px",marginTop:"-10px"}}>SuperMarket</p>
    </div>
    </Link>
    </div>
</Card>
    </Col>
  </Row>
</Container>
<div className="mt-4">
<Footer/>
</div>


        </>
    )
}

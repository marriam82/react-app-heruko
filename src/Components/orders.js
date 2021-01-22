import React, { Component } from 'react'
import logo from "../logo/logo.svg";
import explore from "../logo/explore.svg"
import order from "../sidebarw/orders.svg";
import fav from "../logo/favourites.svg";
import setting from "../logo/setting.svg";
import message from "../logo/messages.svg";
import Footer from "../Components/footer";
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import {Link} from 'react-router-dom';
import {Navbar,Row,Col,Nav,Container,ProgressBar,Card,CardDeck,CardGroup,Badge,Toast,Button,Form,FormControl,Carousel} from 'react-bootstrap'
import "../App.css";

export default class orders extends Component {
    render() {
        return (
            <>
                 <Container  fluid>
  <Row className="grid">
    <Col sm={2} >
        <Navbar.Brand href="/" className=" pt-2" style={{width:"100%"}}>
          <img src={logo} id="imgg" style={{height:"10vh"}} />
          </Navbar.Brand>      
        <Nav defaultActiveKey="" className="flex-column" >
<Link to="/" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-3 color" href="/" 
  style={{color:"black",background:"transparent"}}>
<i class="fas fa-home house" style={{fontSize:"20px"}}></i>
&nbsp; &nbsp; <span className="home">Home</span></Nav.Link></Link>
<Link to="/exploring" 
style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font" href="/exploring" 
  style={{borderRadius:"10px",
  color:"black",width:"112%"}}>  
  <img style={{height:"3vh",marginLeft:"1px"}} 
  src={explore}/>&nbsp; &nbsp; &nbsp;<span 
  className="home">Explore</span>
  </Nav.Link>
  </Link>
  <Link to="/favorite" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2  font"  href="/favorite"
   style={{color:"black"}}>
  <img style={{height:"3.2vh",marginLeft:"1px"}} src={fav}/>&nbsp; &nbsp;
   &nbsp; <span className="home"> Favorite</span></Nav.Link></Link>

  <Nav.Link className="mt-2 p-3 font"  href="#orders" 
   style={{background:"#E3424B",borderRadius:"10px",
   color:"white",fontWeight:"bold",width:"112%"}}>
  <img style={{height:"3vh",}} src={order}/>&nbsp; 
  &nbsp; &nbsp;<span className="home">Orders</span></Nav.Link>

  <Nav.Link className="mt-2 font" href="#messages" style={{color:"black"}}>
  <img style={{height:"2.5vh"}} src={message}/>&nbsp; &nbsp; &nbsp;<span className="home">Messages</span> &nbsp; &nbsp; &nbsp; &nbsp;<Badge id="no" className="badge" style={{background:"#E3424B",borderRadius:'100%',color:"white"}}>2</Badge></Nav.Link>
  <Nav.Link className="mt-2 set font" href="#settings" style={{color:"black"}}><img style={{height:"3vh"}} src={setting}/>&nbsp; &nbsp; &nbsp;<span className="home">Settings</span></Nav.Link>

</Nav>
<Toast style={{marginTop:"40px",background:"#F7F7F7",width:"105%",
borderRadius:"16px",}} id="no" className="tost">
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
    </Col>
   
    {/* ---------------------- */}
    <Col sm={10} className="up" fluid>
         {/* <hr style={{width:"100%",transform:"rotate(-90deg)"}}></hr> */}
   <Navbar className="mt-1 ">
   <Nav className="mr-4">
   <Nav.Link style={{color:"black",fontWeight:"normal",fontSize:"14px",marginRight:"-25px"}} id="no" className="no" ><img src={delivery}style={{height:"3vh"}} />&nbsp; &nbsp; Sen Francisain California &nbsp;<i class="fas fa-angle-down"></i> </Nav.Link>
      <Nav.Link className="ml-4 pl-3"
      style={{color:"black",fontWeight:"normal",
      fontSize:"14px"}} id="no"><img src={deal}
      style={{height:"3vh"}} />&nbsp; &nbsp; Best deals &nbsp; <i class="fas fa-angle-down"></i></Nav.Link>
      <button className="mt-2 ml-4 p-0" style={{background:"#E3424B",border:"none",
      color:"white",fontSize:"13px",height:"3.1vh",borderRadius:"7px"}} 
      id="no"> &nbsp; EN  &nbsp; <i class="fas fa-angle-down"></i>
       &nbsp;</button> 
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













<div style={{background:"#F6F6F6",width:"101%",height:"80vh"}}>
<h4 style={{paddingTop:"60px",
fontWeight:"bold",fontSize:"25px"}} 
className=" pl-4 ml-3">Upcoming Orders</h4> 
{/* ----------------CARD NUMBER ONE--------------------- */}
<CardDeck style={{width:"70%",marginLeft:"2%",background:"#F6F6F6"}}>


<Card className="" style={{marginLeft:"3%",marginTop:"4%",
width:"35%",height:"42vh",border:"none",borderRadius:"12px"}}>


  <Card.Header 
  style={{border:"none",background:"white",borderRadius:"15px"}} >
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <h6 style={{fontWeight:"bold",color:"#223142"}}>Ramez Shopping</h6>
<Button style={{color:"silver",background:"white",fontSize:"12px",fontWeight:"bold",border:"none"}}>#1DF90E</Button></div>
<div style={{display:"flex"}}>
<i class="far fa-clock ml-2 mt-4" style={{color:"yellow",fontSize:"28px"}}></i>

<Button style={{border:"none", background:"none",
marginLeft:"1%",marginTop:"-3%", fontSize:"12px"}}>
<b style={{color:"grey",fontWeight:"normal"}}> 
Estimated Arrival</b> </Button>
</div>
<h3  style={{fontWeight:"bold",marginLeft:"15%",marginTop:"-5%"}}>35 min</h3>

  </Card.Header>
  <div style={{width:"100%",display:"flex",justifyContent:"space-evenly"}}>
  <ProgressBar variant="danger" now={100} style={{width:"12%",height:"0.9vh"}}/>
  <ProgressBar variant="danger" now={100} style={{width:"18%",height:"0.9vh"}}/>
  <ProgressBar variant="danger" now={60} style={{width:"60%",height:"0.9vh"}}/>
  </div>

  <Card.Body className="mt-4">

    <Button style={{width:"48%",border:"none",height:"7vh",
    borderRadius:"8px",background:"#223142"}} >Details</Button>
    <Button className="ml-2" style={{width:"48%"
    ,color:"#223142",fontWeight:"bold",
    border:"none",height:"7vh",borderRadius:"8px",
    background:"#FCDE70"}} >Cancle</Button>
  </Card.Body>


</Card>


<Card className="" style={{marginLeft:"3%",marginTop:"4%",
width:"35%",height:"42vh",border:"none",borderRadius:"12px"}}>


  <Card.Header 
  style={{border:"none",background:"white",borderRadius:"15px"}} >
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <h6 style={{fontWeight:"bold",color:"#223142"}}>Ramez Shopping</h6>
<Button style={{color:"silver",background:"white",fontSize:"12px",fontWeight:"bold",border:"none"}}>#1DF90E</Button></div>
<div style={{display:"flex"}}>
<i class="far fa-clock ml-2 mt-4" style={{color:"yellow",fontSize:"28px"}}></i>

<Button style={{border:"none", background:"none",
marginLeft:"1%",marginTop:"-3%", fontSize:"12px"}}>
<b style={{color:"grey",fontWeight:"normal"}}> 
Estimated Arrival</b> </Button>
</div>
<h3  style={{fontWeight:"bold"
,marginLeft:"15%",marginTop:"-5%"}}>60 min</h3>

  </Card.Header>
  <div style={{width:"100%",display:"flex",justifyContent:"space-evenly"}}>
  <ProgressBar variant="danger" now={100} style={{width:"12%",height:"0.9vh"}}/>
  <ProgressBar variant="danger" now={100} style={{width:"18%",height:"0.9vh"}}/>
  <ProgressBar variant="danger" now={60} style={{width:"60%",height:"0.9vh"}}/>
  </div>

  <Card.Body className="mt-4">

    <Button style={{width:"48%",border:"none",height:"7vh",
    borderRadius:"8px",background:"#223142"}} >Details</Button>
    <Button className="ml-2" style={{width:"48%"
    ,color:"#223142",fontWeight:"bold",
    border:"none",height:"7vh",borderRadius:"8px",
    background:"#FCDE70"}} >Cancle</Button>
  </Card.Body>


</Card>


</CardDeck>

</div>
























<h4 style={{paddingTop:"60px",
fontWeight:"bold",fontSize:"25px"}} 
className=" pl-4 ml-3">Previous orders</h4> 
{/* ----------------CARD NUMBER ONE--------------------- */}
<CardDeck style={{width:"70%",marginLeft:"2%"}}>


<Card className="" style={{marginLeft:"3%",marginTop:"4%",
width:"35%",background:"#F6F6F6",border:"none",borderRadius:"6px"}}>


  <Card.Header 
  style={{border:"none",background:"#F6F6F6",borderRadius:"15px"}} >
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <h6 style={{fontWeight:"bold",color:"#223142"}}>Ramez Shopping</h6>
<Button style={{color:"green",background:"#DDEEDC",fontSize:"12px",fontWeight:"bold",border:"none"}}>Completed</Button></div>
<div style={{display:"flex"}}>
<Button style={{border:"none", background:"none",marginLeft:"-5%", fontSize:"13px"}}>&nbsp;&nbsp;<i class="far fa-calendar"style={{color:"#B2B2B2"}}></i> &nbsp;<b style={{color:"#E0E0E0",fontWeight:"normal"}}> September 16,2020</b> </Button>
    <Button style={{border:"none", background:"none", fontSize:"13px"}}> <i class="far fa-clock" style={{color:"#B2B2B2",}}></i> &nbsp; <b style={{fontWeight:"normal",color:"#E0E0E0"}}> 11:54 PM</b></Button>
</div>
  </Card.Header>


  <Card.Body>
    <Card.Title style={{fontSize:"15px"}}><Button style={{background:"white",color:"black",border:"none",fontSize:"12px"}}><b>1</b></Button> &nbsp; ALMARAI DBLE CHOCOLATE MILK SH</Card.Title>
    <Card.Title style={{fontSize:"15px"}}><Button style={{background:"white",color:"black",border:"none",fontSize:"12px"}}><b>1</b></Button> &nbsp; NIDO MILK POWDER POUCH 2.25KG</Card.Title>   
    <Card.Text style={{visibility:"invisible",color:"#F6F6F6"}}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button style={{width:"48%",border:"none",height:"7vh",
    borderRadius:"8px",background:"#223142"}} >Details</Button>
    <Button className="ml-2" style={{width:"48%",border:"none",height:"7vh",borderRadius:"8px",background:"#E3424B"}} >Repeat Order</Button>
  </Card.Body>


</Card>


<Card className="" style={{marginTop:"4%",
width:"35%",background:"#F6F6F6",border:"none",borderRadius:"6px"}}>


  <Card.Header 
  style={{border:"none",background:"#F6F6F6",borderRadius:"15px"}} >
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
 <h6 style={{fontWeight:"bold",color:"#223142"}}>Yasmin Cosmatics</h6>
<Button style={{color:"pink",background:"#FDDDDF",fontSize:"12px",fontWeight:"bold",border:"none"}}>Canceled</Button></div>
<div style={{display:"flex"}}>
<Button style={{border:"none", background:"none",marginLeft:"-5%", fontSize:"13px"}}>&nbsp;&nbsp;<i class="far fa-calendar"style={{color:"#B2B2B2"}}></i> &nbsp;<b style={{color:"#E0E0E0",fontWeight:"normal"}}>August 28,2020</b> </Button>
    <Button style={{border:"none", background:"none", fontSize:"13px"}}> <i class="far fa-clock" style={{color:"#B2B2B2",}}></i> &nbsp; <b style={{fontWeight:"normal",color:"#E0E0E0"}}> 12:06 AM</b></Button>
</div>
  </Card.Header>


  <Card.Body>
    <Card.Title style={{fontSize:"15px"}}>
    <Button style={{background:"white",color:"#223142",border:"none",fontSize:"12px"}}>
    <b>3</b></Button> &nbsp; OLIV ALOE SHOWER GEL 200 ML</Card.Title>
    <Card.Title style={{fontSize:"15px"}}><Button style={{background:"white",color:"black",border:"none",fontSize:"12px"}}><b>1</b></Button> &nbsp; OLIV ALOE CLEANSING MILK 200ML</Card.Title>
    {/* <h6>1 More item</h6>    */}
    <Card.Text style={{visibility:"invisible",color:"#F6F6F6"}}>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button style={{width:"48%",border:"none",height:"7vh",
    borderRadius:"8px",background:"#223142"}} >Details</Button>
    <Button className="ml-2" style={{width:"48%",border:"none",height:"7vh",borderRadius:"8px",background:"#E3424B"}} >Repeat Order</Button>
  </Card.Body>


</Card>

</CardDeck>
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

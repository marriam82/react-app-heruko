import React, {Component,setState,useState} from 'react'
import logo from "../logo/logo.svg";
import explore from "../logo/explore.svg"
import order from "../logo/orders.svg";
import fav from "../sidebarw/favourites.svg";
import setting from "../logo/setting.svg";
import message from "../logo/messages.svg";
import Footer from "../Components/footer";
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import {Link} from 'react-router-dom';
import img from "../xadok/pexels-photo-102104.jpeg"

import {Navbar,Row,Col,Nav,Container,NavDropdown,Card,CardDeck,CardGroup,Badge,Toast,Button,Form,FormControl,Carousel} from 'react-bootstrap'
import "../App.css";
export default class Favorite extends Component {
 
    state={
        toggle:true,
        showMe:false,
        toggle1:true,
        showMe1:false
    }
    _onpress(){
        const newState = !this.state.toggle;
        this.setState({toggle:newState});
        this.setState({showMe:!this.state.showMe})

        
    }
    _onpress1(){
      const newState1 = !this.state.toggle1;
      this.setState({toggle1:newState1});
      this.setState({showMe1:!this.state.showMe1})   
  }
    render(){
        const {toggle} = this.state;
        const buttonBg = toggle?"whitesmoke":"#E3424B";
        const {toggle1} = this.state;
        const buttonBg1 = toggle1?"whitesmoke":"#E3424B";


        // const show =toggle?show:null;
       

    return (
        <>
            <Container className="screensize" fluid>
  <Row id="grid">
    <Col sm={2} className="sidebar">
        <Navbar.Brand href="/" className=" pt-2 logo" style={{width:"100%"}}>
          <img src={logo} id="imgg" style={{height:"10vh"}} />
          </Navbar.Brand>      
        <Nav defaultActiveKey="" className="flex-column" >
<Link to="/" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-3 hs" href="/" 
  style={{color:"black",background:"transparent"}}>
<i class="fas fa-home house-s" style={{fontSize:"19px"}}></i>
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
  <Nav.Link className="mt-2 p-3 fcolor"  href="/favorite"
   style={{background:"#E3424B",borderRadius:"10px",
  color:"white",fontWeight:"bold",width:"112%"}}>
  <img style={{height:"3.2vh",marginLeft:"1px"}} 
  src={fav}/>&nbsp; &nbsp;
   &nbsp; <span className="home"> Favorite</span></Nav.Link></Link>
   <Link to="/orders" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font"  href="/orders" style={{color:"black"}}>
  <img style={{height:"3vh",}} src={order}/>&nbsp; 
  &nbsp; &nbsp;<span className="home">Orders</span></Nav.Link>
  </Link>
  
  <Link to="/messages" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font " href="/messages" 
  style={{color:"black"}}>
  <img style={{height:"2.5vh"}} src={message} className="m-b "/>
  &nbsp; &nbsp; &nbsp;<span className="home">Messages</span> 
  &nbsp; &nbsp; &nbsp; &nbsp; <Badge  id="no" className="badge messagebdg1"
   style={{background:"#E3424B",
   borderRadius:'100%',color:"white"}}>
     2</Badge></Nav.Link>
     </Link>
  <Link to="/settings" style={{textDecoration:"none"}}>   
  <Nav.Link className=" set font" href="/settings" style={{color:"black"
  ,marginTop:"3%"}}><img style={{height:"3vh"}} src={setting}/>&nbsp; &nbsp; &nbsp;
  <span className="home">Settings</span></Nav.Link>
</Link>
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
<Button className="mt-3" style={{background:"#223142",border:"none",marginLeft:"35px",borderRadius:"8px"}}>Order Now  &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></Button>
<Button style={{background:"transparent",border:"none",color:"transparent"}}>i</Button>
<Button style={{background:"transparent",border:"none",color:"transparent"}}>i</Button>

</Toast>
    </Col>
   
    {/* ---------------------- */}
    <Col sm={10} className="up" fluid>
         {/* <hr style={{width:"100%",transform:"rotate(-90deg)"}}></hr> */}
   <Navbar className="mainnavbartop ">
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
    <div className="input-container inpu  inpuu" >
    <i class="fas fa-search icon"></i>
    <input type="text"  className="input-field input-u" 
     placeholder="Search for anything... "   
    style={{fontSize:"14px",background:"#F6F6F6",border:"none",outline:"none",padding:"13px",
  boxSizing:"border-box"}}/>
    </div>
<div className="fle" id="">
  <Button className="ml-3 userbutton"  style={{background:"#E3424B",paddingRight:"14px",textAlign:"center",border:"none",borderRadius:"7px",height:"7vh",paddingLeft:"14px"}}><i class="fas fa-user" style={{textAlign:"center"}}></i> </Button>
  <Button className="ml-2 userbutton"  style={{background:"#E3424B",border:"none",borderRadius:"7px",height:"7vh",position:"relative"}}><i class="fas fa-shopping-cart"></i></Button>
</div>
<Badge variant="light" className="badge1"  style={{borderRadius:"12px",position:"absolute",right:"1.5%",padding:"6px",background:"#FFDD73",color:"black",bottom:"65%",fontSize:"12px"}}>2</Badge>

</Navbar> 
{/* ----------------------------------Fav----------------- */}

<div className="favourite mt-4" style={{background:"#F5F5F5",width:"100%",height:"110vh",
paddingRight:"30px"}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<div style={{display:"flex",position:"relative"}}>
<h4 style={{paddingTop:"60px",fontWeight:"bold",fontSize:"25px"}} 
className=" pl-4 ml-3">My Favourites</h4> 
</div>
<div className="favselect" 
style={{position:"absolute",right:"1%",top:"15%",
height:"8vh",width:"40%",}} >
  {this.state.showMe?<div>
<Button className=" p-2 favselectb1" style={{background:"#919FB9",
border:"none",borderRadius:"7px"}} >
  &nbsp;<i class="fas fa-trash"></i>
  &nbsp; &nbsp; Delete Selected &nbsp; &nbsp;</Button>
<Button className="ml-3 p-2 favselectb2" style={{border:"none",background:"#E3424B",borderRadius:"7px"}}>&nbsp;<i class="fas fa-shopping-cart">&nbsp; &nbsp;</i> Add Selected to Cart &nbsp; &nbsp;</Button></div>:null

    }
</div>
<div style={{position:"absolute",right:"1%",top:"15%",
height:"8vh",width:"40%",}} >
  {this.state.showMe1?<div>
<Button className=" p-2" style={{background:"#919FB9",border:"none",borderRadius:"7px"}} >&nbsp;<i class="fas fa-trash"></i>&nbsp; &nbsp; Delete Selected &nbsp; &nbsp;</Button>
<Button className="ml-3 p-2" style={{border:"none",background:"#E3424B",borderRadius:"7px"}}>&nbsp;<i class="fas fa-shopping-cart">&nbsp; &nbsp;</i> Add Selected to Cart &nbsp; &nbsp;</Button></div>:null

    }
</div>
</div>
<CardDeck className="ml-3 mt-4 pt-4 favdeck" >
<Card className="favl" style={{border:"0",height:"40vh",borderRadius:"10px",position:"relative"}}>
   
<div id="circle" onClick={()=>this._onpress()} 
style={{height:"20px",width:"20px",borderRadius:"100%",
backgroundColor:buttonBg,
position:"absolute",left:"11px",top:"11px"}}></div>

<Card.Img variant="top" src={img} className="favimg " style={{height:"25.5vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<h4  style={{color:"#E3424B",textAlign:"center",fontWeight:"bold"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <p className="" style={{color:"#223142",fontSize:"13px",
 fontWeight:"bold",textAlign:"center"}}>DIGESTIVE CHOCO 200 G </p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:
"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart favf"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card  className="favl" style={{border:"0",height:"40vh",borderRadius:"10px",position:"relative"}}>
    <div id="circle"onClick={()=>this._onpress1()} 
     style={{height:"20px",width:"20px",background:buttonBg1,borderRadius:"100%",position:"absolute",left:"11px",top:"11px"}}></div>
<Card.Img className="favimg "  variant="top" src={img} style={{height:"25.5vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<h4 className="" style={{color:"#E3424B",textAlign:"center",fontWeight:"bold"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <p className="" style={{color:"#223142",fontSize:"13px",
 fontWeight:"bold",textAlign:"center"}}>DIGESTIVE CHOCO 200 G </p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart favf"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card  className="favl"  style={{border:"0",height:"40vh",borderRadius:"10px",position:"relative"}}>
    <div id="circle"onClick={()=>this._onpress()}  style={{height:"20px",width:"20px",background:"whitesmoke",borderRadius:"100%",position:"absolute",left:"11px",top:"11px"}}></div>
<Card.Img  className="favimg " variant="top" src={img} style={{height:"25.5vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<h4  style={{color:"#E3424B",textAlign:"center",fontWeight:"bold"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <p  style={{color:"#223142",fontSize:"12px",
 fontWeight:"bold",textAlign:"center"}}>DIGESTIVE CHOCO 200 G </p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart favf"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card className="favl" style={{border:"0",height:"40vh",borderRadius:"10px",position:"relative"}}>
    <div id="circle" onClick={()=>this._onpress()}  style={{height:"20px",width:"20px",background:"whitesmoke",borderRadius:"100%",position:"absolute",left:"11px",top:"11px"}}></div>
<Card.Img  className="favimg " variant="top" src={img} style={{height:"25.5vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<h4  style={{color:"#E3424B",textAlign:"center",fontWeight:"bold"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <p className="" style={{color:"#223142",fontSize:"12px",
 fontWeight:"bold",textAlign:"center"}}>DIGESTIVE CHOCO 200 G </p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart favf"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card className="favl" style={{border:"0",height:"40vh",borderRadius:"10px",position:"relative"}}>
    <div id="circle" onClick={()=>this._onpress()}  style={{height:"20px",width:"20px",background:"whitesmoke",borderRadius:"100%",position:"absolute",left:"11px",top:"11px"}}></div>
<Card.Img variant="top" className="favimg " src={img} style={{height:"26.2vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<h4 className="" style={{color:"#E3424B",textAlign:"center",fontWeight:"bold"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <p className="" style={{color:"#223142",fontSize:"12px",
 fontWeight:"bold",textAlign:"center"}}>DIGESTIVE CHOCO 200 G </p>
<Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart favf"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
</CardDeck>
</div>

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

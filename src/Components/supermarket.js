import React, {useState } from 'react';

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
import master from "../xadok/master.png";
import img from "../xadok/pexels-photo-102104.jpeg"

import "../App.css"
import Footer from "../Components/footer"




import {Navbar,Row,Col,Nav,Container,Card,CardGroup,Badge,Toast,Button,Form,FormControl,Carousel,Modal} from 'react-bootstrap'
export default function Sidebar() {
  const [show, setShow] = useState(false);
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(false);
  const [show4,setShow4] = useState(false);




  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
    return (
      <>
      {/* -----------------Cart modal 1---------------------- */}
      <Modal style={{border:"none",marginLeft:"1%"}} show={show2} 
      onHide={handleClose2}>
              <Modal.Header style={{border:"none"}} closeButton>
                <Modal.Title style={{border:"none"}}>My Cart 
                <span style={{fontSize:"12px",}}> &nbsp;  (2 items)
                  </span></Modal.Title>
              </Modal.Header>
              <Modal.Body style={{border:"none"}}>
             
              <h6 style={{color:"red",fontSize:"12px"}}>DELIVER TO </h6>
              <h6 style={{position:"relative"}} >300 Post Street San Francisco, CA 
              <span style={{color:"silver",position:"absolute",right:"0",marginTop:"-2%"}}><i class="fas fa-chevron-right"></i></span></h6>
      
              <h3 className="mt-4 pt-4">Items</h3>
              <div style={{marginTop:"8%",display:"flex",alignItems:"center",
        justifyContent:"space-between" ,
      
              width:"100%",height:"26vh",borderTop:"1px solid silver",
              borderBottom:"1px solid silver"}}>
                <div style={{width:"70px",height:"70px"}}
                ><img src={img} style={{width:"100%",height:"100%"}}/></div>
                <div><h5 style={{marginTop:"-8%"}}>DIGESTIVE CHOCO 200 G</h5>
                <h4 style={{marginTop:"9%"}}className="text-muted">0.835 <span style={{fontSize:"12px"}}>
                  BHD</span></h4>
                </div>
                <div>
                <Button style={{background:"#F6F6F6",
             color:"gray",
             fontWeight:"bold",width:"40px",
             height:"40px",fontSize:"20px",
             textAlign:"center", display:"flex",alignItems:"center",
             border:"none",borderTopRightRadius:"12px",
             borderTopLeftRadius:"12px"}} >+</Button>
            <Button style={{border:"none",color:"black",
           background:"white"}}>1</Button>
             <Button  style={{background:"#F6F6F6",
             color:"gray",display:"flex",alignItems:"center",
             fontWeight:"bold",width:"40px",
             height:"40px",fontSize:"15px",
             textAlign:"center", 
             border:"none",borderBottomRightRadius:"10px",
             borderBottomLeftRadius:"10px"}} ><i class="fas fa-trash"></i></Button>
                </div>
              </div>
            <h6 style={{position:"absolute",left:"5%",paddingTop:"20px",color:"black"}}>+ Add more items</h6>
              
              <div 
      style={{
      display:"flex",alignItems:"center",marginTop:"15%",
      justifyContent:""}}>
      <Button style={{width:"70px",
      border:"none",color:"black",
      background:"#F6F6F6",fontSize:"19px"}}>
        <i class="fas fa-motorcycle"></i></Button>
      <div style={{marginLeft:"10%"}}>
                    <h6 style={{fontWeight:"bold"}}>Delivery</h6>
                    <h6>$0</h6>
                  </div>
                </div>
                <div 
      style={{
      display:"flex",alignItems:"center",
      marginTop:"5%",
      justifyContent:""}}>
      <Button style={{width:"70px",
      border:"none",color:"black",
      background:"#F6F6F6",fontSize:"19px"}}>
       <i class="far fa-credit-card"></i></Button>
      <div style={{marginLeft:"10%"}}>
                    <h6 style={{fontWeight:"bold"}}>Promo code</h6>
                    <h6>HXFWO</h6>
                  </div>
                  <Button style={{marginLeft:"45%",background:"#223142",border:"none"}} >+</Button>
                </div>
              </Modal.Body>
              <Modal.Footer 
              style={{border:"none",}}>
                 <Button  onClick={handleShow4}  style={{marginTop:"8%",
                 background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
          Checkout <span style={{fontSize:"12px"}}>(0.835 BHD)</span>
        </Button>
              </Modal.Footer>
            </Modal>
      {/* ------------------------------------cart modal 1 end-------------------- */}
            
              {/* ------------------------ user --------------------------- */}
              <Modal style={{border:"none",width:"420px",
              height:"150vh",marginLeft:"69%",marginTop:"-2.3%"}} 
              show={show1} onHide={handleClose1}>
              <Modal.Header style={{border:"none", outline:"none"}} closeButton>
                <Modal.Title className="mt-3" style={{border:"none",fontSize:"33px"}}>Welcome!</Modal.Title>
              </Modal.Header>
              <p className="pl-4" style={{color:"silver",fontSize:"13px"}}>Sign in to your account to continue</p>
      
              <Modal.Body style={{border:"none"}}>
                <div className="mt-4" style={{display:"flex",height:"50px",width:"100%",}}>
                <Button className="p-3" style={{borderRadius:"10px",
                border:"none",background:"#F6F6F6",color:"black"}}>
                  <i class="far fa-envelope" style={{fontSize:"20px"}}>
                  </i></Button>
                <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",marginLeft:"2%"}}>EMAIL ADDRESS</h6>
                <p style={{fontWeight:"10px",color:"silver"}}>markclarke@gmail.com</p>
                <hr style={{width:"180%"}}></hr>
                </div>
              
              </div>
              <div style={{display:"flex",height:"50px",marginTop:"13%"}}>
                <Button className="p-3" style={{borderRadius:"10px",border:"none",background:"#F6F6F6",color:"black"}}>
                <i class="fas fa-key" style={{fontSize:"20px"}}></i></Button>
                <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",
                marginLeft:"2%"}}>PASWORD</h6>
                <p style={{fontWeight:"10px",color:"silver"}}>******</p>
                <hr style={{width:"400%"}}></hr>
               
                </div>
      
              </div>
      
              </Modal.Body>
              <Modal.Footer className="mt-4" style={{border:"none"}}>
              <Button className="p-3" style={{background:"#E3424B",border:"none",borderRadius:"7px",width:"80%",marginRight:"10%"}}  block>
          Sign in
        </Button>
        <h6 style={{fontSize:"14px",position:"absolute",left:"35%",
        textAlign:"center",marginTop:"-26%"}}>Forgot password? </h6>
        <Button onClick={handleShow3}  className="p-3"  style={{marginTop:"18%",background:"gray",border:"none",borderRadius:"7px",width:"80%",marginRight:"10%"}}  block>
          Create an account
        </Button>
        <Button c  style={{marginTop:"18%",background:"transparent",border:"none",borderRadius:"7px"}} size="lg" block>
          Create an account
        </Button>
      
      
              </Modal.Footer>
            </Modal>
              
              
              {/* ------------------- User end-------------------- */}
         
           
      {/* ------------------------location  ---------------------- */}
           <Modal show={show}  style={{borderRadius:"1rem ",
           width:"390px",marginLeft:"40%",background:"transparent",border:"none"}} onHide={handleClose} animation={false} >
             <Modal.Header style={{borderRadius:"1rem ",background:"transparent",border:"none"}} closeButton>
               <Modal.Title style={{border:"none"}}>Delivery address</Modal.Title>
             </Modal.Header>
             <Modal.Body style={{border:"none"}}>
               <div className="p-2 pb-3" style={{background:"#FFDD72",borderRadius:"10px", justifyContent:"space-between"
               ,width:"100%",display:"flex"}}>
                 <div><h6 className="pl-2">Current Location</h6>
                 <p className="pl-2" style={{fontSize:"15px",marginTop:"-1%"}}>2919 Avenue 29,Jurdab,Bahrain</p>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                   <button style={{borderRadius:"5px",width:"30px",height:"32px",border:"none",
                   background:"#E3424B",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
                   <button style={{marginTop:"15%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
                   background:"#E3424B",fontSize:"12px",color:"white"}}><i class="fas fa-redo"></i></button>
      
                 </div>
               </div>
               <div className="p-2 mt-2 " style={{background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
               ,width:"100%",display:"flex",height:"90px"}}>
                 <div><h6 className="pl-2">Home</h6>
                 <p className="pl-2" style={{fontSize:"15px",marginTop:"-2%"}}>Sn Francisco CA 94103 <br></br>94103</p>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                   <button style={{borderRadius:"5px",width:"30px",height:"32px",border:"none",
                   background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
                   <button style={{marginTop:"15%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
                   background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-trash"></i></button>
      
                 </div>
               </div>
               <div className="p-2 mt-2" style={{height:"90px",background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
               ,width:"100%",display:"flex"}}>
                 <div><h6 className="pl-2">Office</h6>
                 <p className="pl-2" style={{fontSize:"15px",marginTop:"-2%"}}>Sn Francisco CA 94103 <br></br>94103</p>
                 </div>
                 <div style={{display:"flex",flexDirection:"column"}}>
                   <button style={{borderRadius:"5px",width:"30px",height:"32px",border:"none",
                   background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
                   <button style={{marginTop:"15%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
                   background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-trash"></i></button>
      
                 </div>
               </div>
             </Modal.Body>
             <h6 className="pl-4" style={{fontWeight:"bold"}}>+Add new addresses</h6>
      
             <Modal.Footer style={{border:"none"}}>
          <Button style={{background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
          Confirm
        </Button>
             </Modal.Footer>
           </Modal>
          {/* ------------------------- location end ------------------------ */}
       
         {/* ----------------------- user 2-------------------------- */}
         <Modal style={{border:"none",width:"420px",
              height:"150vh",marginLeft:"69%",marginTop:"-2.3%"}} 
              show={show3} onHide={handleClose3}>
              <Modal.Header style={{border:"none", outline:"none"}} closeButton>
                <Modal.Title className="mt-3" style={{border:"none",fontSize:"33px"}}>Create an account!</Modal.Title>
              </Modal.Header>
              <p className="pl-4" style={{color:"silver",fontSize:"13px"}}>Please create an account to continue using our service</p>
      
              <Modal.Body style={{border:"none"}}>
              <div className="mt-4" style={{display:"flex",height:"50px",width:"100%",}}>
                <Button className="p-3" style={{borderRadius:"10px",
                border:"none",background:"#F6F6F6",color:"black"}}>
                  <i class="far fa-envelope" style={{fontSize:"20px"}}>
                  </i></Button>
                <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",marginLeft:"2%",width:"100%"}}>FULL NAME</h6>
                <p style={{fontWeight:"10px",color:"silver"}}>Talal</p>
                <hr style={{width:"300%"}}></hr>
                </div>
              
              </div>
                <div className="mt-4" style={{display:"flex",height:"50px",width:"100%",}}>
                <Button className="p-3" style={{borderRadius:"10px",
                border:"none",background:"#F6F6F6",color:"black"}}>
                  <i class="far fa-envelope" style={{fontSize:"20px"}}>
                  </i></Button>
                <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",marginLeft:"2%"}}>EMAIL ADDRESS</h6>
                <p style={{fontWeight:"10px",color:"silver"}}>markclarke@gmail.com</p>
                <hr style={{width:"180%"}}></hr>
                </div>
              
              </div>
              <div style={{display:"flex",height:"50px",marginTop:"13%"}}>
                <Button className="p-3" style={{borderRadius:"10px",border:"none",background:"#F6F6F6",color:"black"}}>
                <i class="fas fa-key" style={{fontSize:"20px"}}></i></Button>
                <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",
                marginLeft:"2%"}}>PASWORD</h6>
                <p style={{fontWeight:"10px",color:"silver"}}>******</p>
                <hr style={{width:"400%"}}></hr>
               
                </div>
      
              </div>
      
              </Modal.Body>
              <Modal.Footer className="" style={{border:"none"}}>
              <Button className="p-3"  style={{marginTop:"10%",background:"#E3424B",border:"none",borderRadius:"7px",width:"80%",marginRight:"10%"}}  block>
          Create account
        </Button>
        <h6 style={{fontSize:"14px",position:"absolute",left:"24%",
        textAlign:"center",marginTop:"15%"}}> Already have an account? <span style={{color:"#E3424B",fontWeight:"bold"}}>Sign In</span></h6>
       
        <Button c  style={{marginTop:"18%",background:"transparent",border:"none",borderRadius:"7px"}} size="lg" block>
          Create an account
        </Button>
      
      
              </Modal.Footer>
            </Modal>
         
         
         {/* ---------------------------user 2 end------------------ */}
      
      {/* ------------------------- cart  2 ------------------------- */}
      <Modal style={{border:"none",height:"105vh",
      marginLeft:"1%",marginTop:"-2.2%"}} 
      show={show4} 
      onHide={handleClose4}>
              <Modal.Header style={{border:"none"}} closeButton>
              <div style={{width:"95%",height:"7vh",background:"#F6F6F6",
              border:"none",display:"flex",justifyContent:"space-between",
              borderRadius:"8px"}}>
                <h6 style={{paddingTop:"2.5%",paddingLeft:"4%"}}>Scedule Delivery </h6>
                <i class="fas fa-chevron-down" 
                style={{color:"silver",marginRight:"4%",marginTop:"4%"}}></i>
              </div>
              </Modal.Header>
              <Modal.Body style={{border:"none"}}>
             
              <h3 style={{}}>Payment methods </h3>
              <Button className="p-3 text-start " style={{marginTop:"10%",display:"flex",width:"95%",background:"#E3424B",border:"none",borderRadius:"7px",
             alignItems:"center" ,borderRadius:"7px"}}> &nbsp; &nbsp;&nbsp;&nbsp;
              <i class="fas fa-money-bill-alt"></i> &nbsp; &nbsp;&nbsp; Cash on delivery
              </Button>
            
              <Button className="p-3 text-start " style={{marginTop:"2.5%",
              display:"flex",width:"95%",background:"#e6e3e3",border:"none",borderRadius:"7px",
             alignItems:"center",color:"black" ,borderRadius:"7px"}}>&nbsp; &nbsp;&nbsp;&nbsp;
             <i class="fas fa-id-card"></i>&nbsp; &nbsp; &nbsp;Benefit pay
              </Button>
      
              <Button className="p-3 text-start " style={{marginTop:"2.5%",
              display:"flex",width:"95%",background:"#e6e3e3",border:"none",borderRadius:"7px",
             alignItems:"center",color:"black" ,borderRadius:"7px" }}> &nbsp; &nbsp;&nbsp;&nbsp;
            <i class="fas fa-id-card"></i> &nbsp; &nbsp;&nbsp; Card on delivery
              </Button>
               <h3 style={{marginTop:"13%",fontWeight:"bold",marginLeft:"2%"}}>  My Cart 
                <span style={{fontSize:"14px",}}> &nbsp;  (2)
                  </span>
                  </h3> 
                 <div style={{marginTop:"7%",display:"flex",justifyContent:"space-evenly"}}>
                <Button style=
                {{border:"none",borderRadius:"12px",fontSize:"30px",width:"60px",marginTop:"12%",height:"10vh",background:"#e6e3e3"}}><i class="fas fa-plus"></i></Button>
                <img src={master} style={{width:"160px",height:"200px",borderRadius:"12px"}}/>
                < div style={{backgroundImage:`url(${master})`,
                width:"160px",height:"200px",borderRadius:"12px",
                backgroundSize:"100% 100%"}}>
                  <div style={{width:"100%",height:"100%",background:"white",opacity:"0.5"}}></div>
                </div>
                 </div>
              
      <h4 style={{fontWeight:"bold",marginLeft:"3%",marginTop:"6%",border:"none"}}>Notes</h4>
      <input  type="text" placeholder="Examples don't ring the best" className="not-input" 
      style={{outline:"none",border:"none",color:"whitesmoke",marginLeft:"7%",width:"90%",height:"8vh",background:"#F6F6F6",borderRadius:"10px"}} />
      
              </Modal.Body>
              <Modal.Footer 
              style={{border:"none",}}>
                 <Button style={{
                 background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
          Checkout <span style={{fontSize:"12px"}}>(0.835 BHD)</span>
        </Button>
              </Modal.Footer>
            </Modal>
            {/* ------------------------------- cart 2 end ------------------ */}
    
            <Container fluid>
  <Row className="grid" >
    <Col sm={2} >
    <Navbar.Brand href="#home" className=" pt-2" style={{width:"100%"}}>
          <img src={logo} id="imgg" style={{height:"10vh"}} />
          </Navbar.Brand>      
        <Nav defaultActiveKey="/home" className="flex-column" >
  
  
<Nav.Link className="mt-3 p-3 color" href="/home" style={{background:"#E3424B",borderRadius:"10px",color:"white",fontWeight:"bold",}}><i class="fas fa-home house" style={{fontSize:"19px"}}></i>&nbsp; &nbsp; <span className="home">Home</span></Nav.Link>
<Link to="/explore" style={{textDecoration:"none"}}>
  
  <Nav.Link className="mt-2 font" href="/explore" style={{color:"black",}}>  
  <img style={{height:"3vh",marginLeft:"1px"}} src={explore}/>&nbsp; &nbsp; 
  &nbsp;<span className="home">Explore</span></Nav.Link>
  </Link>
  <Link to="/favorite" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font"  href="/favorite" style={{color:"black"}}>
  <img style={{height:"3.2vh",marginLeft:"1px"}} src={fav}/>&nbsp; 
  &nbsp; &nbsp; <span className="home"> Favourite</span></Nav.Link></Link>
  <Link to="/orders" style={{textDecoration:"none"}}>

  <Nav.Link className="mt-2 font"  href="/orders" style={{color:"black"}}>
  <img style={{height:"3vh",}} src={order}/>&nbsp; &nbsp; &nbsp;<span 
  className="home">Orders</span></Nav.Link></Link>
  <Link to="/messages" style={{textDecoration:"none"}}>

  <Nav.Link className="mt-2 font" href="/messages" style={{color:"black"}}>
  <img style={{height:"2.5vh"}} src={message}/>&nbsp; &nbsp; &nbsp;<span className="home">Messages</span> 
  &nbsp; &nbsp; &nbsp; &nbsp;<Badge id="no" className="badge" style={{background:"#E3424B",borderRadius:'100%',
  color:"white"}}>2</Badge></Nav.Link></Link>
  <Link to="/settings" style={{textDecoration:"none"}}>

  <Nav.Link className="mt-2 set font" href="/settings" 
  style={{color:"black"}}><img style={{height:"3vh"}} src={setting}/>&nbsp; &nbsp; &nbsp;<span
   className="home">Settings</span></Nav.Link></Link>

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
       
    <Navbar className="mt-1 b">
   <Nav className="mr-4">
   <Nav.Link  onClick={handleShow} 
   style={{color:"black",fontWeight:"normal",fontSize:"14px",marginRight:"-25px"}} id="no"
    className="no" ><img src={delivery}style={{height:"3vh"}} />&nbsp; &nbsp; Sen Francisain California &nbsp;
    <i class="fas fa-angle-down"></i> </Nav.Link>
      <Nav.Link className="ml-4 pl-3"
      style={{color:"black",fontWeight:"normal",
      fontSize:"14px"}} id="no"><img src={deal}
      style={{height:"3vh"}} />&nbsp; &nbsp; Best deals &nbsp; <i class="fas fa-angle-down"></i></Nav.Link>
      <label for="EN" className="mt-2 ml-4 p-0" style={{background:"#E3424B",border:"none",
      color:"white",fontSize:"13px",borderRadius:"8px"}} 
      id="no"> 
       <select id="EN" style={{ background:"#E3424B",height:"3vh",color:"white",borderRadius:"8px",border:"3px solid #E3424B "}}>
       <option value="EN">EN</option>

         <option value="ع">ع</option>
       </select>
       </label> 
    </Nav>
    <div className="input-container inpu" >
    <i class="fas fa-search icon"></i>
    <input type="text" className="input-field input-u" 
    placeholder="Search for anything... "   
    style={{fontSize:"14px",background:"#F6F6F6",border:"none",
    outline:"none",padding:"13px",
  boxSizing:"border-box"}}/>
    </div>
<div id="fle" className="ml-2">
  <Button onClick={handleShow1} className="ml-3"  
  style={{background:"#E3424B",paddingRight:"14px",
  textAlign:"center",border:"none",borderRadius:"7px",height:"7vh",paddingLeft:"14px"}}>
    <i class="fas fa-user" style={{textAlign:"center"}}></i> </Button>

  <Button onClick={handleShow2} className="ml-2"  style={{background:"#E3424B",border:"none",borderRadius:"7px",height:"7vh",}}><i class="fas fa-shopping-cart"></i></Button>
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

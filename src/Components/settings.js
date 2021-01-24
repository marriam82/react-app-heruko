import React, { Component ,useState} from 'react'
import logo from "../logo/logo.svg";
import explore from "../logo/explore.svg"
import order from "../logo/orders.svg";
import fav from "../logo/favourites.svg";
import setting from "../sidebarw/setting.svg";
import message from "../logo/messages.svg";
import Footer from "../Components/footer";
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import profile from "../xadok/download.png"
import {Link} from 'react-router-dom';
import {Navbar,Row,Col,Nav,Container,Modal,Badge,Toast,Button,Form,FormControl,Carousel} from 'react-bootstrap'
import "../App.css";

export default function Settings() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
        return (

            <div>
                 <Modal style={{border:"none",width:"300px",
                 marginLeft:"40%"}} 
        show={show} onHide={handleClose}>
        <Modal.Header style={{border:"none"}} closeButton>
          <Modal.Title style={{border:"none",}}>Personal information</Modal.Title>
        </Modal.Header>
        <p className="pl-4" style={{color:"silver",fontSize:"13px"}}>Profile Image</p>

        <Modal.Body style={{border:"none"}}>
          <div style={{display:"flex",alignItems:"center"}}>
            <img src={profile} style={{borderRadius:"6px",width:"50px",height:"50px"}} />
            <div className="ml-4" style={{display:"flex"}}>
            <Button style={{background:"#E3424B",marginleft:"1%",
            border:"1px solid #E3424B"}}>Upload</Button>
            <Button style={{background:"#F6F6F6",color:"silver",
            marginLeft:"5%",border:"none"}}>Delete</Button>
            </div>
          </div>
        <p className="mt-4" style={{color:"silver",
        fontSize:"13px"}}>Profile Details</p>

        <div style={{display:"flex",height:"40px"}}>
          <Button style={{border:"none",background:"#F6F6F6",color:"black"}}>
          <i class="fas fa-user"></i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",
          fontWeight:"bold",marginLeft:"2%"}}>FULL NAME</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>Mark Clarke</p>
<hr></hr>
          </div>
        
        </div>
        <div style={{display:"flex",height:"40px",marginTop:"13%"}}>
          <Button style={{border:"none",background:"#F6F6F6",color:"black"}}>
            <i class="far fa-envelope"></i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",
          fontWeight:"bold",marginLeft:"2%"}}>EMAIL Address</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>markclarke@gmail.com</p>
<hr></hr>
          </div>
        
        </div>
        <div style={{display:"flex",height:"40px",marginTop:"13%"}}>
          <Button style={{border:"none",background:"#F6F6F6",color:"black"}}>
          <i class="fas fa-phone"></i></Button>
          <div className="ml-3"><h6 style={{fontSize:"11px",fontWeight:"bold",
          marginLeft:"2%"}}>PHONE NUMBER</h6>
          <p style={{fontWeight:"10px",color:"silver"}}>+1(234)5678900</p>
          </div>
<hr></hr>

        </div>

        </Modal.Body>
        <Modal.Footer style={{border:"none"}}>
      
  <Button style={{marginTop:"8%",background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
    Update profile
  </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={show1}  style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleClose1} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Saved addresses</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
        
         <div className="p-2 mt-2 " style={{background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
         ,width:"100%",display:"flex",height:"90px"}}>
           <div><h6 className="pl-2">Home</h6>
           <p className="pl-2" style={{fontSize:"15px"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button style={{borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button style={{marginTop:"10%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-redo"></i></button>

           </div>
         </div>
         <div className="p-2 mt-2" style={{height:"90px",background:"#F6F6F6",borderRadius:"10px", justifyContent:"space-between"
         ,width:"100%",display:"flex"}}>
           <div><h6 className="pl-2">Office</h6>
           <p className="pl-2" style={{fontSize:"15px"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button style={{borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button style={{marginTop:"10%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-redo"></i></button>

           </div>
         </div>
       </Modal.Body>
       <h6 className="pl-4 mt-4" style={{fontWeight:"bold"}}>+Add new addresses</h6>

       <Modal.Footer style={{border:"none"}}>
    <Button style={{background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
    Confirm
  </Button>
       </Modal.Footer>
     </Modal>



     <Modal show={show2}  style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleClose2} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Marketing perferences</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
        <div style={{display:"flex"}}>
       <Form.Check aria-label="option 1" /> 
       <h6 className="text-muted">Promotional emails</h6>
       </div>
       <div style={{display:"flex"}}>
       <Form.Check aria-label="option 1" /> 
       <h6 >Monthly newsletter</h6>
       </div>

         <div style={{display:"flex"}}>
       <Form.Check aria-label="option 1" /> 
       <h6 className="text-muted">Feedback collection</h6>
       </div>
       <div style={{display:"flex"}}>
       <Form.Check aria-label="option 1" /> 
       <h6 >Discount and offers</h6>
       </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none"}}>
    <Button style={{background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
    Update perferences
  </Button>
       </Modal.Footer>
     </Modal>



     <Modal show={show3}  style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleClose3} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Payment methods</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
       <Button style={{background:"#E3424B",border:"none",borderRadius:"7px"}} size="lg" block>
       <i class="far fa-address-card"></i>
  </Button>
  <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly",marginTop:"2%"}}>
  <Button style={{width:"180px",border:"none",background:"silver",color:"gray"}}> <i class="fas fa-money-bill-wave"></i></Button>
  <Button style={{width:"180px",border:"none",background:"silver",color:"gray"}}> <i class="fab fa-paypal"></i></Button>
  </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none"}}>
    <Button style={{background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
    Update perferences
  </Button>
       </Modal.Footer>
     </Modal>
        
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
<Link to="/orders" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font"  href="/orders" 
   style={{color:"black"}}>
  <img style={{height:"3vh",}} src={order}/>&nbsp; 
  &nbsp; &nbsp;<span className="home">Orders</span></Nav.Link>
  </Link>
<Link to="/messages" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font" href="/messages" style={{color:"black"}}>
  <img style={{height:"2.5vh"}} src={message}/>&nbsp; &nbsp; &nbsp;
  <span className="home">Messages</span> &nbsp; &nbsp; &nbsp; &nbsp;
  <Badge id="no" className="badge" style={{background:"#E3424B",
  borderRadius:'100%',color:"white"}}>2</Badge></Nav.Link>
  </Link>
  <Nav.Link className="mt-2 p-3 set font" href="/settings" style={{background:"#E3424B",borderRadius:"10px",
   color:"white",fontWeight:"bold",width:"112%"}}><img style={{height:"3vh"}} src={setting}/>&nbsp; &nbsp; &nbsp;<span className="home">Settings</span></Nav.Link>

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

<h4 style={{fontWeight:"bold",color:"#223142",marginTop:"5%",marginLeft:"3%"}}>Settings</h4>
<div style={{marginLeft:"3%"}}>
    <h6 style={{color:"lightgray",marginTop:"3%",marginLeft:"%"}}>General</h6>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="far fa-user"></i> &nbsp; <b>Personal information</b></Button>
    <Button onClick={handleShow} style={{color:"#223142",background:"none",border:"none"}}>
      <i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}>
      <i class="far fa-bookmark"></i> &nbsp; <b>Saved addressess</b></Button>
    <Button onClick={handleShow1} style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="far fa-envelope"></i> &nbsp; <b>Marketing perferences</b></Button>
    <Button onClick={handleShow2} style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>


    <h6 style={{color:"lightgray",marginTop:"3%",marginLeft:"%"}}>Payments</h6>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="far fa-address-card"></i>&nbsp; <b>Payment methods</b></Button>
    <Button onClick={handleShow3} style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="fas fa-credit-card"></i> &nbsp; <b>My cards</b></Button>
    <Button  style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>

    <h6 style={{color:"lightgray",marginTop:"3%",marginLeft:"%"}}>Others</h6>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}> <i class="far fa-question-circle"></i> &nbsp; <b>Support</b></Button>
    <Button  style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="fas fa-user-plus"></i>&nbsp; <b>Invite a friend</b></Button>
    <Button  style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="far fa-money-bill-alt"></i> &nbsp; <b>Discounts</b></Button>
    <Button  style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
</div>
</Col>

</Row>
</Container>
<div className="mt-4">
<Footer/>
</div>   
            </div>
        )
    
}
import React, { Component } from 'react'
import {Navbar,Row,Col,Nav,Container,Image,Card,CardGroup,CardDeck,Badge,Toast,Button,Form,FormControl,Carousel} from 'react-bootstrap'
import logo from "../logo/logo.svg";
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import image from "../Components/unnamed.jpg";
import img from "../Components/wuxga.png";
import offe from "../ramez/offers.svg"
import fruit from "../ramez/fruites-vegetables.svg"
import diary from "../ramez/Diary & Eggs.svg"
import drink from "../ramez/Drinks.svg"
import meat from "../ramez/Meat, Fish & Chicken.svg"
import frozen from "../ramez/Frozen.svg"
import cans from "../ramez/Cans & Jars.svg"
import pack from "../ramez/Packets & Cereals.svg"
import choco from "../ramez/Chocolate ,Snacks & Bakery.svg"
import baby from "../ramez/baby.svg"
import diy from "../ramez/DIY & Household.svg"
import appli from "../ramez/Home & Kitchen Appliances.svg"
import wellness from "../ramez/Wellness & Looks.svg"
import school from "../ramez/Back to School.svg"
import various from "../ramez/toys.svg"
import elect from "../ramez/Electronics.svg"
import pet from "../ramez/Pet Supplies.svg"
import toys from "../ramez/toys.svg"
import fashion from "../ramez/Fashion.svg"
import decoration from "../ramez/Home & Kitchen Appliances.svg"
import hair from "../ramez/Hair Care.svg"
import "../App.css"
import Footer from "../Components/footer"

import {Link} from 'react-router-dom';
export default class weekend extends Component {
    render() {
        return (
            <>
    <Container fluid>
  <Row >
    <Col sm={3} >
  <Link to="/">
  <Navbar.Brand  className="ml-2 pt-2" ><img src={logo} style={{height:"10vh"}} /></Navbar.Brand>
  </Link>
  <Nav className="flex-column"  style={{width:"100%",padding:"0",margin:"0"}} >
<Link to="/offers"style={{outline:"none",listStyle:"none",textDecoration:"none"}}>
<Nav.Link href="/offers" className="mt-3"
  style={{color:"#223142"}}><img 
  style={{height:"3vh"}} src={offe}/>&nbsp; &nbsp; Offers</Nav.Link>
  </Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={fruit}/>&nbsp; &nbsp;Fruits & Vegetables</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={diary}/>&nbsp; &nbsp; Dairy & Eggs</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={drink}/>&nbsp; &nbsp;Drinks</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={meat}/>&nbsp; &nbsp;Meat, Fish & Chicken</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={frozen}/>&nbsp; &nbsp;Frozen</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={cans}/>&nbsp; &nbsp;Cans & jars</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={pack}/>&nbsp; &nbsp;Packet & Cereals</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={choco}/>&nbsp; &nbsp;Chocolate,Snacks & Backery</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={baby}/>&nbsp; &nbsp;Baby</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={diy}/>&nbsp; &nbsp;DIY & Household</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={appli}/>&nbsp; &nbsp;Home & Kichen Appliances</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={wellness}/>&nbsp; &nbsp;Wellnwss</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={school}/>&nbsp; &nbsp;Back to School</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={various}/>&nbsp; &nbsp;Varoius & fresh nuts</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={elect}/>&nbsp;&nbsp;Electronics</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={pet}/>&nbsp; &nbsp;Pet Supplies</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={toys}/>&nbsp; &nbsp;Toys</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={fashion}/>&nbsp; &nbsp;Fashion</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={decoration}/>&nbsp; &nbsp;Home Decor Furniture</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={hair}/> &nbsp; &nbsp;Hair Care</Nav.Link> 
</Nav>
    </Col>
    <Col sm={9}  >
    <Container fluid style={{marginLeft:"-65px"}}>
   <Navbar className="mt-2 " style={{width:"108%"}}>
   <Nav className="mr-4">
   <Nav.Link style={{color:"black",fontWeight:"normal",fontSize:"14px",marginRight:"-25px"}}><img src={delivery}style={{height:"3vh"}} />&nbsp; &nbsp; Sen Francisain California &nbsp;<i class="fas fa-angle-down"></i> </Nav.Link>
      <Nav.Link className="ml-4 pl-3"style={{color:"black",fontWeight:"normal",fontSize:"14px"}}><img src={deal}style={{height:"3vh"}} />&nbsp; &nbsp; Best deals &nbsp; <i class="fas fa-angle-down"></i></Nav.Link>
      <button className="mt-2 ml-4 p-0" style={{background:"#E3424B",border:"none",color:"white",fontSize:"14px",height:"4vh",borderRadius:"9px"}}> &nbsp; EN  &nbsp; <i class="fas fa-angle-down"></i> &nbsp;</button>
    </Nav>
<Form.Control type="text" placeholder="Search for anything..." style={{height:"7vh",borderRadius:"8px",width:"43%",fontSize:"14px",background:"#F6F6F6",outline:"none",border:"none"}} />
<div>
  <Button className="ml-3"  style={{background:"#E3424B",border:"none",borderRadius:"10px",height:"7vh",}}><i class="fas fa-user"></i> </Button>
  <Button className="ml-2 " style={{background:"#E3424B",border:"none",borderRadius:"10px",height:"7vh",}}><i class="fas fa-shopping-cart"></i></Button>
</div>
</Navbar> 
<div style={{height:"50vh"}}>
    <img
      className="d-block "
      src={image} style={{height:"47vh",width:"109%"}}
    />
    </div>
    <h4 style={{color:"#223142",fontWeight:"bold", marginTop:"15px",marginLeft:"20px"}}>Weekend Offers</h4>
    <div className="weekend" style={{background:"silver",width:"105%",height:"1300px",backgroundSize:"100% 100%"}}>
      <div className="offer">
          <div className=""></div>
          <div className="" style={{background:"white",boxShadow:"0 0 10px 0 black"}}>
   <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>10.<span style={{fontSize:"20px"}}>50</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div style={{background:"white",boxShadow:"0 0 10px 0 black"}}>
          <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
           <del style={{color:"red",right:"22%",position:"relative",top:"84%",fontSize:"18px"}}>45.<span style={{fontSize:"16px"}}>00</span></del>
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>35.<span style={{fontSize:"20px"}}>00</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div className="" style={{boxShadow:"0 0 10px 0 black",background:"#44B146"}}></div>
          <div className=""></div>


      </div>
      <div className="offert mt-3">
          <div></div>
          <div className="" style={{boxShadow:"0 0 10px 0 black",background:"white"}}>
   <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
   <del style={{color:"red",right:"22%",position:"relative",top:"84%",fontSize:"18px"}}>45.<span style={{fontSize:"16px"}}>00</span></del>
         
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>30.<span style={{fontSize:"20px"}}>95</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div style={{background:"#F1141D"}}>
          </div>
          <div style={{background:"white",boxShadow:"0 0 10px 0 black"}}>
          <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
          <del style={{color:"red",right:"22%",position:"relative",top:"84%"
          ,fontSize:"18px"}}>85.<span style={{fontSize:"16px"}}>00</span></del>
          
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>44.<span style={{fontSize:"20px"}}>95</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div style={{background:"white",boxShadow:"0 0 10px 0 black"}}>
          <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
          <del style={{color:"red",right:"22%",position:"relative",top:"84%"
          ,fontSize:"18px"}}>16.<span style={{fontSize:"16px"}}>54</span></del> 
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>13.<span style={{fontSize:"20px"}}>95</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div className=""></div>
      </div>
      <div className="offert mt-3">
          <div></div>
          <div className="" style={{boxShadow:"0 0 10px 0 black",background:"white"}}>
   <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
   <del style={{color:"red",right:"22%",position:"relative",top:"84%"
          ,fontSize:"18px"}}>5.<span style={{fontSize:"16px"}}>95</span></del>  
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>2.<span style={{fontSize:"20px"}}>95</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div className="" style={{background:"white",boxShadow:"0 0 10px 0 black"}}>
   <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
   <del style={{color:"red",right:"22%",position:"relative",top:"84%"
          ,fontSize:"18px"}}>10.<span style={{fontSize:"16px"}}>95</span></del>
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>9.<span style={{fontSize:"20px"}}>95</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div style={{background:"white",boxShadow:"0 0 10px 0 black"}}>
          <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
          <del style={{color:"red",right:"22%",position:"relative",top:"84%"
          ,fontSize:"18px"}}>5.<span style={{fontSize:"16px"}}>95</span></del>
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>4.<span style={{fontSize:"20px"}}>95</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div style={{background:"white",boxShadow:"0 0 10px 0 black"}}>
          <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
          <del style={{color:"red",right:"22%",position:"relative",top:"84%"
          ,fontSize:"18px"}}>6.<span style={{fontSize:"16px"}}>50</span></del>
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>5.<span style={{fontSize:"20px"}}>00</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div className=""></div>
      </div>
      <div className="offert mt-3">
          <div></div>
          <div className="" style={{boxShadow:"0 0 10px 0 black",background:"white"}}>
   <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
   <del style={{color:"red",right:"22%",position:"relative",top:"84%"
          ,fontSize:"18px"}}>5.<span style={{fontSize:"16px"}}>15</span></del>  
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>3.<span style={{fontSize:"20px"}}>95</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div className="" style={{background:"white",boxShadow:"0 0 10px 0 black"}}>
   <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
   <del style={{color:"red",right:"22%",position:"relative",top:"84%"
          ,fontSize:"18px"}}>3.<span style={{fontSize:"16px"}}>95</span></del>
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>2.<span style={{fontSize:"20px"}}>25</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div style={{background:"white",boxShadow:"0 0 10px 0 black"}}>
          <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
          <del style={{color:"red",right:"22%",position:"relative",top:"84%"
          ,fontSize:"18px"}}>3.<span style={{fontSize:"16px"}}>95</span></del>
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>2.<span style={{fontSize:"20px"}}>25</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div style={{background:"white",boxShadow:"0 0 10px 0 black"}}>
          <Button className="ml-2 mt-2" style={{border:"none",color:"black",outline:"none",background:"#FFDD73"}}><i class="fas fa-shopping-cart"></i></Button>
          <del style={{color:"red",right:"22%",position:"relative",top:"84%"
          ,fontSize:"18px"}}>3.<span style={{fontSize:"16px"}}>95</span></del>
            <img src={img} className="pt-2" style={{width:"100%",height:"150px"}}/>
<h6 style={{textAlign:"center"}}>name</h6>
<div style={{width:"100%",height:"39px",background:"#F5E04F"}}>
    <h4 style={{fontWeight:"bold",textAlign:"center",}}>2.<span style={{fontSize:"20px"}}>50</span></h4>
       <div style={{transform:"rotate(-90deg)",
       color:"white",textAlign:"center",width:"20%",height:"20px",background:"red",
       position:"relative",left:"85%",top:"-70%"}}>SAR</div>   
</div>
          </div>
          <div className=""></div>
      </div>
    </div>
    </Container>
    </Col>
    </Row>
    </Container>
    <Footer/>

            </>
        )
    }
}

import React, {useState } from 'react'
import {Navbar,Row,Col,Nav,Container,Image,Card,CardGroup,CardDeck,Badge,Toast,Button,Form,FormControl,Carousel} from 'react-bootstrap'
import logo from "../logo/logo.svg";
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import image from "../xadok/s.png";
import img from "../xadok/pexels-photo-102104.jpeg"
import img6  from "../xadok/01.png"
import week from "../xadok/xf.png";
import national from "../xadok/360_F_238400000_QcZixCfXo04CC3eeu0TK0G9XGTwBRFKi.jpg"
import camp from "../xadok/camping-with-caravan-illustration_23-2148670948.jpg"
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
import Footer from "../Components/footer"

import {Link} from 'react-router-dom';


export default function Explore() {
    const [show,setShow] = useState(false)
    // const [appState,setApp] = useState(null);
    // function toggleAction(){
    //   if(appState === null){
    //     return "activee";
    //   }else {
    //     return "inactive"
    //   }
    // }
        return (
            <>
                <Container fluid>
  <Row >
    <Col lg={3} >
  <Link to="/">
  <Navbar.Brand  className="ml-2 pt-2" ><img src={logo} style={{height:"10vh"}} /></Navbar.Brand>
  </Link>
  <Nav className="flex-column"  style={{width:"100%",padding:"0",margin:"0"}} >
<Link to="/offers"style={{outline:"none",listStyle:"none",textDecoration:"none"}}>
<Nav.Link href="/offers" className="mt-3"
  style={{color:"#223142"}}><img 
  style={{height:"3vh"}} src={offe}/>
  <b className="ml-3" style={{fontWeight:"normal"}}> Offers</b></Nav.Link>
  </Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={fruit}/><b className="ml-3" style={{fontWeight:"normal"}}> Fruits & Vegetables</b></Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={diary}/><b className="ml-3" style={{fontWeight:"normal"}}> Dairy & Eggs</b></Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={drink}/><b className="ml-3" style={{fontWeight:"normal"}}>&nbsp;Drinks</b></Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={meat}/><b className="ml-2" style={{fontWeight:"normal"}}>&nbsp;&nbsp;Meat, Fish & Chicken</b></Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={frozen}/><b className="ml-2" style={{fontWeight:"normal"}}>&nbsp;&nbsp;Frozen</b></Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={cans}/><b className="ml-2" style={{fontWeight:"normal"}}>&nbsp;&nbsp;&nbsp;Cans & jars</b></Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={pack}/><b className="ml-2" style={{fontWeight:"normal"}}>&nbsp; Packet & Cereals</b></Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={choco}/><b className="ml-2" style={{fontWeight:"normal"}}>&nbsp;&nbsp;Chocolate,Snacks & Backery</b></Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={baby}/>&nbsp;&nbsp;&nbsp;&nbsp;Baby</Nav.Link>
  <Nav.Link className="mt-1 ml-1"style={{color:"#223142"}}><img style={{height:"3.1vh"}} src={diy}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DIY & Household</Nav.Link>
  <Nav.Link className="mt-1 "  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={appli}/>&nbsp;&nbsp;&nbsp;&nbsp;Home & Kichen Appliances</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={wellness}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wellness</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={school}/>&nbsp; &nbsp;&nbsp; Back to School</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={various}/>&nbsp; &nbsp;&nbsp;Varoius & fresh nuts</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={elect}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Electronics</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={pet}/>&nbsp; &nbsp;&nbsp;&nbsp;Pet Supplies</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={toys}/>&nbsp;&nbsp;&nbsp;&nbsp; Toys</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={fashion}/>&nbsp; &nbsp;&nbsp;&nbsp;Fashion</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"2.8vh"}} src={decoration}/>&nbsp; &nbsp;&nbsp;&nbsp;Home Decor Furniture</Nav.Link>
  <Nav.Link className="mt-1"  style={{color:"#223142"}}><img style={{height:"3vh"}} src={hair}/> &nbsp; &nbsp;&nbsp;Hair Care</Nav.Link>

</Nav>
    </Col>
    <Col lg={9}  >
    <Container fluid style={{marginLeft:"-99px"}}>
    <Navbar className="mt-1 " style={{width:"115%"}}>
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

    <div
      style={{backgroundSize:"100% 100%",
      height:"47vh",width:"113%",
      backgroundImage:`url(${image})`,
      marginTop:"3.5%",display:"flex",justifyContent:"center",alignItems:"center"}}
    >
    <img src={img6} style={{width:"80px",
      height:"80px",borderRadius:"100%"}}/>
      </div>

 <h4 style={{color:"#223142",fontWeight:"bold", 
 marginTop:"15px",marginLeft:"20px",fontSize:"29px"}}>Ramez Offers</h4>
  
  <CardGroup style={{marginTop:"30px",border:"none",width:"109%",marginLeft:"30px"}}>
  <Card style={{border:"0"}}>
    <Link to="/weekendDayOffer" style={{textDecoration:"none"}}>
      <Card.Img variant="top" src={week} style={{height:"25vh",borderRadius:"10px",width:"96%"}}/>
    <p className="mt-2 pl-2 text-muted">Weekend Offers</p>
    </Link>
  </Card>
  <Card style={{border:"0"}}>
  <Link to="/nationalDayOffer" style={{textDecoration:"none"}}>
     <Card.Img variant="top" src={national} style={{height:"25vh",borderRadius:"10px",width:"96%"}}/>
    <p className="mt-2 pl-2 text-muted">National Day Offers</p>
</Link>
</Card>
  <Card style={{border:"0"}}>
    <Card.Img variant="top" src={camp} style={{height:"25vh",borderRadius:"10px",width:"96%"}}/>
    <p className="mt-2 pl-2 text-muted">Camping Season</p>
  </Card>
</CardGroup>
<div style={{background:"#F5F5F5",
height:"130vh",paddingRight:"30px",width:"113%"}}>
  <div style={{display:"flex",justifyContent:"space-between"}}>
<h4 style={{paddingTop:"60px",fontWeight:"bold",fontSize:"30px"}} 
className=" pl-4 ml-3">Suggested Products</h4>
<div style={{display:"flex",height:"7vh",position:"relative",
             marginTop:"5%",
             width:"70%",justifyContent:"space-around"}}>{
      show?<div style={{display:"flex",justifyContent:"space-between",width:"85%"}}>
      <Button style={{borderRadius:"5px",boxShadow:"0 0 7px 0 silver",background:"white",color:"black",border:"none"}}><i class="fas fa-arrow-up"></i>&nbsp;Price Increasing</Button>
      <Button style={{borderRadius:"5px",boxShadow:"0 0 7px 0 silver",background:"white",color:"black",border:"none"}}><i class="fas fa-arrow-down"></i>&nbsp;Price Descending</Button>
      <Button style={{borderRadius:"5px",boxShadow:"0 0 7px 0 silver",background:"white",color:"black",border:"none"}}><i class="fas fa-star"></i>&nbsp;Best Seller</Button>
      <Button style={{borderRadius:"5px",boxShadow:"0 0 7px 0 silver",background:"white",color:"black",border:"none"}}><i class="fas fa-info-circle"></i>&nbsp;&nbsp;The Newest</Button></div>:null
      }
      <Button onClick={()=>setShow(!show)}
      style={{position:"absolute",right:"0",fontSize:"20px",
      outline:"none",background:"#B6B6B6",border:"none",borderRadius:"7px",
      height:"7vh",width:"6%"}}>
     <i class="fas fa-sort-amount-up"></i>
    </Button>
      
</div>
</div>
<CardDeck className="ml-3 mt-4 pt-4" >
  <Card style={{border:"0"}}>
    <Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
    <p className="pl-2 text-muted"><del>1.200</del></p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
     <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
         <p className="pt-1 pl-2" style={{}}>25%</p>
     </div>
     </div>
     <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
     Milk & Hazelnut</p>
    <Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
      <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
    </Card.Footer>
  </Card>
  <Card style={{border:"0"}}>
    <Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
    <p className="pl-2 text-muted"><del>1.200</del></p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
     <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
         <p className="pt-1 pl-2" style={{}}>25%</p>
     </div>
     </div>
     <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
     Milk & Hazelnut</p>
    <Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
      <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
    </Card.Footer>
  </Card>
  <Card style={{border:"0"}}>
    <Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
    <p className="pl-2 text-muted"><del>1.200</del></p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
     <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
         <p className="pt-1 pl-2" style={{}}>25%</p>
     </div>
     </div>
     <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
     Milk & Hazelnut</p>
    <Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
      <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
    </Card.Footer>
  </Card>
  <Card style={{border:"0"}}>
    <Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
    <p className="pl-2 text-muted"><del>1.200</del></p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
     <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
         <p className="pt-1 pl-2" style={{}}>25%</p>
     </div>
     </div>
     <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
     Milk & Hazelnut</p>
    <Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
      <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
    </Card.Footer>
  </Card>
  <Card style={{border:"0"}}>
    <Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
    <p className="pl-2 text-muted"><del>1.200</del></p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
     <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
         <p className="pt-1 pl-2" style={{}}>25%</p>
     </div>
     </div>
     <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
     Milk & Hazelnut</p>
    <Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
      <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
    </Card.Footer>
  </Card>
</CardDeck>
<CardDeck className="ml-3 mt-3 pt-2" >
<Card style={{border:"0"}}>
    <Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
    <p className="pl-2 text-muted"><del>1.200</del></p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
     <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
         <p className="pt-1 pl-2" style={{}}>25%</p>
     </div>
     </div>
     <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
     Milk & Hazelnut</p>
    <Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
      <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
    </Card.Footer>
  </Card>
  <Card style={{border:"0"}}>
    <Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
    <p className="pl-2 text-muted"><del>1.200</del></p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
     <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
         <p className="pt-1 pl-2" style={{}}>25%</p>
     </div>
     </div>
     <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
     Milk & Hazelnut</p>
    <Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
      <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
    </Card.Footer>
  </Card>
  <Card style={{border:"0"}}>
    <Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
    <p className="pl-2 text-muted"><del>1.200</del></p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
     <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
         <p className="pt-1 pl-2" style={{}}>25%</p>
     </div>
     </div>
     <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
     Milk & Hazelnut</p>
    <Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
      <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
    </Card.Footer>
  </Card>
  <Card style={{border:"0"}}>
    <Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
    <p className="pl-2 text-muted"><del>1.200</del></p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
     <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
         <p className="pt-1 pl-2" style={{}}>25%</p>
     </div>
     </div>
     <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
     Milk & Hazelnut</p>
    <Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
      <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
    </Card.Footer>
  </Card>
  <Card style={{border:"0"}}>
    <Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
    <p className="pl-2 text-muted"><del>1.200</del></p>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
     <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
         <p className="pt-1 pl-2" style={{}}>25%</p>
     </div>
     </div>
     <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
     Milk & Hazelnut</p>
    <Card.Footer style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
      <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>

  </Container>

    </Col>
    </Row>
    </Container>
    <div className="mt-4">
<Footer/>
</div>
            </>
        )
    
}

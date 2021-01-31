import React, { useState,} from 'react'
import {Navbar,Row,Col,Nav,Container,Image,Card,CardGroup,Carousel,Modal,CardDeck,Accordion ,Button,Form,Overlay} from 'react-bootstrap'
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
function MyVerticallyCenteredModal(props) {
  const [num ,setNum] = useState(1);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div style={{display:"flex"}}>

            <div>
          <div style={{width:"250px",height:"250px",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"
          ,border:"1px solid silver",marginLeft:"5%",marginTop:"3%"}}>
            <img src={img} style={{width:"100%",height:"100%",borderTopRightRadius:"15px",borderTopLeftRadius:"15px"}}/>
          </div>

          <div style={{marginLeft:"5%",display:"flex"}}>
          <div style={{width:"66px",height:"62px",border:"1px solid silver",borderBottomLeftRadius:"10px"}}>
            <img src={img}  style={{width:"100%",height:"100%",borderBottomLeftRadius:"10px"}}/>
          </div>
          <div style={{width:"66px",height:"62px",border:"1px solid silver",}}>
            <img src={img}  style={{width:"100%",height:"100%",}}/>
          </div>
          <div style={{width:"66px",height:"62px",border:"1px solid silver",}}>
            <img src={img}  style={{width:"100%",height:"100%",}}/>
          </div>
          <div style={{width:"65px",height:"62px",border:"1px solid silver",borderBottomRightRadius:"10px"}}>
            <img src={img}  style={{width:"100%",height:"100%",borderBottomRightRadius:"10px"}}/>
          </div>
          </div>
          </div>
<div style={{marginLeft:"4%"}}>
  <h5 className="mt-1" style={{width:"85%"}}>KRAFT CREAM CHEESE SPREAD ORIGINAL 230 GR</h5>
  <h6 className="mt-4" style={{fontSize:"14px",fontWeight:"bold"}}>Categeory: <span style={{fontWeight:"lighter"}} > Supermarket</span></h6>
  <h6 style={{fontSize:"14px",fontWeight:"bold"}}>Description: <span style={{fontWeight:"lighter"}}>Kraft Cream Cheese Spread <br></br>Original 3 X 230 gr</span></h6>
  <del className="text-muted" style={{fontSize:"18px",fontWeight:"normal",marginTop:"-5%"}}>2.090</del>
  <div style={{display:"flex",justifyContent:"space-between",width:"107%"}}>
  <h3 style={{color:"#E3424B"}}>1.050<span style={{fontSize:"14px",color:"silver"}}>BHD</span></h3>
  <div style={{width:"10%",marginLeft:"20%",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",
  clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
  <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
  </div>

  <p style={{fontSize:"12px",color:"silver"}}>physical product for the most accurate information and warnings. For additional
     information contact the retailer. Actual weight may based on 
     seasonality and other factors.Estimated price is approimate and provided only for refrence</p>
      <div style={{display:"flex",marginLeft:"30%"}}>
       <Button style={{background:"#F6F6F6",
       color:"black",
       fontWeight:"bold",width:"40px",
       height:"40px",fontSize:"20px",
       textAlign:"center", display:"flex",alignItems:"center",
       border:"none",borderTopLeftRadius:"12px",
       borderBottomLeftRadius:"12px"}} onClick={minus}>-</Button>
     <Button style={{border:"none",color:"black",background:"white"}}>{num}</Button>
       <Button  style={{background:"#F6F6F6",color:"black",display:"flex",alignItems:"center",
       fontWeight:"bold",width:"40px",height:"40px",fontSize:"20px",
       textAlign:"center", 
       border:"none",borderTopRightRadius:"12px",
       borderBottomRightRadius:"12px"}} onClick={plus}>+</Button>
        </div>
     <Button style={{marginLeft:"60%",
     position:"relative",marginTop:"-20%",
     border:"none",background:"#FFDD73", color:"black"}}>
       <i class="fas fa-shopping-cart"></i> &nbsp;
        Add to Cart</Button>
     <Button style={{border:"none",color:"#BDBDBD",
     position:"absolute",marginTop:"-5%", marginLeft:"2%",
     background:"#F6F6F6"}}>
       <i class="fas fa-heart"></i></Button>
</div>


          </div>
        </Modal.Title>
      </Modal.Header > 
      <Modal.Body style={{border:"none"}}>
      <h4 className="pl-3">Alternative Products</h4>

      <Carousel  style={{background:"#F6F6F6"}}>
  <Carousel.Item style={{background:"#F6F6F6"}}>
  <CardDeck className="ml-3 mt-4 pt-4" >

<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",background:"#F6F6F6"}}>
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
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",background:"#F6F6F6"}}>
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
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
</CardDeck>
  </Carousel.Item>
  <Carousel.Item style={{background:"#F6F6F6"}}>
  <CardDeck className="ml-3 mt-4 pt-4" style={{background:"#F6F6F6"}} >
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",background:"#F6F6F6"}}>
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
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
  <small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
</CardDeck>
  </Carousel.Item>

</Carousel>


{/* =========================New ArivaL----------------------- */}

      </Modal.Body>
        <h4 className="pl-2">Similar Products</h4>
      <Modal.Footer style={{border:"none"}}>
    

<Carousel  style={{background:"#F6F6F6"}}>
<Carousel.Item style={{background:"#F6F6F6"}}>
<CardDeck className="ml-3 mt-4 pt-4" >

<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",background:"#F6F6F6"}}>
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
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
</CardDeck>
</Carousel.Item>
<Carousel.Item style={{background:"#F6F6F6"}}>
<CardDeck className="ml-3 mt-4 pt-4" style={{background:"#F6F6F6"}} >
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",background:"#F6F6F6"}}>
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
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
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
<small style={{background:"#FBDB73",fontSize:"15px",color:"black"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
</CardDeck>
</Carousel.Item>

</Carousel>
      </Modal.Footer>
    </Modal>
  );
}

export default function Eggs()  {
  const [show,setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);


  // const [show, setShow] = useState(false);
  // const target = useRef(null);


   
        return (
            <>
            <Container fluid>
<Row >
<Col sm={3} >
<Link to="/">
<Navbar.Brand  className="ml-2 pt-2" ><img src={logo} style={{height:"10vh"}} /></Navbar.Brand>
</Link>
<Nav className="flex-column"  style={{width:"100%",padding:"0",margin:"0"}}>
<Nav.Link className="mt-2">
      <Accordion defaultActiveKey="0" style={{marginLeft:"-10px"}}>
    <Link to="/reoffer"><Accordion.Toggle className="p-3" variant="link" eventKey="0"
       style={{textAlign:"start",outline:"none",border:"none",
       fontWeight:"bold",color:"#E3424B",background:"white",
       borderRadius:"9px",width:"85%"}}>
      <img style={{height:"3vh",marginLeft:"-2%"}} src={offe}/>&nbsp;&nbsp; Offers
      </Accordion.Toggle>
      </Link>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="ml-4" style={{marginTop:"-10px"}}>
      <div className="p-2 pl-4" 
          style={{background:"#FBDB73",borderRadius:"9px",
          width:"105%",marginLeft:"-40px",marginTop:"-3%"}} >
        <h6 className="pl-4 pt-1" style={{color:"black",
        fontWeight:"lighter",marginLeft:"-4%"}}>Dairy & eggs</h6>
        </div>
        <h6 style={{color:"#223142",fontWeight:"lighter"}} className="mt-2">Drinks</h6>
        <h6 style={{color:"#223142",fontWeight:"lighter"}} className="mt-4 ">Meat,Fish & Chicken</h6>
        <h6 style={{color:"#223142",fontWeight:"lighter"}} className="mt-4  ">Frozen</h6>
        <h6 style={{color:"#223142",fontWeight:"lighter"}} className="mt-4  ">Cans & Jars</h6>
        <h6 style={{color:"#223142",fontWeight:"lighter"}} className="mt-4  ">Packet & Cereals</h6>
        <h6 style={{color:"#223142",fontWeight:"lighter"}} className="mt-4 ">Chocolate,Snacks & Bakery</h6>
        <h6 style={{color:"#223142",fontWeight:"lighter"}} className="mt-4  ">DIY & Household</h6>
        <h6 style={{color:"#223142",fontWeight:"lighter"}} className="mt-4  ">Wellness & Looks</h6>
        <h6 style={{color:"#223142",fontWeight:"lighter"}} className="mt-4  ">Fashion</h6>

      </Card.Body>
    </Accordion.Collapse >
    <Nav.Link  style={{color:"#223142",textDecoration:"none"}}>
      <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{textDecoration:"none",color:"#223142",marginLeft:"-19px",textAlign:"start",outline:"none",border:"none"}}>
      <img style={{height:"3vh"}} src={fruit}/>&nbsp; &nbsp;&nbsp;&nbsp;Fruits & Vegetables
      </Accordion.Toggle>
      </Nav.Link>
     
</Accordion>
</Nav.Link>
  <Nav.Link  style={{color:"#223142",marginTop:"-3%"}}><img style={{height:"3vh"}} src={diary}/><b className="ml-3" style={{fontWeight:"normal"}}> Dairy & Eggs</b></Nav.Link>
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
<Col sm={9}  >
<Container fluid style={{marginLeft:"-95px"}}>
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
      height:"41vh",width:"113%",
      backgroundImage:`url(${image})`,
      marginTop:"3%",display:"flex",justifyContent:"center",alignItems:"center"}}
    >
    <img src={img6} style={{width:"80px",
      height:"80px",borderRadius:"100%"}}/>
      </div>
<div style={{background:"#F5F5F5",width:"113%",height:"200vh",paddingRight:"30px"}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 style={{paddingTop:"60px",fontWeight:"bold",fontSize:"30px"}} 
className=" pl-4 ml-3">Dairy & Eggs</h4>
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
<Card.Footer onClick={() => setModalShow(true)}  style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
<Card.Footer  onClick={() => setModalShow(true)}   style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
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
<Card.Footer   onClick={() => setModalShow(true)}  style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
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
<Card.Footer  onClick={() => setModalShow(true)}   style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
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
<Card.Footer  onClick={() => setModalShow(true)}  style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
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
<Card.Footer onClick={() => setModalShow(true)}   style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
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
<Card.Footer  onClick={() => setModalShow(true)}   style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
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
<Card.Footer  onClick={() => setModalShow(true)}   style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
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
<Card.Footer  onClick={() => setModalShow(true)}   style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
</CardDeck>
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
<Card.Footer  onClick={() => setModalShow(true)}   style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
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
<Card.Footer  onClick={() => setModalShow(true)}   style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}><i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
</Card>
<Card style={{border:"0",background:"#F5F5F5"}}>
</Card>
<Card style={{border:"0",background:"#F5F5F5"}}>
</Card>
<Card style={{border:"0",background:"#F5F5F5"}}>
</Card>
</CardDeck>
</div>
</Container>
</Col>
</Row>
</Container>
<Footer/>

        </>
        )
    }

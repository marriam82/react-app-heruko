import React, {useState} from 'react'
import logo from "../logo/logo.svg";
import explore from "../sidebarw/explore.svg"
import order from "../logo/orders.svg";
import fav from "../logo/favourites.svg";
import setting from "../logo/setting.svg";
import message from "../logo/messages.svg";
import Footer from "../Components/footer";
import delivery from "../topbar/delivery address.svg";
import img from "../xadok/pexels-photo-102104.jpeg"
import deal from "../topbar/best deals.svg";
import {Link} from 'react-router-dom';
import {Navbar,Row,Col,Nav,Container,Modal,Card,CardDeck,CardGroup,Badge,Toast,Button,Form,FormControl,Carousel} from 'react-bootstrap'
import "../App.css";
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

export default function Exploring() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
              <Container  fluid>
  <Row className="grid">
    <Col sm={2} >
        <Navbar.Brand href="#home" className=" pt-2" style={{width:"100%"}}>
          <img src={logo} id="imgg" style={{height:"10vh"}} />
          </Navbar.Brand>      
        <Nav defaultActiveKey="/" className="flex-column" >
<Link to="/" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-3 color" href="#home" 
  style={{color:"black",}}>
<i class="fas fa-home house" style={{fontSize:"19px"}}></i>
&nbsp; &nbsp; <span className="home">Home</span></Nav.Link></Link>
  
  <Nav.Link className="mt-2 p-3 font" 
  style={{background:"#E3424B",borderRadius:"10px",
  color:"white",fontWeight:"bold",width:"112%"}}>  
  <img style={{height:"3vh",marginLeft:"1px"}} 
  src={explore}/>&nbsp; &nbsp; &nbsp;<span className="home">Explore</span>
  </Nav.Link>
  <Link to="/favorite" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font"  href="#favorite" style={{color:"black"}}>
  <img style={{height:"3.2vh",marginLeft:"1px"}} src={fav}/>&nbsp; &nbsp;
   &nbsp; <span className="home"> Favourite</span></Nav.Link></Link>
   <Link to="/orders" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font"  href="/orders" style={{color:"black"}}>
  <img style={{height:"3vh",}} src={order}/>&nbsp;
   &nbsp; &nbsp;<span className="home">Orders</span></Nav.Link></Link>
   <Link to="/messages" style={{textDecoration:"none"}}>

  <Nav.Link className="mt-2 font" href="/messages" style={{color:"black"}}>
  <img style={{height:"2.5vh"}} src={message}/>&nbsp; 
  &nbsp; &nbsp;<span className="home">Messages</span> &nbsp;
   &nbsp; &nbsp; &nbsp;<Badge id="no" className="badge" style=
   {{background:"#E3424B",borderRadius:'100%',color:"white"}}>2</Badge>
   </Nav.Link></Link>
  <Link to="/settings" style={{textDecoration:"none"}}>

  <Nav.Link className="mt-2 set font" href="/settings" style={{color:"black"}}><img style={{height:"3vh"}} src={setting}/>&nbsp; &nbsp; &nbsp;<span className="home">Settings</span></Nav.Link>
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
{/* ============ */}
<div style={{background:"#F5F5F5",width:"100%",height:"80vh",
paddingRight:"30px"}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 style={{paddingTop:"60px",fontWeight:"bold",fontSize:"25px"}} 
className=" pl-4 ml-3">Best Deals&nbsp;&nbsp;<span style={{color:"#E3424B",fontWeight:"bold",fontSize:"13px"}}>See All > </span></h4> 
</div>
<CardDeck className="ml-3 mt-4 pt-4" >
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
<Card.Img variant="top" src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",
 background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
</CardDeck>
{/* =========================New ArivaL----------------------- */}
</div>
<div style={{background:"#E3424B",width:"100%",height:"80vh",paddingRight:"30px"}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 style={{paddingTop:"60px",fontWeight:"bold",fontSize:"25px",color:"white"}} 
className=" pl-4 ml-3">New Arrival&nbsp;&nbsp;<span style={{color:"#FBDB73",fontWeight:"bold",fontSize:"13px"}}>See All > </span></h4> 
</div>
<CardDeck className="ml-3 mt-4 pt-4" >
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
</CardDeck>

</div>
{/* ------------------------Top seller=============== */}
<div style={{background:"#F5F5F5",width:"100%",height:"80vh",paddingRight:"30px"}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 style={{paddingTop:"60px",fontWeight:"bold",fontSize:"25px"}} 
className=" pl-4 ml-3">Top Seller&nbsp;&nbsp;<span style={{color:"#E3424B",fontWeight:"bold",fontSize:"13px"}}>See All > </span></h4> 
</div>
<CardDeck className="ml-3 mt-4 pt-4" >
<Card style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
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
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
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
<Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>
<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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

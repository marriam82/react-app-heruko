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
import master from "../xadok/master.png";
// import img from "../xadok/pexels-photo-102104.jpeg"
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

              <Container  fluid>
  <Row id="grid">
    <Col sm={2} className="sidebar">
        <Navbar.Brand href="/" className=" pt-2 logo" style={{width:"100%"}}>
          <img src={logo}  className="logo-img" style={{height:"10vh"}} />
          </Navbar.Brand>      
        <Nav defaultActiveKey="/" className="flex-column" >
<Link to="/" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-3 hs" href="/" 
  style={{color:"black",background:"transparent"}}>
<i class="fas fa-home house-s" style={{fontSize:"19px"}}></i>
&nbsp; &nbsp; <span className="home">Home</span></Nav.Link></Link>
  
  <Nav.Link className="mt-2 p-3 color" 
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
<div className="bestdeal1" style={{background:"#F5F5F5",width:"100%",height:"80vh",
paddingRight:"30px"}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 style={{paddingTop:"60px",fontWeight:"bold",fontSize:"25px"}} 
className=" pl-4 ml-3">Best Deals&nbsp;&nbsp;<span style={{color:"#E3424B",fontWeight:"bold",fontSize:"13px"}}>See All > </span></h4> 
</div>
<CardDeck className="ml-3 mt-4 pt-4" >
<Card className="bestdealp" style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
<Card.Img variant="top" src={img} className="p1" style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2 pprice" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",
 background:"#E3424B",fontSize:"12px",textAlign:"center",
 height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2 ptag" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2 pdec" style={{color:"#223142",fontSize:"11px"
 ,fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer  onClick={() => setModalShow(true)} 
 style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small  className="pfooter"  style={{background:"#FBDB73"
  ,fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> 
    &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card className="bestdealp" style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top"  className="p1"src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2 pprice" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2 ptag" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2 pdec" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small  className="pfooter" style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>

<Card className="bestdealp"  style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" className="p1"  src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div  style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2 pprice" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2 ptag" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2 pdec" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small className="pfooter"  style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card className="bestdealp"  style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" className="p1"  src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2 pprice" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2 ptag" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2 pdec" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small className="pfooter"  style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card className="bestdealp"  style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" className="p1"  src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2 pprice" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2 ptag" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2 pdec" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small className="pfooter"  style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>

</CardDeck>



{/* =========================New ArivaL----------------------- */}
</div>
<div className="bestdeal1" style={{background:"#E3424B",width:"100%",height:"80vh",paddingRight:"30px"}}>
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
<div className="bestdeal1"  style={{background:"#F5F5F5",width:"100%",height:"80vh",paddingRight:"30px"}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 style={{paddingTop:"60px",fontWeight:"bold",fontSize:"25px"}} 
className=" pl-4 ml-3">Top Seller&nbsp;&nbsp;<span style={{color:"#E3424B",fontWeight:"bold",fontSize:"13px"}}>See All > </span></h4> 
</div>
<CardDeck className="ml-3 mt-4 pt-4" >

<Card className="bestdealp" style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
<Card.Img variant="top" src={img} className="p1" style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2 pprice" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",
 background:"#E3424B",fontSize:"12px",textAlign:"center",
 height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2 ptag" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2 pdec" style={{color:"#223142",fontSize:"11px"
 ,fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer  onClick={() => setModalShow(true)} 
 style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small  className="pfooter"  style={{background:"#FBDB73"
  ,fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> 
    &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card className="bestdealp" style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top"  className="p1"src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2 pprice" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2 ptag" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2 pdec" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small  className="pfooter" style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card className="bestdealp"  style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" className="p1"  src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div  style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2 pprice" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2 ptag" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2 pdec" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small className="pfooter"  style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card className="bestdealp"  style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" className="p1"  src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2 pprice" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2 ptag" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2 pdec" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small className="pfooter"  style={{background:"#FBDB73",fontSize:"15px"}}>
    <i class="fas fa-shopping-cart"></i> &nbsp; &nbsp;Add to cart</small>
</Card.Footer>

</Card>
<Card className="bestdealp"  style={{border:"0",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",}}>
<Card.Img variant="top" className="p1"  src={img} style={{height:"23vh",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
<p className="pl-2 text-muted"><del>1.200</del></p>
<div style={{display:"flex",justifyContent:"space-between"}}>
<h4 className="pl-2 pprice" style={{color:"#E3424B",marginTop:"-20px"}}>0.835<span className="text-muted" style={{fontSize:"11px"}}>&nbsp;BDH</span></h4>
 <div style={{width:"30%",marginTop:"-20px",background:"#E3424B",fontSize:"12px",textAlign:"center",height:"4vh",color:"white",clipPath: "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)"}}>
     <p className="pt-1 pl-2 ptag" style={{}}>25%</p>
 </div>
 </div>
 <p className="pt-2 pdec" style={{color:"#223142",fontSize:"11px",fontWeight:"bold",textAlign:"center"}}>Digestive Choco 200g With<br></br>
 Milk & Hazelnut</p>
 <Card.Footer onClick={() => setModalShow(true)} style={{border:"0",borderBottomLeftRadius:"10px",background:"#FBDB73",borderBottomRightRadius:"10px"}}>
  <small className="pfooter"  style={{background:"#FBDB73",fontSize:"15px"}}>
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

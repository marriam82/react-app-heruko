import React, { Component } from 'react'
import p1 from "../xadok/download (1).png";
import logo from "../logo/logo.svg";
import explore from "../logo/explore.svg"
import order from "../logo/orders.svg";
import fav from "../logo/favourites.svg";
import setting from "../logo/setting.svg";
import message from "../sidebarw/messages.svg";
import Footer from "../Components/footer";
import delivery from "../topbar/delivery address.svg";
import deal from "../topbar/best deals.svg";
import {Link} from 'react-router-dom';
import {Navbar,Row,Col,Nav,Container,ProgressBar,Card,CardDeck,CardGroup,Badge,Toast,Button,Form,FormControl,Carousel} from 'react-bootstrap'
import "../App.css";
export default class messages extends Component {
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
<Link to="/orders"  style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font"  href="/orders" 
   style={{color:"black",}}>
  <img style={{height:"3vh",}} src={order}/>&nbsp; 
  &nbsp; &nbsp;<span className="home">Orders</span></Nav.Link></Link>

  <Nav.Link className="mt-2 p-3 font" href="/messages" 
  style={{background:"#E3424B",borderRadius:"10px",
  color:"white",fontWeight:"bold",width:"112%"}}>
  <img style={{height:"2.5vh"}} src={message}/>
  &nbsp; &nbsp; &nbsp;<span className="home">Messages</span> 
  &nbsp; &nbsp; &nbsp; &nbsp;<Badge id="no" 
  className="badge ml-4" style={{background:"#FFDD73",
  borderRadius:'100%',color:"black"}}>2</Badge></Nav.Link>
  
  <Link to="/settings" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 set font" href="/settings" style={{color:"black"}}><img style={{height:"3vh"}} src={setting}/>&nbsp; &nbsp; &nbsp;<span className="home">Settings</span></Nav.Link>
  </Link>
</Nav>
<Toast style={{marginTop:"40px",background:"#F7F7F7",width:"105%",
borderRadius:"16px",}} id="no" className="tost">
  <Toast.Header style={{color:"black",border:"none",background:"#F7F7F7",
  borderRadius:"16px"}}>
    <img src="holder.js/20x20?text=%20"
     className="rounded mr-2 ml-auto" alt="" style={{color:"black"}}/>
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

{/* ----------------------------------------------------- */}


      <div class="container mt-4 pt-3" >
   
<div class="messaging">

      <div class="inbox_msg">
   
        <div class="inbox_people">
        <div style={{marginTop:"5%",display:"flex",justifyContent:"space-between"}}>
          <h3 className="ml-2 pl-3" 
          style={{fontWeight:"bold",color:"#213043"}}>Messages</h3>

          <Button style={{color:"#213141",height:"6vh",background:"#F7F5F6",border:"none",borderRadius:"10px"}}>
              <i class="fas fa-sort-amount-down"></i>
               <b style={{color:"#213141",fontWeight:"normal",}}>&nbsp; &nbsp;Recent</b>&nbsp; &nbsp; <i class="fas fa-angle-down"></i></Button>
      </div>
          <div class="inbox_chat mt-4">
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img" style={{borderRadius:"100%"}}>
                 <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                <div class="chat_ib">
                  <h6>john Smith, CEO 
                <span class="chat_date">2 h ago</span></h6>
                <h5 className="mt-2" style={{fontWeight:
                    "bold",color:"#213141"}}>Special Offer Just for You!</h5>
                <p>Hi,we are running a new promotion in your area.If you want to get a free delivery, then use code 
                 <span style={{color:"#213141",fontWeight:"bold"}} > "FREE"</span> at the checkout.</p>
                 <Button className="mt-3" style={{fontWeight:"bold",background:"#FBFCFE",color:"#213141",border:"none"}}>Promotion</Button>
                 <Button className="ml-2 mt-3" style={{fontWeight:"bold",background:"#FBFCFE",color:"#fcc6da",border:"none"}}>Expires soon</Button>
                   <hr style={{width:"110%",marginTop:"5%"}}></hr>
                </div>
              </div>
            </div>



            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> 
                <img src={p1} alt="sunil"  style={{borderRadius:"100%"}}/> </div>
                <div class="chat_ib">
                <h6> Anna Support 
                <span class="chat_date">Yesterday</span></h6>
                <h5 className="mt-2" style={{fontWeight:
                    "bold",color:"#213141"}}>
                RE: Late Delivery Refund Request</h5>
                <p>Hi, I can conform that the delivery was late and you are entitlied for
                    a refund of 
                 <span style={{color:"#213141",fontWeight:"bold"}} > $3.99</span> Thank You.</p>
                   <hr style={{width:"110%",marginTop:"5%"}}></hr>
                </div>
              </div>
            </div>


            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img">
             <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                <div class="chat_ib">
                <h6>Mark Spencer,Driver 
                <span class="chat_date">3 days ago</span></h6>
                <h5 className="mt-2" style={{fontWeight:
                    "bold",color:"#213141"}}>Order is on the Way </h5>
                <p>Hello!👋I would like to let you know that I am om my way and your
                food is comming soon!</p>
                   <hr style={{width:"110%",marginTop:"5%"}}></hr>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                <div class="chat_ib">
                <h6>Samantha, Marketing Manager
                <span class="chat_date">8 Sep 2020</span></h6>
                <h5 className="mt-2" style={{fontWeight:
                    "bold",color:"#213141"}}>
                        Monthly Newsetter: September</h5>
                <p>Hi, here is everything that you need to know about deals,
            promotions, and other things in < span style={{color:"#213141",fontWeight:"bold"}} > September.
            </span>You can unsubscribe at any time</p>
            <Button className="mt-3" style={{fontWeight:"bold",background:"#FBFCFE",color:"#213141",border:"none"}}>Promotion</Button>
                  
                   <hr style={{width:"110%",marginTop:"5%"}}></hr>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> 
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                <div class="chat_ib">
                    <h6>James, Support 
                <span class="chat_date">30 Aug 2020</span></h6>
                <h5 className="mt-2" style={{fontWeight:
                    "bold",color:"#213141"}}>Special Offer Just for You!</h5>
                <p>This promotion is only available for delivery in San Francisco area.
                    We are really sorry for any inconvenience.
                 <span style={{color:"#213141",fontWeight:"bold"}} > "FREE"</span> at the checkout.</p>
                   <hr style={{width:"110%",marginTop:"5%"}}></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mesgs " style={{position:"relative",borderRadius:"14px"}}>
        <div class="chat_img"> 
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
                <div class="chat_ib">
                <h5 className="mt-2" style={{fontWeight:
                    "bold",color:"#213141"}}>John Smith,CEO </h5>
                    <h6>john@nobble.com
                <span class="chat_date"><i class="fas fa-chevron-right"></i></span></h6>

                    <div style={{}}>
                <hr style={{width:"35%",position:"absolute",left:"7%",top:"16%"}}></hr></div> 
                <h6 style={{fontWeight:"bold",
                marginLeft:"35%",marginTop:"7%"}}>18 Sep 2020 </h6>
                <div>
                <hr style={{width:"35%",
                position:"absolute",right:"5%",top:"16%"}}></hr></div>
                </div>
                  
          <div class="msg_history">
            <div class="incoming_msg" >
              <div class="received_msg"style={{marginTop:"10%"}}>
                <div class="received_withd_msg" >
                  <p>Hi, I didn't get my order on time today. Could you please refund me for a delivery?
                      Thanks</p>
                  <span class="time_date"> 2:07 PM</span></div>
              </div>
            </div>
            <div class="outgoing_msg">
              <div class="sent_msg">
                <p>Test which is a new approach to have all
                  solutions</p>
                <span class="time_date"> 11:01 AM    |    June 9</span> </div>
            </div>
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>Test, which is a new approach to have</p>
                  <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
              </div>
            </div>
            <div class="outgoing_msg">
              <div class="sent_msg">
                <p>Apollo University, Delhi, India Test</p>
                <span class="time_date"> 11:01 AM    |    Today</span> </div>
            </div>
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>We work directly with our designers and suppliers,
                    and sell direct to you, which means quality, exclusive
                    products, at a price anyone can afford.</p>
                  <span class="time_date"> 11:01 AM    |    Today</span></div>
              </div>
            </div>
          </div>
          <div class="type_msg">
            <div class="input_msg_write">
              <input type="text" class="write_msg" placeholder="Type a message" />
              <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>
      

      </div></div>
      







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

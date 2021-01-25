import React, { Component } from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import logo from "../logo/whitelogo.png";
import whatsapp from "../social/whatsapp.svg";
import insta from "../social/instagram.svg"
import twitter from "../social/twitter.svg"
import facebook from "../social/facebook.svg"
import "../App.css"

export default class footer extends Component {
    render() {
        return (
            <>
            <Container style={{background:"#223142",color:"white"}} fluid>
            <Row>
              <Col xs={3}>
                  <img className="pl-4 l" src={logo} style={{height:"19vh",paddingTop:"40px"}}/>
                  <h4 className="pl-4 pt-4 ll "style={{fontSize:"14px",fontWeight:"normal"
                  ,marginTop:"15px"}}>
                Welcome! This website is (quite<br id="no"></br> obviously) a small text generator.Its<br id="no"></br> fairly self explanatory</h4>
              </Col>
              <Col id="no" style={{fontSize:"12px",fontWeight:"normal",marginTop:"15px"}}>
              <h4  style={{fontSize:"15px",fontWeight:"bold",marginTop:"40px"}}>Latest offers</h4>
              <h4 className="mt-2" style={{fontSize:"13px",fontWeight:"normal"}}>National Day Set</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal",}}>Weekende Offer</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal"}}>Camping Seasons</h4>
              </Col>
            
<Col id="no" style={{fontSize:"12px",fontWeight:"normal",marginTop:"15px"}}>
              <h4 style={{fontSize:"15px",fontWeight:"bold",marginTop:"40px"}}>Categories</h4>
              <h4 className="mt-2" style={{fontSize:"13px",fontWeight:"normal"}}>Boutique</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal",}}>Electronics</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal"}}>Camping Seasons</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal"}}>Supermarket</h4>
              <h4 style={{fontSize:"13px",fontWeight:"normal"}}>Delivery Taxi</h4>

              </Col>
              <Col className="ab" style={{fontSize:"12px",fontWeight:"normal",marginTop:"15px"}}>
              <h4 className="about f" style={{fontSize:"15px",fontWeight:"bold",marginTop:"40px"}}>About Us</h4>
              <h4 className="mt-2 about f" style={{fontSize:"13px",fontWeight:"normal"}}>Help</h4>
              <h4 className="about f" style={{fontSize:"13px",fontWeight:"normal",}}>Custom Service</h4>
              <h4 className="about f" style={{fontSize:"13px",fontWeight:"normal"}}>Contacts</h4>
              </Col>
              <Col className="abc" style={{marginTop:"15px"}}>
              <h4 style={{fontSize:"15px",fontWeight:"bold",marginTop:"40px"}}>Contacts:</h4>
             <div className="whatsapp"><img src={facebook}className="mt-2" /> +97333505995</div><br></br>
              <img id="tw"src={whatsapp} style={{marginTop:"-10%"}}/>
              <img className=" ml-2" src={twitter} style={{marginTop:"-10%"}}/>
              <img className=" ml-2 " src={insta} style={{marginTop:"-10%"}}/>
              </Col>


            </Row>
           
           <div className="w-100 footer" style={{height:"12vh"}}>
           <h6 className="footer" style={{textAlign:"center",color:"white",fontWeight:"normal",paddingTop:"3%"}}> © Copyright 2020 <span style={{color:"#FFDD73"}}>www.xadok.com</span> All Right Reserved.</h6>
           </div>
          </Container>

 </> 

        )
    }
}

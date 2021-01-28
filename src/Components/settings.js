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
import profile from "../xadok/download.png";
import master from "../xadok/master.png";
import f1 from "../xadok/download (1).png";
import f2 from "../xadok/download.png";
// import master from "../xadok/master.png";
import img from "../xadok/pexels-photo-102104.jpeg"
import {Link} from 'react-router-dom';
import {Navbar,Row,Col,Nav,Container,Modal,Badge,Toast,Button,Form,FormControl,Carousel} from 'react-bootstrap'
import "../App.css";

export default function Settings() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show0, setShow0] = useState(false);
  const [show11,setShow11] = useState(false);
  const [show22,setShow22] = useState(false);
  const [show33,setShow33] = useState(false);
  const [show44,setShow44] = useState(false);







  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const handleClose11 = () => setShow11(false);
  const handleShow11 = () => setShow11(true);

  const handleClose22 = () => setShow22(false);
  const handleShow22 = () => setShow22(true);

  const handleClose33 = () => setShow33(false);
  const handleShow33 = () => setShow33(true);

  const handleClose44 = () => setShow44(false);
  const handleShow44 = () => setShow44(true);

  const handleClose0 = () => setShow0(false);
  const handleShow0 = () => setShow0(true);
        return (

            <div>

<Modal style={{border:"none",marginLeft:"1%"}} show={show22} 
      onHide={handleClose22}>
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
                 <Button  onClick={handleShow44}  style={{marginTop:"8%",
                 background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
          Checkout <span style={{fontSize:"12px"}}>(0.835 BHD)</span>
        </Button>
              </Modal.Footer>
            </Modal>
      {/* ------------------------------------cart modal 1 end-------------------- */}

   {/* ------------------------ user --------------------------- */}
   <Modal style={{border:"none",width:"420px",
              height:"150vh",marginLeft:"69%",marginTop:"-2.3%"}} 
              show={show11} onHide={handleClose11}>
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
        <Button onClick={handleShow33}  className="p-3"  style={{marginTop:"18%",background:"gray",border:"none",borderRadius:"7px",width:"80%",marginRight:"10%"}}  block>
          Create an account
        </Button>
        <Button c  style={{marginTop:"18%",background:"transparent",border:"none",borderRadius:"7px"}} size="lg" block>
          Create an account
        </Button>
      
      
              </Modal.Footer>
            </Modal>
              
              
              {/* ------------------- User end-------------------- */}
          {/* ------------------------location  ---------------------- */}
          <Modal show={show0}  style={{borderRadius:"1rem ",
           width:"390px",marginLeft:"40%",background:"transparent",border:"none"}} onHide={handleClose0} animation={false} >
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
              show={show33} onHide={handleClose33}>
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

                 <Modal className="set-m-1" style={{border:"none",width:"350px",
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
      
  <Button className="p-3" style={{marginTop:"5%",background:"#223142",
  border:"none",borderRadius:"7px"}}  block>
    Update profile
  </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={show1} className="set-m-2" style={{border:"none",width:"350px",
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
           <p className="pl-2" style={{fontSize:"13px"}}>Sn Francisco CA 94103 <br></br>94103</p>
           </div>
           <div style={{display:"flex",flexDirection:"column"}}>
             <button style={{borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"14px",color:"white"}}><i class="far fa-edit"></i></button>
             <button style={{marginTop:"10%",borderRadius:"5px",width:"30px",height:"32px",border:"none",
             background:"silver",fontSize:"12px",color:"white"}}><i class="fas fa-redo"></i></button>

           </div>
         </div>
       </Modal.Body>
       <h6 className="pl-4  pt-4" style={{fontWeight:"bold",marginTop:"12%"}}>+ Add new addresses</h6>

       <Modal.Footer style={{border:"none"}}>
    <Button style={{background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
    Confirm
  </Button>
       </Modal.Footer>
     </Modal>



     <Modal show={show2} className="set-m-2" style={{border:"none",width:"330px",
  marginTop:"6%",    borderRadius:"15px",marginLeft:"40%"}} onHide={handleClose2} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Marketing perferences</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
        <div className="mt-4" style={{display:"flex"}}>
       <Form.Check aria-label="option 2" disabled/> 
       <h6 className="text-muted">Promotional emails</h6>
       </div>
       <div  className="mt-4"  style={{display:"flex"}}>
       <Form.Check aria-label="option 1" /> 
       <h6 >Monthly newsletter</h6>
       </div>

         <div  className="mt-4"   style={{display:"flex"}}>
       <Form.Check aria-label="option 1" disabled/> 
       <h6 className="text-muted">Feedback collection</h6>
       </div>
       <div  className="mt-4"  style={{display:"flex"}}>
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



     <Modal show={show3} className="set-m-2 mt-4 " style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleClose3} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Payment methods</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
       <Button className="p-3 mt-3" style={{background:"#E3424B",border:"none",borderRadius:"7px"}} size="lg" block>
       <i class="far fa-address-card"></i>
  </Button>
  <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly",marginTop:"2%",fontSize:"30px"}}>
  <Button  style={{width:"145px",border:"none",background:"#F6F6F6",color:"#BFBFBF",fontSize:"30px",}}> <i class="fas fa-money-bill-wave"></i></Button>
  <Button style={{width:"145px",border:"none",background:"#F6F6F6",color:"#BFBFBF",fontSize:"30px"}}> <i class="fab fa-paypal"></i></Button>
  </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none",marginTop:"5%"}}>
    <Button className="p-3 mt-2"style={{background:"#223142",border:"none",borderRadius:"7px"}} size="lg" block>
    Update perferences
  </Button>
       </Modal.Footer>
     </Modal>
        
 {/* ------------------------- cart  2 ------------------------- */}
 <Modal style={{border:"none",height:"105vh",
      marginLeft:"1%",marginTop:"-2.2%"}} 
      show={show44} 
      onHide={handleClose44}>
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

     <Modal show={show4} className="set-m-2 mt-4 " style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleClose4} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>My cards <span style={{fontSize:"12px"}}>  (1)</span></Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
      
  <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly",marginTop:"2%",fontSize:"30px"}}>
  <Button  style={{width:"140px",border:"none",background:"#F6F6F6",height:"160px",borderRadius:"7px",
  color:"#BFBFBF",fontSize:"35px",}}> <i class="fas fa-plus"></i></Button>
  <div style={{width:"140px",border:"none",height:"160px",borderRadius:"7px"}}>
<img src={master} style={{width:"100%", height:"100%",borderRadius:"7px"
}}/>
  </div>
  </div>
       </Modal.Body>
     </Modal>


     <Modal show={show5} className="set-m-2 mt-4 " style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleClose5} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Support</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
       <div style={{display:"flex",
       justifyContent:"",marginTop:"2%",
       height:"45px"}}>
  
    <Button style={{color:"#223142",
    background:"#F6F6F6",
    borderRadius:"7px",border:"none"}}>
     <i class="far fa-envelope"></i>
      </Button>
      <div style={{marginLeft:"5%"}}>
        <h6 style={{fontSize:"12px"}}>LIVE CHAT</h6>
        <p style={{fontSize:"12px"}}>Waiting time:<b>5 min</b></p>
      </div>
    <Button  style={{color:"#223142",background:"none",border:"none",marginLeft:"35%"}}>
      <i class="fas fa-chevron-right"></i></Button>

    </div>
    <div style={{display:"flex",
       justifyContent:"",marginTop:"5%",
       height:"45px"}}>
  
    <Button style={{color:"#223142",
    background:"#F6F6F6",
    borderRadius:"7px",border:"none"}}>
  <i class="far fa-file-alt"></i>
      </Button>
      <div style={{marginLeft:"5%"}}>
        <h6 style={{fontSize:"12px"}}>FAQ</h6>
        <p style={{fontSize:"12px",color:"silver"}}>182 Park Row Street,Suit 8 </p>
      </div>
    <Button  style={{color:"#223142",background:"none",border:"none",marginLeft:"24%"}}>
      <i class="fas fa-chevron-right"></i></Button>

    </div>
    <div style={{display:"flex",
       justifyContent:"",marginTop:"5%",
       height:"45px"}}>
  
    <Button style={{color:"#223142",
    background:"#F6F6F6",
    borderRadius:"7px",border:"none"}}>
  <i class="fas fa-phone-alt"></i>
      </Button>
      <div style={{marginLeft:"5%"}}>
        <h6 style={{fontSize:"12px"}}>PHONE NUMBER</h6>
        <p style={{fontSize:"12px",color:"silver"}}>+1(987)1234098</p>
      </div>
 

    </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none",marginTop:"2%"}}>
   
       </Modal.Footer>
     </Modal>

     <Modal show={show6} className="set-m-2 mt-4 " style={{border:"none",width:"340px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleClose6} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Invite a friend
         </Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
       <div style={{display:"flex",
       justifyContent:"",marginTop:"1%",
       height:"40px"}}>
  
    <Button style={{color:"#223142",
    background:"#F6F6F6",
    borderRadius:"7px",border:"none"}}>
<i class="fas fa-plus"></i>
      </Button>
      <div style={{marginLeft:"5%",marginTop:"3%"}}>
        <h6 style={{fontSize:"14px"}}>Send a invite to a friend</h6>
      </div>
    </div>
    <h6 style={{color:"silver",marginTop:"8%",fontSize:"13px"}}>Invited friends (2)</h6>
    <div style={{display:"flex",
       justifyContent:"",marginTop:"5%",
       height:"45px"}}>
     <img src={f1} style={{width:"40px",height:"40px",borderRadius:"6px"}}/>

      <div style={{marginLeft:"5%"}}>
        <h6 style={{fontSize:"12px",fontWeight:"bold"}}>Kate Simpson</h6>
        <p style={{fontSize:"12px",color:"silver"}}>katesimpson@outlook.com</p>
      </div>
    <Button  style={{color:"silver",background:"none",border:"none",marginLeft:"24%"}}>
      <i class="fas fa-chevron-right"></i></Button>

    </div>
    <div style={{display:"flex",
       justifyContent:"",marginTop:"5%",
       height:"45px"}}>
     <img src={f2} style={{width:"40px",height:"40px",borderRadius:"6px"}}/>

      <div style={{marginLeft:"5%"}}>
        <h6 style={{fontSize:"12px",fontWeight:"bold"}}>Andrew Smith</h6>
        <p style={{fontSize:"12px",color:"silver"}}>andrewsmith@outlook.com</p>
      </div>
    <Button  style={{color:"silver",background:"none",border:"none",marginLeft:"24%"}}>
      <i class="fas fa-chevron-right"></i></Button>

    </div>
       </Modal.Body>

       <Modal.Footer style={{border:"none",marginTop:"2%"}}>
   
       </Modal.Footer>
     </Modal>

     <Modal show={show7} className="set-m-2 mt-4 " style={{border:"none",width:"300px",
      borderRadius:"15px",marginLeft:"40%"}} onHide={handleClose7} animation={false} >
       <Modal.Header style={{border:"none"}} closeButton>
         <Modal.Title style={{border:"none"}}>Discounts</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{border:"none"}}>
      
  
<div style={{textAlign:"center",width:"100%",height:"100px",background:"#F6F6F6",borderRadius:"5px",border:"1px dotted silver"}}>
  <h6 style={{fontSize:"15px",marginTop:"10%",fontWeight:"bold"}}>KL7L24</h6>
  <p style={{fontSize:"12px",color:"silver",}}>+ valid until 30 Sep 2020</p>
</div>
<div style={{textAlign:"center",width:"100%",marginTop:"7%",height:"100px",background:"#F6F6F6",borderRadius:"5px",border:"1px dotted silver"}}>
  <h6 style={{fontSize:"15px",marginTop:"4%",color:"#E3424B",marginTop:"10%",fontWeight:"bold"}}>AQ1P70</h6>
  <p style={{fontSize:"12px",color:"silver",}}>+ valid until 15 Nov 2020</p>
</div>
       </Modal.Body>
     </Modal>


                  <Container  fluid>
  <Row id="grid">
    <Col sm={2} className="sidebar">
        <Navbar.Brand href="/" className=" pt-2 logo" style={{width:"100%"}}>
          <img src={logo}  className="logo-img"  style={{height:"10vh"}} />
          </Navbar.Brand>      
        <Nav defaultActiveKey="" className="flex-column" >
<Link to="/" style={{textDecoration:"none"}}>
  <Nav.Link className="mt-3 hs" href="/" 
  style={{color:"black",background:"transparent"}}>
<i class="fas fa-home house-s" style={{fontSize:"20px"}}></i>
&nbsp; &nbsp; <span className="home">Home</span></Nav.Link></Link>
<Link to="/exploring" 
style={{textDecoration:"none"}}>
  <Nav.Link className="mt-2 font " href="/exploring" 
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
  <Nav.Link className="mt-2 p-3  color" href="/settings" style={{background:"#E3424B",borderRadius:"10px",
   color:"white",fontWeight:"bold",width:"112%"}}>
     <img style={{height:"3vh"}} className="sett" src={setting}/>&nbsp; &nbsp; &nbsp;<span className="home">Settings</span></Nav.Link>

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
   <Nav.Link  onClick={handleShow0} 
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
  <Button onClick={handleShow11} className="ml-3"  
  style={{background:"#E3424B",paddingRight:"14px",
  textAlign:"center",border:"none",borderRadius:"7px",height:"7vh",paddingLeft:"14px"}}>
    <i class="fas fa-user" style={{textAlign:"center"}}></i> </Button>

  <Button onClick={handleShow22} className="ml-2"  style={{background:"#E3424B",border:"none",borderRadius:"7px",height:"7vh",}}><i class="fas fa-shopping-cart"></i></Button>
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
    <Button onClick={handleShow4} style={{color:"#223142",background:"none",border:"none"}}>
      <i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>

    <h6 style={{color:"lightgray",marginTop:"3%",marginLeft:"%"}}>Others</h6>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}>
       <i class="far fa-question-circle"></i> &nbsp; <b>Support</b></Button>
    <Button   onClick={handleShow5}  style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}><i class="fas fa-user-plus"></i>&nbsp; <b>Invite a friend</b></Button>
    <Button  onClick={handleShow6} style={{color:"#223142",background:"none",border:"none"}}><i class="fas fa-chevron-right"></i></Button>
    </div>
    <hr style={{marginTop:"-1px"}}></hr>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"2%"}}>
    <Button style={{color:"#223142",background:"none",border:"none",marginLeft:"-1%"}}>
      <i class="far fa-money-bill-alt"></i> &nbsp; <b>Discounts</b></Button>
    <Button onClick={handleShow7} style={{color:"#223142",background:"none",
    border:"none"}}><i class="fas fa-chevron-right"></i></Button>
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

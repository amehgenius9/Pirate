import React from "react";
import Logo from '../../assets/icons/companyLogo.png'
import './Footer.Style.css'
import facebook from '../../assets/icons/logos_facebook.png'
import linkedIn from '../../assets/icons/bi_linkedin.png'
import twitter from '../../assets/icons/formkit_twitter.png'
import instagram from '../../assets/icons/ri_instagram-fill.png'

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="child">
        <img src={Logo} className="logoChild" alt="logo" />
        <p className="childParagraph">Own properties on Propout, and flip at your convenience. 
        We've enabled properties and other real estate assets further visibility through the Prop-tech digital market. Hence a safe and trusted tool for all kinds of real estate market
        </p>
      </div>
      <div className="contact">
        <p className="contactDetails">About Us</p>
        <p className="contactDetails">Contact Us</p>
        <p className="contactDetails">Join WaitList</p>
      </div>
      <div className="iconContainer">
        <p className="iconHeader">Follow Us</p>
        <div className="iconsLogo">
          <img src={facebook} alt="facebook" className="iconImg" />
          <img src={linkedIn} alt="facebook" className="iconImg" />
          <img src={twitter} alt="facebook" className="iconImg" />
          <img src={instagram} alt="facebook" className="iconImg" />
        </div>
      </div>
    </div>
    // <Container fluid className="footer">
    //   <Row>
    //     <Col md={12} className="logo">
    //       <img src={Logo} alt="logo" />
    //       <p>Own properties on Propout, and flip at your convenience. 
    //       We've enabled properties and other real estate assets further visibility through the Prop-tech digital market. Hence a safe and trusted tool for all kinds of real estate market
    //       </p>
    //     </Col>
    //     <Col md={3} className="home-header">
    //       <p>world</p>
    //     </Col>
    //     <Col md={3} className="home-header">
    //       <p>good</p>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Footer;

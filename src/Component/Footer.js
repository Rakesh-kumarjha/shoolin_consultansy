import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="footer-about">
                  <h2>About Us</h2>
                  <p>
                  Shoolin Consultancy takes into account all business sections be it a start-up, SMEs or Corporate, through its exceptionally experienced group of expert partners.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-8">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="footer-link">
                      <h2>Services Areas</h2>
                      <Link to="/Divore">
                      Divorce Matter</Link>
                     
                      <Link to="/Criminalcases">
                      Criminal Cases</Link>
                      <Link to="/NDPS">
                      NDPS</Link>
                      <Link to="/Cybercrime">  
             Cyber Crime
              </Link>
              <Link to="/Property">
              Property Verification </Link>
              <Link to="/Chequebounce">
              Cheque Bounce</Link>
                    
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="footer-link">
                      <h2>Useful Pages</h2>
                      <Link to="/about">About Us</Link>
                      <Link to="/OurServices" >Our Services</Link>
                      <a href="">Attorneys</a>
                      <a href="">Case Studies</a>
                      <a href="">FAQs</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="footer-contact">
                      <h2>Get In Touch</h2>
                      <Link to="https://goo.gl/maps/xnTmgmy4Hsgj9jyC8" target="_blank">
                      <p className='colors'>
                        <i className="fa fa-map-marker-alt"></i>

248, 11 Main, 12th cross Malleshwaram, Bangalore 56003, Bengaluru, Karnataka 560003
                      </p></Link>
                      <p className='colors'>
                         <a href="tel:7090721111">
                                        <p><i className="fa fa-phone-alt"></i> 7090721111</p>
                      </a>
                      </p>
                      <p className='colors'>
                      <a href="mailto: info@shoolinconsultancy.in">
                        <i className="fa fa-envelope"></i>info@shoolinconsultancy.in</a>
                      </p>
                      <div className="footer-social">
                        <a href="">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/shoolinconsultancy5?mibextid=ZbWKwL" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://instagram.com/shoolinconsultancyofficial?igshid=MzRlODBiNWFlZA==" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container footer-menu">
            <div className="f-menu">
              <a href="">Terms of use</a>
              <a href="">Privacy policy</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div>
          </div>
          <div className="container copyright">
            <div className="row">
              {/* <div className="col-md-6">
                <p>
                  &copy; <a href="#"> HTML Codex </a>, All Right Reserved.
                </p>
              </div> */}
              {/* <div className="col-md-6">
                <p>
                  {/* Designed By <a href="https://htmlcodex.com">HTML Codex</a> 
                </p>
              </div> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer

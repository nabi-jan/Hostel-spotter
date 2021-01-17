import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="footerv2-w3ls">
          <div className="footer-w3lagile-innerr">
            {/* footer-top */}
            <div className="container-fluid">
              <div className="row  footer-v2grids w3-agileits">
                {/* services */}
                <div className="col-lg-2 col-sm-6 footer-v2grid">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <a href="payment.html">Payment</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Cancellation &amp; Returns</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                  </ul>
                </div>
                {/* //services */}
                {/* latest posts */}
                <div className="col-lg-3 col-sm-6 footer-v2grid mt-sm-0 mt-5">
                  {/* <h4>Latest Blog</h4>
                  <div className="footer-v2grid1 row">
                    <div className="col-4 footer-v2grid1-left">
                      <a href="blog.html">
                        <img
                          src="images/bl2.jpg"
                          alt=" "
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-8 footer-v2grid1-right p-0">
                      <a href="blog.html">
                        eveniie arcet ut moles morbi dapiti
                      </a>
                    </div>
                  </div>
                  <div className="footer-v2grid1 row my-2">
                    <div className="col-4 footer-v2grid1-left">
                      <a href="blog.html">
                        <img
                          src="images/bl1.jpg"
                          alt=" "
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-8 footer-v2grid1-right p-0">
                      <a href="blog.html">earum rerum tenmorbi dapiti et</a>
                    </div>
                  </div>
                  <div className="footer-v2grid1 row">
                    <div className="col-4 footer-v2grid1-left">
                      <a href="blog.html">
                        <img
                          src="images/bl3.jpg"
                          alt=" "
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-8 footer-v2grid1-right p-0">
                      <a href="blog.html">morbi dapiti eveniet ut molesti</a>
                    </div>
                  </div> */}
                </div>
                {/* //latest posts */}
                {/* locations */}
                <div className="col-lg-2 col-sm-6 footer-v2grid my-lg-0 my-5">
                  <h4>office locations</h4>
                  <ul>
                    <li>
                      <a href="#">new jersey</a>
                    </li>
                    <li>
                      <a href="#">texas</a>
                    </li>
                    <li>
                      <a href="#">michigan</a>
                    </li>
                    <li>
                      <a href="#">cannada</a>
                    </li>
                    <li>
                      <a href="#">brazil</a>
                    </li>
                    <li>
                      <a href="#">california</a>
                    </li>
                  </ul>
                </div>
                {/* //locations */}
                {/* flickr posts */}
                <div className="col-lg-3 col-sm-6 footer-v2grid my-lg-0 my-sm-5">
                  {/* <h4 className="b-log">flickr posts</h4>
                  <div className="footer-v2grid-instagram">
                    <a href="#">
                      <img src="images/bl4.jpg" alt=" " className="img-fluid" />
                    </a>
                  </div>
                  <div className="footer-v2grid-instagram">
                    <a href="#">
                      <img src="images/bl1.jpg" alt=" " className="img-fluid" />
                    </a>
                  </div>
                  <div className="footer-v2grid-instagram">
                    <a href="#">
                      <img src="images/bl6.jpg" alt=" " className="img-fluid" />
                    </a>
                  </div>
                  <div className="footer-v2grid-instagram">
                    <a href="#">
                      <img src="images/bl5.jpg" alt=" " className="img-fluid" />
                    </a>
                  </div>
                  <div className="footer-v2grid-instagram">
                    <a href="#">
                      <img src="images/bl2.jpg" alt=" " className="img-fluid" />
                    </a>
                  </div>
                  <div className="footer-v2grid-instagram">
                    <a href="#">
                      <img src="images/bl3.jpg" alt=" " className="img-fluid" />
                    </a>
                  </div>
                  <div className="footer-v2grid-instagram">
                    <a href="#">
                      <img src="images/bl6.jpg" alt=" " className="img-fluid" />
                    </a>
                  </div>
                  <div className="footer-v2grid-instagram">
                    <a href="#">
                      <img src="images/bl4.jpg" alt=" " className="img-fluid" />
                    </a>
                  </div>
                  <div className="footer-v2grid-instagram">
                    <a href="#">
                      <img src="images/bl5.jpg" alt=" " className="img-fluid" />
                    </a>
                  </div> */}
                </div>
                {/* //flickr posts */}
                {/* popular tags */}
                <div className="col-lg-2  footer-v2grid mt-sm-0 mt-5">
                  <h4>popular tags</h4>
                  <ul className="w3-tag2">
                    <li>
                      <a href="shop.html">amet</a>
                    </li>
                    <li>
                      <a href="men.html">placerat</a>
                    </li>
                    <li>
                      <a href="shop.html">Proin </a>
                    </li>
                    <li>
                      <a href="boys.html">vehicula</a>
                    </li>
                    <li>
                      <a href="shop.html">diam</a>
                    </li>
                    <li>
                      <a href="women.html">velit</a>
                    </li>
                    <li>
                      <a href="shop.html">felis</a>
                    </li>
                    <li>
                      <a href="shop.html">mauris</a>
                    </li>
                    <li>
                      <a href="girls.html">amet</a>
                    </li>
                    <li>
                      <a href="shop.html">placerat</a>
                    </li>
                    <li>
                      <a href="shop.html">Proin </a>
                    </li>
                    <li>
                      <a href="index.html">vehicula</a>
                    </li>
                    <li>
                      <a href="shop.html">diam</a>
                    </li>
                    <li>
                      <a href="men.html">velit</a>
                    </li>
                    <li>
                      <a href="shop.html">felis</a>
                    </li>
                    <li>
                      <a href="women.html">mauris</a>
                    </li>
                  </ul>
                </div>
                {/* //popular tags */}
              </div>
            </div>
            {/* //footer-top */}
            <div className="footer-bottomv2 py-5">
              <div className="container">
                <ul className="bottom-links-agile">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/boys-hostel">Boys Hostel</Link>
                  </li>
                  <li>
                    <Link to="/girls-hostel">Girls Hostel</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
                <h3 className="text-center follow">Follow Us</h3>
                <ul className="social-iconsv2 agileinfo">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid py-5 footer-copy_w3ls">
            <div className="d-lg-flex justify-content-between">
              <div className="mt-2 sub-some align-self-lg-center">
                {/* <h5>Payment Method</h5>
                <ul className="mt-4">
                  <li className="list-inline-item">
                    <img src="images/pay2.png" alt />
                  </li>
                  <li className="list-inline-item">
                    <img src="images/pay5.png" alt />
                  </li>
                  <li className="list-inline-item">
                    <img src="images/pay3.png" alt />
                  </li>
                  <li className="list-inline-item">
                    <img src="images/pay7.png" alt />
                  </li>
                  <li className="list-inline-item">
                    <img src="images/pay8.png" alt />
                  </li>
                  <li className="list-inline-item ">
                    <img src="images/pay9.png" alt />
                  </li>
                </ul> */}
                <p>We are</p>
              </div>
              <div className="cpy-right align-self-center">
                <h2 className="agile_btxt">
                  <a href="index.html">
                    <span>H</span>ostel
                    <span>S</span>potter
                  </a>
                </h2>
                <p>© 2020 Hostel Spotter. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

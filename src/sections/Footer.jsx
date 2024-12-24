import Footersemi from "../components/Footersemi";
import { FooterContent } from "../constants";
const Footer = () => {
  return (
    <footer className="bg-dark mt-5">
      <div className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-md-center align-items-start px-5 py-5 font-inter gap-lg-3 gap-5 container">
        <div>
          <a
            className="navbar-brand d-flex flex-row align-items-center gap-2"
            href="/"
          >
            <span className="my-auto font-inter text-white fs-2 fw-bold">
              Logis
            </span>
          </a>
          <div className="mt-4 text-silver fs-6">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p className="mt-3">All rights reserved</p>
          </div>
          <div className="d-flex gap-5">
            {FooterContent.map((image,index) => (
              <Footersemi key={index} {...image} />
            ))}
          </div>
        </div>
        <div className="d-flex flex-lg-nowrap flex-wrap justify-content-between gap-5 ms-5 ">
          <div className="d-flex row-gap-3 text-white flex-lg-row flex-column justify-content-between ">
            <div className="d-flex flex-column gap-3 ">
              <h5>Useful Links</h5>
              <ul className="d-flex flex-column">
                <li className="d-flex flex-column gap-2">
                  <span id="linkstyle">Home</span>
                  <span id="linkstyle">About us</span>
                  <span id="linkstyle">Services</span>
                  <span id="linkstyle">Terms of Services</span>
                  <span id="linkstyle">Privacy policy</span>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-column gap-3">
              <h5>Our Services</h5>
              <ul className="d-flex flex-column">
                <li className="d-flex flex-column gap-2" role="button">
                  <span id="linkstyle">Web Design</span>
                  <span id="linkstyle">Web Development</span>
                  <span id="linkstyle">Product Management</span>
                  <span id="linkstyle">Marketing</span>
                  <span id="linkstyle">Graphic Design</span>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-column gap-3">
              <h5>Contact Us</h5>
              <ul className="d-flex flex-column">
                <li className="d-flex flex-column gap-2" role="button">
                  <span id="linkstyle">A108 Adam Street</span>
                  <span id="linkstyle">New York, NY 535022</span>
                  <span id="linkstyle">United States</span>
                  <span id="linkstyle">Phone: +1 5589 55488 55</span>
                  <span id="linkstyle">Email: info@example.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <article className="text-center mx-auto">
        <p className="text-white">© Copyright Logis All Rights Reserved</p>
        <p className="text-white">Designed by TIRTH MANGROLIYA</p>
      </article>
    </footer>
  );
};
export default Footer;

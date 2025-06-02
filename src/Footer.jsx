import React from 'react';
import '../src/Footer.css';
import logo from '../src/img/Contemporary_Design_Studio_Logo-removebg-preview.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='background'>
        <div className="row">
          <div className="col-lg-4 col-md-7 col-12 text-center text-light my-4">
            <h2 className='text-light mb-0'>VIAAN ENTERPRISE</h2>
            <img src={logo} alt="" width="50%" />
          </div>

          <div className="col-lg-3 col-md-5 col-12 text-light justify-content-end text-center my-4">
            <h3 className='mb-5'>Pages</h3>
            <Link to="/" className='text-light text-decoration-none'><p>Home</p></Link>
            <Link to="/about" className='text-light text-decoration-none'><p>About</p></Link>
            <Link to="/product" className='text-light text-decoration-none'><p>Products</p></Link>
            <Link to="/contact" className='text-light text-decoration-none'><p>Contact</p></Link>
          </div>

          <div className="col-lg-3 col-md-6 col-12 text-light text-center my-4">
            <h3 className='mb-5'>Products</h3>
            <Link to="/product" className='text-light text-decoration-none'> <p>Frozen food</p></Link>
            <Link to="/product" className='text-light text-decoration-none'><p>Dry Onion Flaks</p></Link>
            <Link to="/product" className='text-light text-decoration-none'><p>Mango pulps</p></Link>
            <Link to="/product" className='text-light text-decoration-none'><p>Dried powder of orange</p></Link>
          </div>

          <div className="col-lg-2 col-md-6 col-12 text-light text-center my-4">
            <h3 className='mb-5'>Address</h3>
            <Link

              className="nav-link text-light"
              to="/contact"
              aria-current="page"
              href="#"
            >
              <p>NO.112 SUNRISE BUSINESS HUB,GURUKUL CIRCLE, NIKOL, AHMEDABAD - 382350</p>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

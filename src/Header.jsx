import React from "react";
// import logo from '../src/img/Media-removebg-preview.png'
import logo from "../src/img/Contemporary_Design_Studio_Logo-removebg-preview.png";
import "../src/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <nav classNameNameName="navbar navbar-expand-lg navbar-light  bg-transparent p-0 position-fixed text-light"> */}
      {/* <div className=' position-relative main-hed z-3'>
        <div className="container  bg-transparent  position-absolute nev-main">
          <div className="row text-light  align-items-center ">
            <div className=" pt-2 m-0  text-center p-0 pt-0 col-lg-2 col-12"  >
              <img src={logo} alt="" width="50px"  className="img"/>
            </div>
            <div className='col-lg-3  col-12 align-items-center text-center'>
              <h4 className='text-light viaan-name  m-0'>VIAAN ENTERPRISE</h4>
            </div>
            <div className='col-lg-2 col-12 text-center'>
              <Link href="#" className='text-light text-decoration-none' to={'/'}><b>Home</b></Link>
            </div >
            <div className='col-lg-2 col-12 text-center'>
              <Link href="#" className='text-light text-decoration-none' to={'/about'}><b>About</b></Link>
            </div>
            <div className='col-lg-2 col-12 text-center'>
              <Link href="#" className='text-light text-decoration-none' to={'/product'}><b>Products</b></Link>
            </div>
            
            <div className='col-lg-1 col-12 text-center'>
              <Link href="#" className='text-light text-decoration-none' to={'/contact'}><b>Contact</b></Link>
            </div>
          </div>
        </div>
      </div> */}

      <nav className="navbar navbar-expand-lg bg-transparent position-absolute z-3 w-100 m-lg-0 mb-5">
        <div className="container p-0   nev-main">
          <a className="navbar-brand " href="#">
            {" "}
          </a>
          <button
            className="navbar-toggler my-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse row "
            id="navbarSupportedContent"
          >
            <div className="col-lg-1   d-flex  align-self-center justify-content-center">
            <img src={logo} alt="" className="nav-logo  " /></div>
            <h2 className="col-lg-4  nev-hed m-0 viaan-name text-light  text-center "><Link  className="nav-link text-light" to="/">
                  VIAAN ENTERPRISE
                </Link></h2>
            <ul className="navbar-nav  text-center  ms-auto  mb-lg-0 col-lg-7  d-flex justify-content-around justify-content-center">
              <li className="nav-item  ">
                <Link  className="nav-link text-light" to="/">
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item ">
                <Link  to="/about" className="nav-link text-light">
                  <b> About</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link  to="/product" className="nav-link text-light">
                  <b> Product</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                 
                  className="nav-link text-light"
                  to="/contact"
                  aria-current="page"
                  href="#"
                >
                  <b>Contact</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

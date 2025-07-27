import React from 'react'
import '../HomePage/Home.css'
import Header from '../../Header'
import Footer from '../../Footer'
import { Link } from 'react-router-dom';


// import { Card } from "react-bootstrap";

const Home = () => {



  return (
    <>
      <Header />
      <div class="hero-Home-section z-1 h-100 ">
        <img src="https://thewingsinternational.com/wp-content/uploads/2024/09/display-different-fruits-including-one-that-saysveggieson-it_1241530-1237.jpg" alt="Food background" class="hero-bg" />
        <div class="overlay-Home-text ">
          <h4 className='py-2'>112 ,SUNRISE BUSINESS HUB, GURUKUL CIRCLE, NIKOL, AHMEDABAD</h4>
          <h1 className='py-2'>Connecting Global Markets</h1>
          <h1 className='py-2'>with Premium Indian Products</h1>
          <p className='py-2'>At The Viaan Enterprice, we specialize in exporting a diverse range of high-quality frozen <br /> and dry foods from India. Explore our extensive selection and experience unmatched <br /> freshness and flavor delivered worldwide.</p> <br />
          <div className=' d-flex'>
            <Link to="/product" className="nav-link text-light">
              <button className='get-prize-btn px-5 py-3  border-0 rounded-3 me-5 text-light my-3' ><b>GET PRIZE</b></button>
            </Link>
            <Link to={"/contact"}>
              <button className="get-prize-btn px-5 py-3 bg-transparent border-1 border-white rounded-3 me-5 text-light my-3">
                <b>CONTACT US</b>
              </button>
            </Link>

          </div>
        </div>
        <svg class="wave-contact" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgb(255,255,255)" className='nn' d="M0,80 C480,250 760,0 1440,150 L1440,160 L0,150 Z"></path>
        </svg>
      </div>

      <div className=' container'>
        <div className="row my-5">
          <div className="col-lg-6 col-md-12 ">
            <div className='ps-5'>
              <img src="https://thewingsinternational.com/wp-content/uploads/2024/09/composition-delicious-frozen-food_23-2148923181-e1727589471191.jpg" alt="" className=' rounded-4 w-100' />
            </div>
          </div>
          <div className="col-lg-5  col-md-12 p-lg-4">
            <div className='py-5 '>
              <h6>Welcome To</h6>
              <h2>The Viaan Enterprice</h2>
              <p className='pb-5'>At Viaan Enterprice, we are dedicated to bringing the finest frozen and dry food products from India to the global market. Established with a vision to connect international consumers with the rich flavors and quality of Indian produce, we pride ourselves on our extensive range of products and our commitment to excellence.</p>

              <button className='get-prize-btn  px-5 py-2 text-light border-0 rounded-3'>KNOW MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ourProduct-home my-5">
        <div className=' text-light container p-3'>
          <div className="row main-part-brochure py-4">
            <div className='col-lg-8 col-12 py-5'>
              <h1 className=' text-white  ' >Download Our Product Brochure</h1>
              <p> Explore our full range of premium frozen and dry foods. Download our brochure to see detailed product
                <br /> information and discover how Viaan Enterprice can meet your needs.</p>
            </div>
            <div className="col-lg-4 col-12 align-items-lg-center d-flex">
              <button className='d-btn bg-transparent text-light px-lg-5 py-lg-3 px-2 py-1 border-light border-2 rounded-3 '>DOWNLOAD BROCHURE</button>
            </div>
          </div>
        </div>
      </div>

      <div className=' container'>
        <div className=' text-center'>
          <h2 className='my-3'>Explore Our Products</h2>
          <p>View our extensive range of premium frozen and dry food offerings.</p>
        </div>
      </div>

      <div className=' container  d-none d-lg-inline p-0'>
        <marquee behavior="" direction="left " className="">
          <div className="row ">
            <div className="col-lg-2 col-md-4 py-3 ">
              <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/lemon-powder-citric-acid-powder-fresh-lemon-fruit-isolated-white-background_1235831-120036-qu27y14ywvdwnz39ew3mqm18xo9lyxontcea4972d0.jpg" alt="" className='rounded-5 shadow' />
            </div>
            <div className="col-lg-2 col-md-4 py-3">
              <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/istockphoto-1141245784-612x612-1-qu27mlfnrfqberpa6y51ehxcqwmubia88qnlx25i2c.jpg" alt="" className='rounded-5 shadow' />
            </div>
            <div className="col-lg-2 col-md-4 py-3">
              <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/pexels-tetiana-androshchuk-1524362819-28238706-scaled-qu27m2mvyr0kykgl8q0i0mo4v77i1k7li5lwbixdis.jpg" alt="" className='rounded-5 shadow' />
            </div>
            <div className="col-lg-2 py-3">
              <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/pexels-victorino-2286776-scaled-qu27lg2req5p7xdcwg9gcsd2lyaowtq1f1y8svuto4.jpg" alt="" className='rounded-5 shadow' />
            </div>
            <div className="col-lg-2 py-3">
              <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/istockphoto-1292299849-612x612-1-qu26rh01gx4izkwrxhtqucnwnm1bgaq6mp0tv8as38.jpg" alt="" className='rounded-5 shadow' />
            </div>
            <div className="col-lg-2 py-3">
              <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/istockphoto-153737841-612x612-1-qu26rcauiqy3dj3loxslzvulooohdt7iy1reguhqyc.jpg" alt="" className='rounded-5 shadow' />
            </div>
            {/* <div className="col">
              <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/17417_17417_1620-qu26re6iwf0o0r0vdylv4vdivgf7t7ezmb2dfeeylw.jpg" alt="" />
            </div>
           
            <div className="col">
              <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/Garlic-qu26qy79o8esjdo2z9p7gheorwlz6cnjw3z49p2njo.jpg" alt="" />
            </div>
            <div className="col">
              <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/glass-juice-is-being-poured-into-glass_1283804-746-qu286czhh0sdjkzprzpmc0dafl7p6dr1aki67iuh84.jpg" alt="" />
            </div> */}

          </div>

        </marquee>
      </div>

      <div className="back-banner my-5">
        <div className="opacity">
          <div className=' container text-light py-5'>
            <h1 className=' py-3'>Uncompromising Quality, Exceptional Taste</h1>
            <p>At The Viaan Enterprice, quality is the cornerstone of everything we do. We are dedicated to sourcing the finest ingredients and utilizing state-of-the-art processes to ensure that our frozen and dry foods meet the highest international standards. Each product is crafted with care and precision, maintaining unparalleled freshness and flavor. Our rigorous quality control and commitment to excellence ensure that every item not only meets but exceeds your expectations. Experience the rich, authentic taste and reliability of our products, and see why Viaan Enterprice is the trusted choice for premium food solutions worldwide.</p>
          </div>
        </div>
      </div>
      <div className=' container'>
        <div className=' text-center'>
          <h1 className='py-4'>What our customers say</h1>
          <p>See what our satisfied clients have to say about our exceptional products.</p>
        </div>
        <div className=' row  my-5  justify-content-evenly'>
          <div className="col-12 col-lg-3 my-4 p-4 text-center rewiew-cardes  rounded-3 shadow mx-3">
            <p>The Viaan Enterprice has consistently delivered top-quality products. The frozen foods are always fresh, and the dry ingredients are of exceptional quality. Highly recommend!					</p>
            <h3>Amit S</h3>
            <p>Retailer</p>
          </div>
          <div className="col-12 col-lg-3 my-4 p-4 text-center border-dark border-1 rewiew-cardes  rounded-3 shadow mx-3">
            <p>
              The Viaan Enterprice provides a diverse range of high-quality products. Their frozen potatoes and dried fruit powders are particularly impressive and always meet our standards.					</p>
            <h3>John K.</h3>
            <p>Exporter</p>
          </div>
          <div className="col-12 col-lg-3 my-4 p-4 text-center border-dark border-1 rewiew-card
          
          es  rounded-3 shadow mx-3">
            <p>
              The mango pulps from Viaan Enterprice are unmatched in flavor and consistency. Our customers love them, and we couldn’t be happier with the service and quality.					</p>
            <h3>Linda M</h3>
            <p>Food Distributor</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
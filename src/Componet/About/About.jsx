import React from 'react'
import Header from '../../Header'
import '../About/About.css'
import Footer from '../../Footer'

const About = () => {
    return (
        <>
            <Header />
            <div class="hero-contact-section">
                <img src="https://thewingsinternational.com/wp-content/uploads/2024/09/deep-frozen-food-concept-food-industry_1162810-15507.jpg" alt="Food background" class="hero-bg" />
                <div class="overlay-text">About Us</div>
                <svg class="wave-contact" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgb(255,255,255)" className='nn' d="M0,80 C480,250 760,0 1440,30 L1440,160 L0,150 Z"></path>

                </svg>
            </div>
            <div className=' container'>
                <div className=' row px-5'>
                    <div className="col-lg-6 col-12 ">
                        <div className=' d-flex  align-items-center justify-content-center'>
                            <img src="https://thewingsinternational.com/wp-content/uploads/2024/09/front-view-composition-autumn-vegetables_23-2148634385.jpg" alt="" className=' rounded-4 shadow' />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 my-5">
                        <h3 className='py-3'>Welcome to Viaan Enterprise!</h3>
                        <p className='pb-4'>At The Viaan Enterprise, we are dedicated to bringing the finest frozen and dry food products from India to the global market. Established with a vision to connect international consumers with the rich flavors and quality of Indian produce, we pride ourselves on our extensive range of products and our commitment to excellence.</p>
                        <h5 className='py-3'>Our Mission</h5>
                        <p>Our mission is simple: to deliver premium Indian products that meet the highest standards of quality and freshness. We are committed to ensuring that every product we export not only meets but exceeds international expectations. By leveraging our deep industry expertise and state-of-the-art logistics, we ensure that our products retain their exceptional quality from our facilities to your doorstep.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-7 col-12  ">
                        <div className="my-5 ">
                            <h3 className='py-3'>Our Commitment</h3>
                            <p className='pb-4'>Quality is at the heart of everything we do. We work closely with trusted suppliers and adhere to rigorous quality control processes to ensure that our products meet international standards. Our team is passionate about delivering excellence and is always ready to address your needs and provide the support you require.</p>
                            <h5 className='py-3'>Join Us on Our Journey</h5>
                            <p>As we expand our reach to new markets around the world, we invite you to experience the exceptional quality and authenticity of Wings International’s products. Whether you are a distributor, retailer, or a valued customer, we look forward to building lasting relationships and contributing to your success.</p>
                            <div className="row">
                                <div className="col-lg-6 col-12 my-2"><i class="fa-solid fa-phone"></i> +91 9274000198</div>
                                <div className="col-lg-6 col-12 my-2"><i class="fa-solid fa-envelope"></i> Viaanenterprise26@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className='d-flex  align-items-center justify-content-center '>
                            <img src="https://thewingsinternational.com/wp-content/uploads/2024/09/man-with-vegetables-that-have-been-cultivated-farmed-indoors_23-2149854905.jpg" alt="" className=' rounded-4 shadow m-2' />
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default About

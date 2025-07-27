import React from 'react'
import '../Product/Product.css'
import { Data } from '../Product/CardData'
import Header from '../../Header'
import Footer from '../../Footer'


const Product = () => {
    let datacard = Data.map((v, i) => {
        return (
            <div className=' col-lg-4 col-md-6 col-12'>
                <div className=''>
                    <div className='  position-relative card p-0 my-5 rounded-2 card-box ' >
                        <img src={v.img} alt="" className='box_img  rounded-2  h-100' />
                        <div className=' position-absolute top-0 d-flex justify-content-end flex-column h-100 p-3 ' >
                            <h1 >{v.title}</h1>
                            <p ><b>{v.body}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <Header />
            <div className="hero-section">
                <img src="https://thewingsinternational.com/wp-content/uploads/2024/09/delicious-foods-celebration-scaled.jpg" alt="Food background" class="hero-bg" />
                <div className="overlay-text shadow">Products</div>
                <svg className="wave" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgb(255,255,255)" className='nn' d="M0,80 C480,200 960,0 1440,80 L1440,150 L0,150 Z"></path>

                </svg>
            </div>

            <div className="section2 py-5">
                <div className="mm text-center">
                    <h1 className=' '>Let's View our Products</h1>
                    <p className="elementor-image-box-description">Explore our diverse range of premium frozen and dried food products, crafted for quality and flavor.</p>
                </div>
            </div>

            <div className=' container'>
                <div className=' d-flex  row'>
                    {datacard}
                </div>
            </div>

            <div className="ourProduct my-5">
                <div className=' text-light container'>
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
                <div className="row">
                    <div className="col-lg-6  col-12 d-flex align-items-center justify-content-center  ">
                        <div id="carouselExampleControls" className="carousel slide my-5 w-75" data-bs-ride="carousel">
                            <div className="carousel-inner rounded-3 h-100  w-100 slide-photo-bar  ">
                                <div className="carousel-item active">
                                    <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/onion-powder-wooden-bowl-fresh-red-onion-isolated-white-background-top-view-flat-lay_781325-19824-qu27xatl4ovjb3tbhf8gxfblb6323i3rfxfoiko1ag.jpg" className="d-block w-100 h-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/pexels-victorino-2286776-scaled-qu27lg2uxwncw516paruhf0bm8if0x1mh998my8rrc.jpg" className="d-block w-100 h-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/17417_17417_1620-qu26re6mfliboyop6t499i0rvqmxxaqkoidd9gswp4.jpg" className="d-block w-100 h-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/517UMQiXKOL._AC_UF10001000_QL80_-qu26r5q2q36qsh0zk7gm525mj9sn00sznchzxz5g94.jpg" className="d-block w-100 h-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://thewingsinternational.com/wp-content/uploads/elementor/thumbs/glass-juice-is-being-poured-into-glass_1283804-746-qu286czl07a17snjku80gn0jfvffah2mcrt61l8fbc.jpg" className="d-block w-100 h-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6  col-12 my-5">
                        <h2>Why Choose Us?</h2>
                        <p>We offer high-quality frozen foods and dried powders made with the finest ingredients for optimal freshness and flavor. Choose us for all your culinary needs!</p> <br />
                        <h2>Quality Assurance:</h2>
                        <p>We source the finest ingredients for exceptional taste and nutrition in every product.</p><br />
                        <h2>Diverse Product Range:</h2>
                        <p>Our wide selection of frozen foods and dried powders meets all your culinary needs.</p><br />

                        <h2>Freshness Commitment:</h2>
                        <p>Each product is carefully processed to ensure peak freshness and flavor.</p>
                    </div>
                </div>

            </div>
            <Footer />


        </>
    )
}

export default Product

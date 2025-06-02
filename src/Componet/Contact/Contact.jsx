import React from 'react'
import '../Contact/Contact.css'
import Header from '../../Header'
import Footer from '../../Footer';

const Contact = () => {

    return (
        <>
            <Header />
            <div class="hero-contact-section ">
                <img src="https://thewingsinternational.com/wp-content/uploads/2024/09/food-arrangement-reusable-bag-scaled.jpg" alt="Food background" class="hero-bg" />
                <div class="overlay-text">Contact</div>
                <svg class="wave-contact" viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgb(255,255,255)" className='nn' d="M0,60 C480,280 660,0 1440,150 L1440,160 L0,160 Z"></path>

                </svg>
            </div>


            <div className='container'>
                <div className='text-center my-5'>
                    <h1 >Let's Connect with Viaan Enterprise</h1>
                    <p >We'd love to hear from you—contact us with any questions or feedback about our products!</p>
                </div>
                <div className="row contact-page my-5 ">
                    <div className='col-lg-6 col-12 ps-lg-5  p-0'>
                        <div className='p-5 m-3 m-lg-0 round-3 shadow rounded-4'>
                            <h2>Get in Touch with Us</h2>
                            <p>Would you like any additional details or sections for that page?</p>
                            <input type="text" placeholder='Name' className='p-3 w-100 my-3 border-1' />
                            <input type="number" placeholder='Contact No.' className='p-3 w-100 my-3 border-1' />
                            <input type="email" placeholder='Email' className='p-3 w-100 my-3 border-1' />
                            <textarea name="" id="" placeholder='Message' className=' w-100  my-3'></textarea>
                            <button className='px-5 py-3 bg text-light border-0 rounded-3 '>Send Request</button>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 px-lg-0 px-3'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4366.145451290108!2d72.66770711975657!3d23.043002187386403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87e4794798e5%3A0xf472713d084a4404!2sSunrise%20Business%20Center!5e0!3m2!1sen!2sin!4v1747989412039!5m2!1sen!2sin"  className=' rounded-1 my-5 shadow-lg' width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8499303794583!2d72.54478347516593!3d23.065962779143394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8366d33c3de5%3A0x16fb1ea27975b0dd!2sSATYA%20TWO!5e0!3m2!1sen!2sin!4v1747638574752!5m2!1sen!2sin" className=' rounded-1 my-5 ' width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Contact


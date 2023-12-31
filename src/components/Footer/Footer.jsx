import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper" id='footer'>
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side */}
            <div className="flexColStart f-left">
                {/* <img src="./logo2.png" alt="" width={120} /> */}
                <img src="./floral.png" alt="" width={200} />

                <span className="secondaryText">
                    Our vision is to make all people <br />
                    the best place to live for them.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New York, FL 4571, USA</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>about Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
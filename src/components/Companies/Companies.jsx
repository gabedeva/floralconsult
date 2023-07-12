import React from 'react'
import './Companies.css';

const Companies = () => {
  return (
    <>

      {/* <section className='ui-wrapper-xmini'>

        <div className="">
          <div className='orangeText'>
            <h3 className='ui-text-center fw-bold'>Clients we've worked with</h3>
          </div>
        </div>
        <div className="innerWidth c-grid flexCenter c-container" id='companies'>
            
            <img src="./prologis.png" alt="" />
            <img src="./tower.png" alt="" />
            <img src="./equinix.png" alt="" />
            <img src="./realty.png" alt="" />
        </div>


      </section> */}

      <section id='clients' className='worked-w ui-full-bg-norm' style={{backgroundColor: 'blak'}}>

            <div className="container">

                <div className="ui-wrapper">

                    <div className="row">

                        <div className="col-md-7 ui-text-center mx-auto">
                        {/* <div className='orangeText'>
                            <h3 className='ui-text-center fw-bold'>Clients we've worked with</h3>
                        </div> */}

                            <p className='fs-20 mrgt1 mrgb1 fw-bold font-gilroybold'>Worked with over <span className='fs-22 onyellow'>3000</span> clients, <br /> students and startup including
                            </p>

                        </div>                              

                    </div>

                    <div className="slider">
                        <div className="slide-track " style={{}}>
                            <div className="slide">
                                <img className='img1' src="./prologis.png" alt="" />
                                {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" alt="" /> */}
                            </div>
                            <div className="slide">
                                {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" alt="" /> */}
                                <img className='img2' src="./tower.png" alt="" />
                            </div>
                            <div className="slide">
                                {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" alt="" /> */}
                                <img src="./equinix.png" alt="" />
                            </div>
                            <div className="slide">
                                <img src="./realty.png" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" alt="" />
                            </div>
                            <div className="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/8.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    
    </>
  )
}

export default Companies
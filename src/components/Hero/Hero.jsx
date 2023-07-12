import React from 'react'
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="hero-wrapper" id='hero'>
        <div className="ui-wrapper-xlarge">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="pdt4">

                            <div className="flexColStart hero-left">
                                <div className="hero-title">
                                    <div className="orange-circle" />
                                    <motion.h1
                                        initial={{y: "2rem", opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{
                                            duration: 2,
                                            type: "spring"
                                        }}
                                    className='ui-hide-mobile-only'>
                                        Discover <br /> 
                                        Most Suitable <br />
                                        <span className='type Typewriter__wrapper fs-40'>
                                                <Typewriter
                                                    
                                                    options={{
                                                        strings: [
                                                            "Properties",
                                                            "Homes",
                                                            "Real Estate"
                                                        ],

                                                        skipAddStyles: true,
                                                        autoStart: true,
                                                        loop: true,
                                                        delay: 5
                                                    }}

                                                />
                                            </span>
                                    </motion.h1>
                                        <div className="ui-show-mobile-only menu-text lh12">
                                            <span className='fw-bold font-metrobold-i fs-40'>Discover</span>  <br /> 
                                            <span className='fw-bold font-metrobold-i fs-40'>Most Suitable</span> <br />
                                            <span className='type Typewriter__wrapper fs-40'>
                                                <Typewriter
                                                    
                                                    options={{
                                                        strings: [
                                                            "Properties",
                                                            "Homes",
                                                            "Real Estate"
                                                        ],

                                                        skipAddStyles: true,
                                                        autoStart: true,
                                                        loop: true,
                                                        delay: 5
                                                    }}

                                                />
                                            </span>
                                        </div>
                                </div>

                                <div className="flexColStar hero-des mrgb1">
                                    <span className='secondaryText'>Find a variety of properties that suits you very easily.</span>
                                    <span className='secondaryText'> Forget all difficulties in finding a residence for you</span>
                                </div>

                                <div className='ui-hide-mobile-only'>
                                {/* <li className='font-gilroy'><a href="#residence" className='btn lg btn-start onwhite'><Link  activeClass="active" to="residence" spy={true} smooth={true} duration={500}> About</Link></a></li> */}

                                    <a
                                        className='gradient-blue lg btn-start font-gilroy onwhite'
                                        href='#residence'>
                                        {/* <Link
                                            activeClass='active'
                                            to='residence'
                                            spy={true}
                                            smooth={true}
                                            duration={500}>
                                        </Link> */}
                                            Get Started 
                                            <span className='fe fe-home pdl'></span>{' '}
                                    </a>
                        
                            </div>
                                
                            
                            <div className='ui-show-mobile-only w100 ui-text-center ui-group-button'>
                                <a
                                    className=' gradient-blue fs-24 lg btn-start font-gilroy onwhite'
                                    href='#residence'>
                                    
                                        Get Started
                                    <span className='fe fe-home fs-20 pdl'></span>
                                </a>
                                
                            </div>

                                <div className="flexCenter stats">
                                    
                                    <div className="flexColCenter stat">
                                    <span>
                                        <CountUp start={8800} end={9000} duration={4} />
                                        <span>+</span>
                                    </span>
                                    <span className='secondaryText'>Premium Products</span>
                                    </div>

                                    <div className="flexColCenter stat">
                                    <span>
                                        <CountUp start={1950} end={2000} duration={4} />
                                        <span>+</span>
                                    </span>
                                    <span className='secondaryText'>Happy Customers</span>
                                    </div>

                                    <div className="flexColCenter stat">
                                    <span>
                                        <CountUp end={28} />
                                        <span>+</span>
                                    </span>
                                    <span className='secondaryText'>Award Winnings</span>
                                    </div>
                                </div>

                                

                           

                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">

                        <div className="">

                            <div className="flexCenter hero-right">
                                <motion.div
                                    initial={{x: "7rem", opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{
                                        duration: 2,
                                        type: "spring"
                                    }}
                                    className="image-container">
                                        <img src="./hero-image.png" alt="" />
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* left side */}

            {/* right side */}
        </div>
    </section>


  )
}

export default Hero
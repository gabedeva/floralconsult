import React, { useState } from 'react'
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa'
// import { GiCarWheel } from 'react-icons/gi'
// import './NavbarStyles.css'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)  
        setSlide(!slide)
    }

    const handleClose = () => {
        setNav(!nav)
    }

    // change nav color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return ( 
        <section className='h-wrappe'>

        <div className={color ? 'navbar navbar-bg' : 'navbar'}>
            <div className="container"> 
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    <Link to="hero">
                        {/* <img src="./logo.png" alt="logo" width={100} /> */}
                        <img src="./flowhite.png" alt="logo" width={200} />
                    </Link>
                
                 {/* <h3><Link onClick={handleClose} activeClass="" to="home" spy={true} smooth={true} duration={500}> </Link>GabrielOba.</h3> */}
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li className='font-gilroymedium'><a href="/"><Link onClick={handleClose} activeClass="active" to="residence" spy={true} smooth={true} duration={500}><span className='fs-12'>01.</span> Residencies</Link></a></li>
                    <li className='font-gilroymedium'><a href="/"><Link onClick={handleClose} activeClass="active" to="value" spy={true} smooth={true} duration={300}><span className='fs-12'>02.</span> Our Value</Link></a></li>
                    <li className='font-gilroymedium'><a href="/"><Link onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true} duration={500}> <span className='fs-12'>03.</span> Contact Us</Link></a></li>
                    <li className='font-gilroymedium'><a href="/"><Link onClick={handleClose} activeClass="active" to="getstarted" spy={true} smooth={true} duration={500}> <span className='fs-12'>04.</span> Get Started</Link></a></li>
                    <div className="ui-hide-mobile-only">
                        <li className='font-gilroymedium'><a href="../../assets/01GabrielObafisileResume.pdf" className='resume gradient-blue' target="_blank" rel="noopener noreferrer">Get Started</a></li>
                    </div>
                    {/* <li className='font-gilroymedium'><a href="/"><Link onClick={handleClose} activeClass="active" to="extra" spy={true} smooth={true} duration={500}>Extra</Link></a></li> */}

                    <div className='mobile-menu'>
                        {/* <button>Shop</button>
                        <button>Account</button> */}
                        <div className="social-icons">
                            <a href='https://www.linkedin.com/in/gabriel-obafisile-5ab1a1164/' className='fe fe-linkedin icon bg-purple ui-rounded pdt pdb pdl pdr fs-14 onwhite'></a>
                            <span className='fe fe-facebook icon bg-blue onwhite ui-rounded pdt pdb pdl pdr fs-14'></span>
                            <span className='fe fe-instagram icon bg-red onwhite ui-rounded pdt pdb pdl pdr fs-14 onyellow'></span>
                            {/* <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <GiCarWheel className='icon' /> */}
                        </div>
                    </div>

                </ul>

                    {/* <ul className='nav-menu hide'>
                        <li><a href="/">Shop</a></li> 
                        <li><a href="/">Account</a></li>
                    </ul> */}

                <div className="hamburger" onClick={handleNav} >
                    
                    {/* {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)} */}
                    {nav ? <><span>Close</span><FaTimes size={20} style={{ color: '#ffffff' }} /></> : <><span>Menu</span><FaBars  style={{ color: '#ffffff' }} size={20} /></>}

                    {/* {nav ? (<i><span className="fa fe-chevrons-right" style={{color: '#fff'}}></span></i>) : (<i className="fe fe-chevrons-right" style={{color: '#fff'}} ></i>)} */}
                </div>

            </div>
        </div>
        </section>
    )
}    

export default Navbar

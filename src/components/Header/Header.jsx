import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { Link } from 'react-scroll';

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if(document.documentElement.clientWidth <= 800){
            return {right: !menuOpened && "-100%"}
        }
    }

    return (
        <div>
            <section className="h-wrapper" id='header'>
                <div className="h-container flexCenter paddings innerWidth">

                    <img src="./logo.png" alt="logo" width={100} />

                    <OutsideClickHandler 
                        onOutsideClick={() => {
                            setMenuOpened(false)
                        }}
                    >
                        <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
                            <a href="#residence">Residencies</a>
                            <a href="#value">Our Value</a>
                            <a href="#contact">Contact Us</a>
                            <a href="#getstarted">Get Started</a>
                            <button className='button'>
                                <a href="#contact">Contact</a>
                            </button>
                        </div>

                    <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                        <BiMenuAltRight size={30}/>
                    </div>
                    </OutsideClickHandler>
                </div>

            </section>
        </div>
    )
}

export default Header
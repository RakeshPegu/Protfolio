import { Link as ScrollLink } from 'react-scroll';
import AuthContext from '../../context/authProvider';
import './navbar.scss';
import React, { useContext, useState } from 'react';
import ContactPage from '../../routes/contact/ContactPage';

function Navbar() {
    const { currentUser } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav>
                <div className="left">
                    <a href="/" aria-label="Home">Home</a>
                    <a href="/about" aria-label="About Me">About Me</a>
                    <a onClick={() => setOpen(prev => !prev)} aria-label="Contact">
                        Contact
                    </a>
                    <ScrollLink 
                        to="projects" 
                        smooth={true} 
                        duration={500}
                        offset={-70} 
                    >
                        Projects
                    </ScrollLink>
                </div>
                
                <div className="right">
                    {currentUser ? (
                        <div className='profile'>
                            <a href="/profile">
                                <span>Profile</span>
                            </a>
                        </div>
                    ) : (
                        <div className="register">
                            <a href='/register' aria-label="Sign Up">Sign Up</a>
                            <a href='/login' aria-label="Sign In">Sign In</a>
                        </div>
                    )}
                </div>
            </nav>
             
             <div className={open? "menu active":'menu'}>
                <ContactPage/>
                <img src='./close.png'></img>
                
                </div>
           
        </>
    );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar/navbar.css';

const Choose = () => {
    return(
        <section className="Choose">
            <div className='Choose__Navbar'>
                <div className="Choose__Navbar-circle">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div className="Choose__option">
                <Link to="/Home" className='Choose__option-home'>Home</Link>
                <Link to="" className='Choose__option-about'>About Me</Link>
                <Link to="" className='Choose__option-porfolio'>Porfolio</Link>
                <Link to="" className='Choose__option-contact'>Contact</Link>
            </div>
        </section>
    );
}

export default React.memo(Choose);
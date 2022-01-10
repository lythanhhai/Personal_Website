import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Navbar/navbar.css';

const Choose = () => {
    let navigate = useNavigate();
    const clickClose = () => {
        navigate("/");
    }
    return(
        <section className="Choose">
            <div className='Choose__Navbar'>
                <div className="Choose__Navbar-circle" onClick={() => {clickClose()}}>
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div className="Choose__option">
                <Link to="/" className='Choose__option-home'>Home</Link>
                <Link to="/About" className='Choose__option-about'>About Me</Link>
                <Link to="/Porfolio" className='Choose__option-porfolio'>Porfolio</Link>
                <Link to="/Contact" className='Choose__option-contact'>Contact</Link>
            </div>
        </section>
    );
}

export default React.memo(Choose);
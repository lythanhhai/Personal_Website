import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const AboutMe = () => {
    const navigate = useNavigate();
    const clickNavbar = () => {
        navigate("/Navbar");
    }
    return(
    <section className="Contact" id="Contact">
      <div className='Contact__Navbar'>
        <div className="Contact__Navbar-circle" onClick={() => {clickNavbar()}}>
            <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className="Contact__title">
        <h1>About Me</h1>
      </div> 
    </section>

    );
}

export default React.memo(AboutMe);
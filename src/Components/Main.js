import React from 'react';
import '../Css/Main/main.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Main = () => {
    let navigate = useNavigate();
    const clickPorfolio = () => {
        navigate('/Porfolio');
    }
    const clickAbout = () => {
        navigate('/About');
    }
    const clickNavbar = () => {
        navigate('/Navbar');
    }
    return(
        <section className="Main">
            <div className='Main__Navbar'>
                <div className="Main__Navbar-circle" onClick={() => {clickNavbar()}}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div className="Main__Infor">
                <div className='Main__Infor-left'>
                    <p>Hello, I'm</p>
                    <h2 className='left__name'>Ly Thanh Hai</h2>
                    <p>Front-end Web Developer</p>
                    <div className="left__option">
                        <button className='left__option-about' onClick={() => {clickAbout()}}>More about me</button>
                        <button className='left__option-porfolio' onClick={() => {clickPorfolio()}}>Porfolio</button>
                    </div>
                </div>
                <div className='Main__Infor-right'>
                
                </div>
            </div>
        </section>
    );
}

export default React.memo(Main);
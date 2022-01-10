import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Porfolio/porfolio.css';

const Porfolio = ({data, getIndexProject}) => {
    let navigate = useNavigate();
    const viewDetailProject = () => 
    {
        navigate("./detailProject");
    }

    const elementProducts = data.map((product, index) => {
        const {image, name, desc, createDate, technologies, role, view_line} = product;
        //console.log(image);
        return(
            <div key={index} className='product'>
                <img src={image} alt="error" className='image' />
                <h3 className='name'>
                    {name}
                </h3>
                <button className='more' onClick={() => {viewDetailProject(); getIndexProject(index);}}>
                    View Detail Project
                </button>
            </div>
        );
    })
    const clickNavbar = () => {
        navigate("/Navbar");
    }
    return(
        <section className='porfolio'>
            <div className='porfolio__Navbar'>
                <div className="porfolio__Navbar-circle" onClick={() => {clickNavbar()}}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div className='porfolio__content'>
                <h1>Recent Work</h1>
                <div class="porfolio__content-products">
                    {elementProducts}
                </div>
            </div>
        </section>
        );
}

export default React.memo(Porfolio);
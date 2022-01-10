import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Detail/detail.css';

const DetailProject = ({data}) => {
    let navigate = useNavigate();
    const backPorfolio = () => {
        navigate("/Porfolio");
    }

    return(
        <section className='detail'>
            <div className='detail__Navbar'>
                <div className="detail__Navbar-circle" onClick={() => {backPorfolio()}}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <div className='detail__content'>
                <h1>{data.image}</h1>
                <div class="detail__content-product">
                   
                </div>
            </div>
        </section>
        );
}

export default React.memo(DetailProject);
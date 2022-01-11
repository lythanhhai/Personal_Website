import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Detail/detail.css';
import { Link } from 'react-router-dom';

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
                <img src={data.image}></img>
                <div className="detail__content-product">
                   <h2 className='name'>{data.name}</h2>
                   <p className='desc'>{data.desc}</p>
                   <div className="create">
                        <p>Created ~ </p>
                        <p> {data.createDate}</p>
                   </div>
                   <div className='tech'>
                        <p>Technologies Used ~ </p>
                        <p>{data.technologies}</p>
                   </div>
                   <div className='role'>
                        <p>Role ~ </p>
                        <p>{data.role}</p>
                   </div>
                   <div className='view'>
                        <p>View live ~ </p>
                        <a href={data.view_line} target="_blank" className='view__link'>{data.view_line}</a>
                       
                   </div>
                </div>
            </div>
        </section>
        );
}

export default React.memo(DetailProject);

// <Link to={data.view_line} target="_blank" className='view__link'>{data.view_line}</Link>
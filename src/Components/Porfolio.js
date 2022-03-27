import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Porfolio/porfolio.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getIndexReducer from '../Reducer/getIndexReducer';
import getIndex from '../Action/getIndexProject';

const Porfolio = ({data, getIndexProject}) => {
    let navigate = useNavigate();
    const viewDetailProject = (id) => 
    {
        navigate(`./detailProject/${id}`);
    }

    const [loading, setLoading] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            setLoading(1);
        }, 1500);

    }, [loading])
    
    // khai báo selector redux
    const [id, setId] = useState(0);
    const identity = useSelector(state => state.getIndexReducer).id;
    const dispatch = useDispatch();

    const elementProducts = data.map((product, index) => {
        const {image, name, desc, createDate, technologies, role, view_line} = product;
        //console.log(image);
        return(
            loading == 0 ? 
            (
            <div key={index} className='product'>
                <div className='image_ske'>
                    <Skeleton height={130} width={`100%`} baseColor='rgba(140, 140, 140)'/>
                </div>
                <div className='name_ske'>
                    <Skeleton height={20} width={`100%`} baseColor='rgba(140, 140, 140)'/>
                </div>
                <div className='more_ske'>
                    <Skeleton height={30} width={`100%`} baseColor='rgba(140, 140, 140)'/>
                </div>
            </div>
            )
            :
            (
            <div key={index} className='product'>
                <img src={image} alt="error" className='image' />
                <h3 className='name'>
                    {name}
                </h3>
                <button className='more' onClick={() => {viewDetailProject(index + 1); setId(index + 1); dispatch(getIndex(index + 1)); getIndexProject(index);}}>
                    View Detail Project
                </button>
            </div>
            )
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
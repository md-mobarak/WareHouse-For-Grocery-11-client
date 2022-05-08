import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import AskQuestion from '../AskQuestion/AskQuestion';
import Bannar from '../Bannar/Bannar';
import Footer from '../Footer/Footer';
import InventoryItems from '../InventoryItems/InventoryItems';
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([]);
    const itemsSlice = items.slice(0, 6)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                    ;
            })
    }, [])
    return (
        <div style={{ backgroundColor: "#EFF7FA" }}>
            {/* <h1>this home</h1> */}
            <Bannar></Bannar>
            <h1 className='my-5 text-center'>WareHouse For Grocery</h1>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {itemsSlice.map(item => <InventoryItems key={item._id} item={item}>
                    </InventoryItems>)}
                </div>
                <div className='d-flex justify-content-center mt-3 mb-5 '>
                    <button onClick={() => navigate('/all-product')} className=' text-white fs-5 fw-bold w-50 py-4 rounded-3 border-0 all-product'>Manage All Products</button>
                </div>
                <div className='container'>
                    <h1 className='text-center text-primary fw-bold'>About Us</h1>
                    <AboutUs></AboutUs>
                </div>
                <div className='container my-5'>
                    <h1 className='text-center my-5'>Frequently Asked Questions</h1>
                    <AskQuestion></AskQuestion>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
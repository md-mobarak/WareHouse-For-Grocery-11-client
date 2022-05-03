import React, { useEffect, useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AskQuestion from '../AskQuestion/AskQuestion';
import Bannar from '../Bannar/Bannar';
import Footer from '../Footer/Footer';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    const [items, setItems] = useState([]);
    const itemsSlice = items.slice(0, 6)

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
            <h1 className='my-5 text-center'>Inventory Items</h1>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {itemsSlice.map(item => <InventoryItems key={item._id} item={item}>
                    </InventoryItems>)}
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
import React, { useEffect, useState } from 'react';
import Bannar from '../Bannar/Bannar';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    const [items, setItems] = useState([]);
    const itemsSlice = items.slice(0, 6)

    useEffect(() => {
        fetch('fakeData.json')
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
            </div>
        </div>
    );
};

export default Home;
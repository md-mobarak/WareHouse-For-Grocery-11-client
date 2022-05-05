
import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';

const AllProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure?")
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(pd => pd._id !== id)
                    setProducts(remaining)
                })
        }
    }
    return (
        <div className='container row mx-auto mt-5 g-4 '>
            {products.map(product => <div className='col-md-4 col-sm-12' key={product._id}>
                <div className='' >
                    <img src={product.img} alt="" />

                </div>
                <p>Price{product.price}</p>
                <p style={{ textAlign: 'justify' }}>Description{product.descriptions.slice(0, 100)}</p>
                <button onClick={() => handleDelete(product._id)} className='btn btn-success w-100'>Delete</button>
            </div>)}
        </div>
    );
};

export default AllProduct;
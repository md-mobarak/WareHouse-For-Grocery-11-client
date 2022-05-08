import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { updateId } = useParams()
    const [productDetails, setProductDetails] = useState({});
    // const { name, price, quantity, img } = productDetails;

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/product/${updateId}`)
            .then(res => res.json())
            .then(data => {
                setProductDetails(data);
            })
    }, [productDetails])




    const handleDelivered = () => {

        const xQuantity = productDetails.quantity
        const quantity = xQuantity - 1
        const updateInfo = { quantity }
        if (updateInfo > 0) {
            return alert('Product Quantity is empty')
        }
        // if (quantity > 0) {
        //     let updateInfo = { quantity }

        // }
        const url = `http://localhost:5000/product/${updateId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setProductDetails(data)
            })

    }

    const handleUpdateQuantity = (e) => {
        e.preventDefault()
        const preQuantity = parseInt(productDetails.quantity);
        const newQuantity = parseInt(e.target.stock.value);
        // console.log(reStock);
        const quantity = (preQuantity + newQuantity);
        console.log(quantity);
        const updateInfo = { quantity };
        console.log(updateInfo);
        const url = `http://localhost:5000/product/${updateId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Are You Sure??')
                e.target.reset()
            })

    }


    return (
        <div>

            <div className='d-flex justify-content-center my-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productDetails.img} />
                    <Card.Body>
                        <Card.Title>{productDetails.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <h6>Price{productDetails.price}</h6>
                        <p>Quantity{productDetails.quantity}</p>
                        <Button onClick={handleDelivered} variant="success">Delivered</Button>
                    </Card.Body>
                </Card>

            </div>
            <div className='w-75 container d-flex justify-content-center'>
                <form onSubmit={handleUpdateQuantity}>
                    <input className='rounded-3' type="text" name='stock' placeholder='Restock' />
                    <input className='bg-success rounded-3 text-white' type="submit" value="ReStock" />
                </form>
            </div>

        </div>
    );
};

export default ProductDetail;
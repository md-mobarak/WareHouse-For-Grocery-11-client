import React, { useEffect, useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { updateId } = useParams()
    const [productDetails, setProductDetails] = useState({});
    const [newQuantity, setNewQuantity] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/product/${updateId}`)
            .then(res => res.json())
            .then(data => {
                setProductDetails(data);
            })
    }, [])

    const { name, price, quantity, img } = productDetails


    return (
        <div>
            <div className='d-flex justify-content-center my-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <p>Quantity{quantity}</p>
                        <Button variant="success">Delivered</Button>
                    </Card.Body>
                </Card>

            </div>
            <div className='w-50 mx-auto'>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Stock Product"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text className='bg-success text-white' id="basic-addon2">Restock</InputGroup.Text>
                </InputGroup>

            </div>
            <div className='d-flex justify-content-center my-5'>
                <button onClick={() => navigate('/all-product')} className='bg-success text-white fw-bold w-50 py-2 rounded-3 border-0'>Manage All Products</button>
            </div>
        </div>
    );
};

export default ProductDetail;
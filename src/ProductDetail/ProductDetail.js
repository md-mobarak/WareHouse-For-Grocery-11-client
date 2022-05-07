import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { updateId } = useParams()
    const [productDetails, setProductDetails] = useState({});
    const [reload, setIsReload] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/product/${updateId}`)
            .then(res => res.json())
            .then(data => {
                setProductDetails(data);
            })
    }, [reload])

    const { name, price, quantity, img } = productDetails;


    const handleDelivered = () => {

        const xQuantity = parseInt(quantity) - 1
        const store = { name, price, xQuantity, img }
        const url = `http://localhost:5000/product/${updateId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(store)
        }).then(res => res.json())
            .then(data => {
                // console.log(data);
                setIsReload(data)
            })
        return xQuantity
    }

    const handleRestock = (e) => {
        const reStock = e.target.restock.value;
        console.log(reStock);

    }


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
                        <h6>Price{price}</h6>
                        <p>Quantity{ }</p>
                        <Button onClick={handleDelivered} variant="success">Delivered</Button>
                    </Card.Body>
                </Card>

            </div>
            <div className='w-50 mx-auto'>
                <InputGroup className="mb-3">
                    <FormControl
                        name='restock'
                        placeholder="Stock Product"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text onClick={handleRestock} className='bg-success text-white' id="basic-addon2">Restock</InputGroup.Text>
                </InputGroup>

            </div>

        </div>
    );
};

export default ProductDetail;
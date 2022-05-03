import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { updateId } = useParams()
    const [productDetails, setProductDetails] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${updateId}`)
            .then(res => res.json())
            .then(data => {
                setProductDetails(data);
                console.log(data);
            })

    }, [productDetails])
    return (
        <div>
            <h1>Hello{productDetails.name}</h1>
        </div>
    );
};

export default ProductDetail;
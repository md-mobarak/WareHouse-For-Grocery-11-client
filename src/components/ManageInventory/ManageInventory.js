
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageInventory = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSubmit = (e) => {

        const name = e.target.productName.value;
        const price = e.target.productPrice.value;
        const quantity = e.target.quantity.value;
        const supplierName = e.target.supplierName.value;
        const descriptions = e.target.productDescriptions.value;
        const img = e.target.productImage.value;
        const newProduct = {

            name,
            price,
            quantity,
            supplierName,
            descriptions,
            img
        }
        console.log(newProduct);
        e.preventDefault()
        e.target.reset()
        fetch('http://localhost:5000/manageproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Product Added Successfully')
            })
    }
    return (
        <div className='w-50 mx-auto my-5 d-flex justify-content-center'>
            <form className='border p-4 bg-info rounded-3 shadow-lg p-3 mb-5 ' onSubmit={handleSubmit}>
                <input type="email" name="email" value={user.email} id="" readOnly disabled /> <br /> <br />
                <input className='rounded-3' type="text" name="productName" id="" placeholder='product Name' /> <br /> <br />

                <input className='rounded-3' type="text" name="productPrice" id="" placeholder='productPrice' /> <br /> <br />

                <input className='rounded-3' type="text" name="quantity" placeholder='Product Quantity' id="" /> <br /> <br />

                <input className='rounded-3' type="text" name="supplierName" id="" placeholder='supplierName' /><br /> <br />

                <textarea className='rounded-3' name="productDescriptions" id="" cols="19" rows="1" placeholder='productDescriptions'></textarea> <br /> <br />

                <input className='rounded-3' type="text" name="productImage" id="" placeholder='Product Image' /> <br /> <br />
                <button className='btn btn-dark rounded-3'>Add Product</button>
            </form>
        </div>
    );
};

export default ManageInventory;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const email = user.email
            const url = `https://lit-garden-40377.herokuapp.com/myitem?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer${localStorage.getItem('accessToken')}`
                }
            })
            setItems(data)
        }
        getItems()

    }, [user])


    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure?")
        if (proceed) {
            const url = `https://lit-garden-40377.herokuapp.com/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(pd => pd._id !== id)
                    setItems(remaining)
                })
        }
    }


    return (
        <div>
            <h1 className='text-center text-success'>My Items</h1>
            <div className='container row mx-auto mt-5 g-4 '>
                {items.map(product => <div className='col-md-4 col-sm-12' key={product._id}>
                    <div className='' >
                        <img src={product.img} alt="" />

                    </div>
                    <p>Price{product.price}</p>
                    <p style={{ textAlign: 'justify' }}>descriptions {product.descriptions.slice(0, 100)}</p>
                    <button onClick={() => handleDelete(product._id)} className='btn btn-success w-100'>Delete</button>
                </div>)}
                {/* <div className='my-5 d-flex justify-content-center'>
                    <button className='w-50 py-2 bg-success text-white fw-bold' onClick={() => navigate('/manage-inventory')}>Add New Item</button>
                </div> */}
            </div>
        </div>
    );
};

export default MyItem;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './InventoryItems.css'

const InventoryItems = ({ item }) => {
    const navigate = useNavigate()

    const { _id, name, descriptions, img, quantity, price, supplierName
    } = item


    return (
        <div className=''>
            <div className="col shadow-lg p-3 mb-5 bg-body rounded-3">
                <div className="card">
                    <img src={img} className="card-img-top w-50 d-flex mx-auto" alt="..." />
                    <div classNameName="card-body">
                        <h5 className="card-title ps-3 my-0">{name}</h5>
                        <h3 className="card-title ps-3 my-0">{quantity}</h3>
                        <h3 className="card-title ps-3 mt-0">{supplierName}</h3>
                        <h4 className="card-title ps-3 mt-0">{price}</h4>
                        <p title={descriptions} className="card-text ps-3 pb-3">{descriptions.slice(0, 100) + '...'}</p>
                    </div>
                    <button onClick={() => navigate(`/update/${_id}`)} className='btn update-btn text-white'>Update</button>
                </div>
            </div>
        </div >
    );
};

export default InventoryItems;
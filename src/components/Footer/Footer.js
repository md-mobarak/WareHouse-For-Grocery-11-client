import React from 'react';
import './Footer.css'

const Footer = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (
        <div className='footer-site'>
            <p className='text-center text-white'>{date} &copy; .All rights reserved </p>
        </div>
    );
};

export default Footer;
import React from 'react';

const NotFound = () => {
    const img = "https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
    return (
        <div>
            <h1 className='mt-3 text-danger text-center'>404...Not Found</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;
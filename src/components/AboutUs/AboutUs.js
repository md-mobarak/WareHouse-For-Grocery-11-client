import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    const img = "https://klbtheme.com/groci/wp-content/uploads/2018/08/about.jpg"
    return (
        <div className=' row'>
            <div className='col-sm-12 col-md-6'>
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className=' col-sm-12 col-md-6 d-flex align-items-center'>
                <div>
                    <h3 className='mb-4 about-info'>Save more with GO! We give you the lowest prices on all your grocery needs.</h3><br />
                    <h4 className='mt-3'>Our Vision</h4>
                    <p>Whether you're stuck at home, too busy to shop, or want to save time, it's convenient to shop online for groceries. We looked at online grocery shopping services and rated each by convenience, selection, quality, ease of use, and cost. Here are our picks for the top eight online grocery shopping sites. .</p>
                    <h4 className='mt-5'>Our Goal</h4>
                    <p>FreshDirect focuses on delivering quality, fresh, organic food with a short supply chain, working directly with its local farms, dairies, fisheries, and other food partners. FreshDirect shoppers fill your online order from the company's facility, not local grocery stores, with a vast inventory of items ranging from specialty goods to supermarket staples. Shop from the FreshDirect website or the FreshDirect iOS and Android apps. .</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam impedit sed, voluptatibus ipsa, quia ipsam facere non nobis fuga earum minus voluptatum, blanditiis expedita recusandae amet eaque laudantium consequatur sapiente.</p>
                    <h4 className='mt-5'>Our Goal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae provident corrupti voluptates quidem id nihil, totam illum iusto aut, nesciunt libero consequuntur iure cupiditate animi, praesentium commodi odit deleniti.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
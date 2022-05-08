import React from 'react';
import { Accordion } from 'react-bootstrap';
import './AskQuestion.css'

const AskQuestion = () => {
    return (
        <div className='row'>
            <div className='col-sm-12 col-md-6 shadow-lg p-3 mb-5 bg-body rounded'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>COVID-19 updates</Accordion.Header>
                        <Accordion.Body>
                            "Fresh Chef is taking the highest cleaning and safety precautions in the fight against Covid-19 for our grocery. We offer curbside takeout, allowing our guests to receive our delicious food in a contactless manner. In addition, our dining room and patio area are open for seating. Reservations are not required but recommended. Our entire staff is required to wear masks and are trained in proper sanitizing requirements. At Fresh Chef, guest safety is our number one priority."
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Submit Your Complaint</Accordion.Header>
                        <Accordion.Body>
                            If there is any complaint about our work or product, you can complain here. We will try to resolve it through timely meeting. And you can also tell us about the quality of our product if you want.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className='col-sm-12 col-md-6 shadow-lg p-3 mb-5 bg-body rounded'>
                <form action="">
                    <h4>Ask us a question</h4>
                    <div className='d-flex'>
                        <input className='me-2 w-100' type="text" name="test" placeholder='Enter Name*' id="" />
                        <input className='w-100' type="email" name="email" placeholder='Enter Email*' id="" />
                    </div><br />
                    <input type="text" name="" id="" placeholder='Subject' className='w-100' /><br /> <br />
                    <textarea placeholder='Your Message' name="" id="" cols="43" rows="5"></textarea> <br />
                    <input className='submit-btn' type="button" value="Send Message" />
                </form>
            </div>
        </div>
    );
};

export default AskQuestion;
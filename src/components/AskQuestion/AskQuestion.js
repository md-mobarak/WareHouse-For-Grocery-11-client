import React from 'react';
import { Accordion } from 'react-bootstrap';
import './AskQuestion.css'

const AskQuestion = () => {
    return (
        <div className='row'>
            <div className='col-sm-12 col-md-6 shadow-lg p-3 mb-5 bg-body rounded'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
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
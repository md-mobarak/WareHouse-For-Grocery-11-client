import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const googleImg = "https://cdn-icons-png.flaticon.com/512/270/270014.png"
    const navigate = useNavigate()
    return (
        <div className='w-50 mx-auto mt-5'>

            <Form>
                <h1 className='text-center'>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p> Are you New? <button onClick={() => navigate('/signup')} className='btn btn-link text-decoration-none'>Please Register</button></p>
                <Button className='login-btn w-100  fs-5' variant="" type="submit">
                    Login
                </Button>
                <p className='text-center my-0'>Or</p>
                <Button className='login-btn w-100 mb-3 fs-5 google-btn' variant="" type="submit">
                    <img src={googleImg} width="25px" alt="" /> Google Sign in
                </Button><br />
                <p className='d-inline'>Forget Password? </p><button className='btn btn-link d-inline'>Reset Password</button>
            </Form>

        </div>
    );
};

export default Login;
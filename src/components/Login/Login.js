import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const googleImg = "https://cdn-icons-png.flaticon.com/512/270/270014.png"
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (user || googleUser) {
        navigate('/')
    }
    if (googleLoading || loading) {
        return <p>Loading...</p>
    }
    if (!user) {
        <p className='text-danger'>Please Register</p>
    }
    if (error) {
        <p className='text-danger'>{error.message}</p>
    }
    const signInEmailAndPassword = () => {
        signInWithEmailAndPassword(email, password)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(email, password)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-50 mx-auto mt-5'>

            <Form onSubmit={handleSubmit}>
                <h1 className='text-center'>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <p> Are you New? <button onClick={() => navigate('/signup')} className='btn btn-link text-decoration-none'>Please Register</button></p>
                <Button onClick={signInEmailAndPassword} className='login-btn w-100  fs-5' variant="" type="submit">
                    Login
                </Button>
                <p className='text-center my-0'>Or</p>
                <Button onClick={handleGoogleSignIn} className='login-btn w-100 mb-3 fs-5 google-btn' variant="" type="submit">
                    <img src={googleImg} width="25px" alt="" /> Google Sign in
                </Button><br />
                <p className='d-inline'>Forget Password? </p><button className='btn btn-link d-inline'>Reset Password</button>
                <p className='text-danger'>{googleError ? googleError.message : ''}</p>
            </Form>

        </div>
    );
};

export default Login;
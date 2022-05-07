import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { async } from '@firebase/util';
import axios from 'axios';

const Login = () => {
    let location = useLocation();
    const googleImg = "https://cdn-icons-png.flaticon.com/512/270/270014.png"
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const passwordReset = async () => {
        await sendPasswordResetEmail(email)
        toast('Sent email');
    }

    if (sending) {
        return <p>Sending...</p>;
    }
    if (resetError) {
        return <p>{resetError.message}</p>
    }



    if (user || googleUser) {
        // return navigate(from, { replace: true });

    }

    if (loading) {
        return <h1 className='text-success text-center'>Loading...</h1>
    }
    if (googleLoading) {
        return <h1>Loading...</h1>
    }

    const signInEmailAndPassword = async () => {
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/login', { email })
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken)
        return navigate(from, { replace: true });
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
                <p className='text-danger'>{error ? error.message : ''}</p>
                <Button onClick={signInEmailAndPassword} className='login-btn w-100  fs-5' variant="" type="submit">
                    Login
                </Button>
                <p className='text-center my-0'>Or</p>
                <Button onClick={handleGoogleSignIn} className='login-btn w-100 mb-3 fs-5 google-btn' variant="" type="submit">
                    <img src={googleImg} width="25px" alt="" /> Google Sign in
                </Button><br />
                <p className='d-inline'>Forget Password? </p>
                <button onClick={passwordReset} className='btn btn-link d-inline'>Reset Password</button>
                <p className='text-danger'>{googleError ? googleError.message : ''}</p>

            </Form>
            <ToastContainer />

        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleEmailAndPassword = () => {
        createUserWithEmailAndPassword(email, password)
        console.log(email, password);

    }
    if (user || googleUser) {
        navigate('/')
    }
    if (loading) {
        return <p>Loading...</p>
    }
    if (googleLoading) {
        return <p>Loading..</p>
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(email, password)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }


    const googleImg = "https://cdn-icons-png.flaticon.com/512/270/270014.png"
    return (
        <div className=' mx-auto w-50 mt-5'>

            <Form onSubmit={handleSubmit}>
                <h1 className='text-center'>Register</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <span>Are you Registered? <button onClick={() => navigate('/login')} className='btn btn-link text-decoration-none'>Please Login</button></span> <br />
                <Button onClick={handleEmailAndPassword} className='login-btn w-100  fs-5' variant="" type="submit">
                    Register
                </Button>
                <p className='text-center my-0'>Or</p>
                <Button onClick={handleGoogleSignIn} className='login-btn w-100 mb-3 fs-5 google-btn' variant="" type="submit">
                    <img src={googleImg} width="25px" alt="" /> Google Sign in
                </Button><br />
            </Form>
            <p className='text-danger'>{error ? error.message : ''}</p>
            <p className='text-danger'>{googleError ? googleError.message : ''}</p>
        </div>
    );
};

export default SignUp;
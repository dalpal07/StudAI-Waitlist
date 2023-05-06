'use client';

import React, { useState } from 'react';
import {
    Button, styled, TextField
} from "@mui/material";

const LandingPage = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your logic here to handle the form submission,
        // such as sending the email to a backend API or storing it in a database

        // Reset the form after submission
        setEmail('');
    };

    return (
        <div>
            <h1>Join Our Waitlist!</h1>
            <p>Be the first to know when our amazing product launches.</p>
            <TextField/>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address"
                    required
                />
                <Button variant="contained" color="secondary">Join Now</Button>
            </form>
        </div>
    );
};

export default LandingPage;

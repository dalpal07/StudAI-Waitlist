'use client';

import React, { useState } from 'react';
import {
    styled, Typography, createTheme, ThemeProvider
} from "@mui/material";
import ConfirmationPopup from "@/app/Components/confirmationPopup";
import dynamic from 'next/dynamic';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#A44CD3', // Custom secondary color
        },
    },
});

const Button = dynamic(() => import('@mui/material/Button'), { ssr: false });

const RootDiv = styled('div')({
    paddingTop: '25vh',
    backgroundImage: `url('/studAIBackground.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
});

const EmailBox = styled('input')({
    borderRadius: '5px',
    height: '2em',
    width: '20em',
    marginTop: '2.5px',
    marginRight: '1vw',
    color: 'black'
})

const StyledForm = styled('form')({
    marginTop: '3vh',
    display: 'flex',
    justifyContent: 'center'
})

const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    },
    '&:not(:hover)': {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const LandingPage = () => {
    const [email, setEmail] = useState('');
    const [openDialog, setOpenDialog] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your logic here to handle the form submission,
        // such as sending the email to a backend API or storing it in a database

        // Reset the form after submission
        setEmail('');
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    }

    return (
        <ThemeProvider theme={theme}>
            <RootDiv>
                <Typography variant="h1" align="center">StudAI</Typography>
                <Typography variant="body1" align="center">Join the waitlist, and make your data work for you</Typography>
                <StyledForm onSubmit={handleSubmit}>
                    <EmailBox
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email address"
                        required
                    />
                    <StyledButton variant="contained"  type="submit">Join Now</StyledButton>
                </StyledForm>
                <ConfirmationPopup
                    open={openDialog}
                    onClose={handleDialogClose}
                />
            </RootDiv>
        </ThemeProvider>
    );
};

export default LandingPage;

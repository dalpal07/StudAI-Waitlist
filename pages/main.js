'use client';

import React, { useState } from 'react';
import {
    styled, Typography, createTheme, ThemeProvider
} from "@mui/material";
import ConfirmationPopup from "./confirmationPopup";
import dynamic from 'next/dynamic';
// import clientPromise from "../lib/mongodb";
// export async function getServerSideProps() {
//     try {
//         const client = await clientPromise;
//         const db = client.db("Waitlist");
//
//     } catch(e) {
//         console.error(e);
//     }
// }


const theme = createTheme({
    palette: {
        primary: {
            main: '#b0b0b0'
        },
        secondary: {
            main: '#ffffff', // Custom secondary color
        }
    }
});

const Button = dynamic(() => import('@mui/material/Button'), { ssr: false });

const RootDiv = styled('div')({
    paddingTop: '25vh',
    // background: 'linear-gradient(180deg, #F2F2F2 0%, rgba(242, 242, 242, 0) 57.81%, rgba(83, 183, 83, 0.16) 100%)',
    background: 'linear-gradient(to bottom, #F2F2F2, #53B75329)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '65vh',
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
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    '&:not(:hover)': {
        backgroundColor: theme.palette.primary.main,
    },
}));

const StyledTypography = styled(Typography)(({
    color: "#caffc1"
}))

const Main = () => {
    const [email, setEmail] = useState('');
    const [openDialog, setOpenDialog] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    async function handleSubmit(e) {
        e.preventDefault();

        // Add your logic here to handle the form submission,
        // such as sending the email to a backend API or storing it in a database
        try {
            // const client = await clientPromise;
            // const db = client.db("Waitlist")
            // console.log("Adding to database: " + e);

        } catch(error) {
            console.error(error);
        }

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
                <StyledTypography variant="h1" align="center">StudAI</StyledTypography>
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

export default Main;

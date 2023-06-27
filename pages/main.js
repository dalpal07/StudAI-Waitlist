'use client';

import React, { useState } from 'react';
import {
    styled, Typography, createTheme, ThemeProvider
} from "@mui/material";
import ConfirmationPopup from "./confirmationPopup";
import dynamic from 'next/dynamic';
import Image from 'next/image'
import Form from "../components/Form";


const theme = createTheme({
    palette: {
        primary: {
            main: '#b0b0b0'
        },
        secondary: {
            main: '#E3E3E3'
        },
        info: {
            main: '#3F3636'
        }
    }
});

const Button = dynamic(() => import('@mui/material/Button'), { ssr: false });

const RootDiv = styled('div')({
    paddingTop: '25vh',
    background: 'linear-gradient(180deg, #F2F2F2 0%, rgba(242, 242, 242, 0) 57.81%, rgba(83, 183, 83, 0.16) 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '67vh',
});

const DivContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center'
});

const Main = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const emailForm = {
        email: ''
    }

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
                <DivContainer>
                    <Image
                        src="/studLarge.png"
                        width={400}
                        height={72.42}
                        style={{
                            paddingBottom: '20px'
                        }}/>
                </DivContainer>
                <Typography variant="body1" align="center">Join the waitlist, and make your data work for you</Typography>
                <Form userForm={emailForm}/>
                <ConfirmationPopup
                    open={openDialog}
                    onClose={handleDialogClose}
                />
            </RootDiv>
        </ThemeProvider>
    );
};

export default Main;

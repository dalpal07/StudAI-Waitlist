'use client';

import React, { useState } from 'react';
import {
    styled, Typography, createTheme, ThemeProvider
} from "@mui/material";
import Image from 'next/image'
import Form from "../components/Form";
import Navbar from "./navBar";


const theme = createTheme({
    palette: {
        primary: {
            main: '#646464'
        },
        secondary: {
            main: '#F2F2F2', // Custom secondary color
        }
    }
});

const RootDiv = styled('div')({
    background: 'linear-gradient(180deg, #F2F2F2 0%, rgba(242, 242, 242, 0) 57.81%, rgba(83, 183, 83, 0.16) 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
});

const DivContainer = styled('div')({
    paddingTop: '25vh',
    display: 'flex',
    justifyContent: 'center'
});

const Main = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const emailForm = {
        email: '',
        firstName: '',
        lastName: '',
        companyName: ''
    }

    return (
        <ThemeProvider theme={theme}>
            <RootDiv>
                <Navbar/>
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
            </RootDiv>
        </ThemeProvider>
    );
};

export default Main;

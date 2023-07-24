'use client';

import React from 'react';
import {Container, createTheme, styled, ThemeProvider, Typography} from '@mui/material';
import Navbar from './navBar';
// import '../app/Styles/custom.css';

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

const PaddingDiv = styled('div')({
    paddingTop: '25vh',
});


const AboutPage = () => {
    return (
        <ThemeProvider theme={theme}>
                <RootDiv>
                    <Navbar />
                    <PaddingDiv>
                    <Container maxWidth="sm">
                        <Typography variant ="h2" align="center" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body1" align="justify" paragraph>
                            Are you tired of constantly trying to reformat, dedupe, and standardize your data?
                            Do you struggle to maintain data cleanliness in your CRM? Are you at your wits end
                            combing through excel sheets or even worse, salesforce data sets thousands of rows long,
                            only to make a few simple changes? Are your reports consistently off by a significant margin,
                            or inaccurate altogether due to bad data?
                        </Typography>
                        <Typography variant="body1" align="justify" paragraph>
                            Stud AI is here to solve this problem! With the power of AI,
                            tasks like these that used to take hours can now be done in seconds. No more mind numbing menial tasks,
                            no more putting off cleaning your data until the end of the quarter,
                            and no more ineffective meetings to fix standardization issues.
                            StudAI’s goal is to be your one tool for all things data operations.
                        </Typography>
                    </Container>
                    </PaddingDiv>
                </RootDiv>
        </ThemeProvider>
    );
};

export default AboutPage;

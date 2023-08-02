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
    paddingTop: '10vh',
    overflowY: 'auto'
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
                            Are you tired of constantly struggling with data formatting, deduplication,
                            and standardization problem? Is maintaining data cleanliness in your CRM a constant headache?
                            Do you find yourself spending countless hours combing through lengthy Excel sheets or Salesforce
                            datasets, only to make a few simple changes? Are your reports consistently inaccurate or significantly
                            skewed due to flawed data?
                        </Typography>
                        <Typography variant="body1" align="justify" paragraph>
                            Say goodbye to these frustrations because Stud is here to provide
                            the ultimate solution! Leveraging the power of AI, Stud streamlines tasks that
                            once consumed hours, completing them in a matter of seconds. Gone are the days
                            of mind-numbing, repetitive work.  Stop procrastinating cleaning your data and get
                            Stud AI, your go-to tool for all data operations.
                        </Typography>
                        {/*<Typography variant="h2" align="center" width="70vw">*/}
                        {/*    What Stud AI aims to do:*/}
                        {/*</Typography>*/}
                        {/*<Typography>*/}
                        {/*    Unmatched Efficiency: Save precious time and resources with our lightning-fast AI-driven processes. What once took hours now takes seconds.*/}
                        {/*    Data Accuracy: Eliminate the headaches caused by unreliable data. Stud AI will ensure your reports and analytics are based on a foundation of clean, standardized data.*/}
                        {/*    Seamless Integration: Stud AI will seamlessly integrate with popular platforms and tools, making implementation a breeze.*/}
                        {/*</Typography>*/}
                    </Container>
                    </PaddingDiv>
                </RootDiv>
        </ThemeProvider>
    );
};

export default AboutPage;

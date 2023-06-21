'use client';

import React from 'react';
import {Container, createTheme, styled, ThemeProvider, Typography} from '@mui/material';
import Navbar from './navBar';
import '../app/Styles/custom.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4b4988'
        },
        secondary: {
            main: '#ffffff', // Custom secondary color
        }
    }
});

const RootDiv = styled('div')({
    paddingTop: '25vh',
    // backgroundImage: `url('/studAIBackground.jpeg')`,
    backgroundColor: "#3d423d",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '92vh',
});


const AboutPage = () => {
    return (
        <ThemeProvider theme={theme}>
                <Navbar />
                <RootDiv>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body1" align="justify" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus purus ac ex
                            tincidunt, vel varius sapien lacinia. Integer non enim non mauris fermentum commodo
                            vitae at justo. Aliquam erat volutpat. In dapibus est at maximus iaculis.
                        </Typography>
                        <Typography variant="body1" align="justify" paragraph>
                            Mauris id felis id mauris suscipit laoreet. Aliquam dignissim pulvinar ullamcorper.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            Fusce elementum auctor enim id rhoncus. Aliquam sodales odio et sagittis consectetur.
                        </Typography>
                    </Container>
                </RootDiv>
        </ThemeProvider>
    );
};

export default AboutPage;

import React from 'react';
import {AppBar, Toolbar, Typography, Button, styled} from '@mui/material';
import Link from 'next/link';

const LogoImage = styled('img')({
    width: '50px',
    height: 'auto'
})

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <LogoImage src="/stud.svg" alt="Logo"/>
                </Typography>
                <Link href="/Users/collinmorrison/studAI/studai-waitlist/main" passHref>
                    <Button color="inherit">Home</Button>
                </Link>
                <Link href="/pages/about" passHref>
                    <Button color="inherit">About</Button>
                </Link>
                <Link href="/contact" passHref>
                    <Button color="inherit">Contact</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
import React from 'react';
import {AppBar, Toolbar, Typography, Button, styled, useTheme} from '@mui/material';
import Link from 'next/link';

const LogoImage = styled('img')({
    width: '50px',
    height: 'auto'
})

const Navbar = () => {
    const theme = useTheme();

    return (
        <AppBar position="static" color="secondary">
            <Toolbar style={{
                boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <LogoImage src="/stud.png" alt="Logo"/>
                </Typography>
                {/*<Link href="/" passHref>*/}
                {/*    <Button color="info">Home</Button>*/}
                {/*</Link>*/}
                {/*<Link href="/pages/about" passHref>*/}
                {/*    <Button color="secondary">About</Button>*/}
                {/*</Link>*/}
                {/*<Link href="/contact" passHref>*/}
                {/*    <Button color="secondary">Contact</Button>*/}
                {/*</Link>*/}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
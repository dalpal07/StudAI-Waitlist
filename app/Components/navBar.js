import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Link href="/" passHref>
                    <Button color="inherit">Home</Button>
                </Link>
                <Link href="/about" passHref>
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
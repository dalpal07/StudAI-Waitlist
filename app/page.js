'use client';

import Image from 'next/image'
import LandingPage from "@/app/Components/landingPage";
import Navbar from "@/app/Components/navBar";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#646464'
        },
        secondary: {
            main: '#ffffff', // Custom secondary color
        }
    }
});

export default function Home() {
  return (
      <ThemeProvider theme={theme}>
        <div>
            <Navbar/>
            <LandingPage/>

        </div>
      </ThemeProvider>
  )
}

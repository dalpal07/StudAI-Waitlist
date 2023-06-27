'use client';

import Main from "./main";
import Navbar from "./navBar";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";


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

export default function Home() {
  return (
      <ThemeProvider theme={theme}>
        <div>
            <Navbar/>
            <Main/>

        </div>
      </ThemeProvider>
  )
}

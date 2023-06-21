'use client';

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, styled } from "@mui/material";

const StyledDialog = styled(Dialog)({
    "& .MuiPaper-root": {
        backgroundColor: "#4b4988", // Set the desired background color here
        borderRadius: "5px",
        color: "white"
    }
})

const ConfirmationPopup = ({ open, onClose }) => {
    return (
        <StyledDialog open={open} onClose={onClose}>
            <DialogTitle>Thank you for your participation!</DialogTitle>
            <DialogContent>
                <Typography variant="body1" align="center">Clean data awaits you</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Done</Button>
            </DialogActions>
        </StyledDialog>
    );
};

export default ConfirmationPopup;
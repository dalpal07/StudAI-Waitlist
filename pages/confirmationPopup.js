'use client';

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, styled } from "@mui/material";

const StyledDialog = styled(Dialog)({
    "& .MuiPaper-root": {
        backgroundColor: "#E3E3E3", // Set the desired background color here
        borderRadius: "5px",
        color: "#3F3636"
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
                <Button onClick={onClose} color="primary">Done</Button>
            </DialogActions>
        </StyledDialog>
    );
};

export default ConfirmationPopup;
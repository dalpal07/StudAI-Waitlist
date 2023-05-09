'use client';

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

const ConfirmationPopup = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Thank you for your participation!</DialogTitle>
            <DialogContent>
                <Typography variant="body1">Clean data awaits you</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Done</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationPopup;
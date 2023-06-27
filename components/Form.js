import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { styled, Button } from "@mui/material";
import ConfirmationPopup from "../pages/confirmationPopup";

const Form = ({ userForm }) => {
    const router = useRouter()
    const contentType = 'application/json'
    const [message, setMessage] = useState('')
    const [openDialog, setOpenDialog] = useState(false);
    const [form, setForm] = useState({
        email: userForm.email
    })

    const handleDialogClose = () => {
        setOpenDialog(false)
    }

    const postData = async (email) => {
        try {
            const res = await fetch('/api/emails', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(email),
            })

            if (!res.ok) {
                throw new Error(res.status)
            }

            router.push('/')
        } catch (error) {
            setMessage('Failed to add email')
        }
    }

    const handleChange = (e) => {
        console.log("Changing email to: " + e.target.value)
        setForm({
            ...form,
            ["email"]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postData(form)
        setOpenDialog(true)
        setForm({
            ...form,
            ["email"]: ""
        })

    }

    const StyledForm = styled('form')({
        marginTop: '3vh',
        display: 'flex',
        justifyContent: 'center'
    })

    const StyledButton = styled(Button)(({ theme }) => ({
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        '&:not(:hover)': {
            backgroundColor: theme.palette.primary.main,
        },
    }));

    const EmailBox = styled('input')({
        borderRadius: '5px',
        height: '2em',
        width: '20em',
        marginTop: '2.5px',
        marginRight: '1vw',
        color: 'black'
    })

    return (
        <StyledForm onSubmit={handleSubmit}>
            <EmailBox
                type="email"
                name="email"
                autoFocus="autoFocus"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
            />
            <StyledButton variant="contained"  type="submit">Join Now</StyledButton>
            <ConfirmationPopup
                open={openDialog}
                onClose={handleDialogClose}
            />
        </StyledForm>
    )
}

export default Form
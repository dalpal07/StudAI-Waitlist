import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { styled, Button } from "@mui/material";
import ConfirmationPopup from "../pages/confirmationPopup";

const StyledForm = styled('form')({
    marginTop: '3vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

const NameDiv = styled('div') ({
    display: 'flex',
    flexDirection: 'row'
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
    width: '21.75em',
    marginTop: '2vh',
    marginBottom: '1.5vw',
    color: 'black'
})

const FirstNameBox = styled('input')({
    borderRadius: '5px',
    height: '2em',
    width: '10em',
    marginTop: '2.5px',
    marginRight: '0.5vw',
    color: 'black'
})

const LastNameBox = styled('input')({
    borderRadius: '5px',
    height: '2em',
    width: '10em',
    marginTop: '2.5px',
    marginLeft: '0.5vw',
    color: 'black'
})

const CompanyNameBox = styled('input')({
    borderRadius: '5px',
    height: '2em',
    width: '21.75em',
    marginTop: '2vh',
    color: 'black'
})


const FormComponent = ({ handleChange, handleSubmit, form, openDialog }) => (
    <StyledForm onSubmit={handleSubmit}>
        <NameDiv>
            <FirstNameBox
                type="name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <LastNameBox
                type="name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
        </NameDiv>
        <CompanyNameBox
            type="name"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder={"Company Name"}
        />
        <EmailBox
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
        />
        <StyledButton variant="contained"  type="submit">Join Now</StyledButton>
    </StyledForm>
)

const Form = ({ userForm }) => {
    const router = useRouter()
    const contentType = 'application/json'
    const [message, setMessage] = useState('')
    const [openDialog, setOpenDialog] = useState(false);
    const [form, setForm] = useState({
        email: userForm.email,
        firstName: userForm.firstName,
        lastName: userForm.lastName,
        companyName: userForm.companyName
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
        if (e.target.name === "email") {
            setForm({
                ...form,
                ["email"]: e.target.value
            })
        } else if (e.target.name === "firstName") {
            // console.log("Changing firstName")
            setForm({
                ...form,
                ["firstName"]: e.target.value
            })
        } else if (e.target.name === "lastName") {
            setForm({
                ...form,
                ["lastName"]: e.target.value
            })
        } else if (e.target.name === "companyName") {
            setForm({
                ...form,
                ["companyName"]: e.target.value
            })
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postData(form)
        setOpenDialog(true)
        setForm({
            ...form,
            ["email"]: "",
            ["firstName"]: "",
            ["lastName"]: "",
            ["companyName"]: ""
        })

    }



    return (
        <>
            <FormComponent handleChange={handleChange} handleSubmit={handleSubmit} form={form} openDialog={openDialog}/>
            <ConfirmationPopup
                open={openDialog}
                onClose={handleDialogClose}
            />
        </>
    )
}

export default Form
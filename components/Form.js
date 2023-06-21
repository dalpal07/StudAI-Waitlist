import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'

const Form = ({ userForm }) => {
    const router = useRouter()
    const contentType = 'application/json'
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')

    const [form, setForm] = useState({
        name: userForm.name,
        email: userForm.email,
    })

    const postData = async (form) => {
        try {
            const res = await fetch('/api/', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(form),
            })

            if (!res.ok) {
                throw new Error(res.status)
            }

            router.push('/')
        } catch (error) {
            setMessage('Failed to add email')
        }
    }
}
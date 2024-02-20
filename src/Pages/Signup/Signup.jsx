import React, { useCallback, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'

import { Button, Grid, TextField, Text } from '@/components'
import { signup } from '@/redux/reducers/auth/authSlice'

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', promoCodeId: null, institution: '' })
    const [emailError, setEmailError] = useState('')
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)
    const dispatch = useDispatch()

    const handleChange = useCallback((value, name) => {
        setFormData(formData => ({ ...formData, [name]: value }))
    }, [])

    const handleSumbit = async e => {
        e.preventDefault()

        dispatch(signup(formData)).then(res => {
            if (res.payload.error) return console.error(res.payload.error)
        })
    }

    const validateEmail = useCallback(async () => {
        try {
            const response = await axios.get(`/user/email/validate?email=${formData.email}`)
            if (response.data.valid) setEmailError('')
        } catch (error) {
            setEmailError(error.response.data?.errors?.[0] || 'El correo ya esta en uso. Elige otro.')
        }
    }, [formData.email])

    return (
        <Grid className="signup" padding="2.28em 1.57em" contentY="center" itemsX="center" gap="2.18em">
            <Text bold align="center" size="5">Abre una cuenta</Text>

            <form onSubmit={handleSumbit}>
                <Grid w100 className="signup__form" gap="1.61em">
                    <TextField label="Nombre completo"
                        value={formData.name}
                        onChange={v => handleChange(v, 'name')}
                    />
                    <TextField label="Correo electrónico"
                        type="email"
                        value={formData.email}
                        onChange={v => handleChange(v, 'email')}
                    />
                    {emailError && <Text color="error">{emailError}</Text>}
                    <TextField label="Contraseña"
                        type="password"
                        value={formData.password}
                        onChange={v => handleChange(v, 'password')}
                    />
                    {showError && <Text color="error" align="center">{error}</Text>}
                    <Button type="submit" selfCenter>Abrir cuenta</Button>
                </Grid>
            </form>
        </Grid>
    )
}

export default Signup

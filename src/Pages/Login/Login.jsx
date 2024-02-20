import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link as RouteLink } from 'react-router-dom'
import { Button, Grid, Text, TextField } from '@/components'
import { login } from '@/redux/reducers/auth/authSlice'
import { routes } from '@/routing/routes'

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [showError, setShowError] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = useCallback((value, name) => {
        setFormData(formData => ({ ...formData, [name]: value }))
    }, [])

    const handleSumbit = async e => {
        e.preventDefault()

        if (formData.email === '' || formData.password === '') {
            setError('Hay campos vacios')
            setShowError(true)
        } else {
            dispatch(login(formData)).then(res => {
                setShowError(true)
                setError('El correo electrónico o la contraseña son incorrectos, intenta de nuevo.')
            })
        }
    }

    return (
        <Grid contentY="center" className="login" itemsX="center" padding="4.28em 0.42em 0em 0.42em">
            <RouteLink to={routes.vite_counter.path}>
                <img src="/vite.svg" className="logo" alt="Vite logo" />
            </RouteLink>
            <form onSubmit={handleSumbit}>
                <Grid w100 padding="1.72em 1.1em" className="login__form" gap="1.3em" maxWidth="22em">
                    <Text>Inicia sesión</Text>
                    <TextField label="Correo electrónico"
                        type="email"
                        value={formData.email}
                        onChange={v => handleChange(v, 'email')}
                    />
                    <TextField label="Contraseña"
                        type="password"
                        value={formData.password}
                        onChange={v => handleChange(v, 'password')}
                    />
                    {showError &&
                        <Text size="2" color="error">{error}</Text>
                    }
                    <Button type="submit" selfCenter>Ingresar</Button>

                    <Grid gap="2em" margin="1em 0em 0em 0em">
                        <Text medium align="center" color="first">
                            <RouteLink to={routes.signup.path} >
                                Abrir una cuenta
                            </RouteLink>
                        </Text>
                        <Text medium align="center" color="first">
                            <RouteLink to={routes.recover_password.path} >
                                Olvidé mi contraseña
                            </RouteLink>
                        </Text>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

export default Login
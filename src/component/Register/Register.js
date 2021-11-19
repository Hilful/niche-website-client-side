import React from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import  { useState } from 'react';
import { Grid } from '@mui/material';
import register from '../../Images/register.jpg'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const Register = () => {
    
        const [loginData, setLoginData] = useState({});
       
        const {registerUser, loginUser , isLoading , user , authError} = useAuth();
        const location = useLocation();
        const history = useHistory();
    
        
        const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = { ...loginData };
            newLoginData[field] = value;
            setLoginData(newLoginData);
        }
        const handleLoginSubmit = e => {
            if (loginData.password !== loginData.password2) {
                alert('Your password did not match');
                return
            }
            registerUser(loginData.email, loginData.password , loginData.name, history);
            e.preventDefault();
        }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Register</Typography>
                    { !isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Retype Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress/>
                    }
                    {user?.email && <Alert severity="success">Your user has been created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={register} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
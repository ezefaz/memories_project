import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './Icon';
import Input from './Input';
import useStyles from './styles';
import { signIn, signUp } from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

function Auth() {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp) {
            dispatch(signUp(formData, history))
        } else {
            dispatch(signIn(formData, history))
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp );
        setShowPassword(false);
    };

  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography> 
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                <Input name='lastName' label='Last Name' handleChange={handleChange}  half />
                            </>
                        )}
                        <Input name='email' label='Email Adress' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignUp && <Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password'/>}
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                { isSignUp ? 'Sign Up' : 'Sign In' }
                </Button>     
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            { isSignUp ? 'Already have an account? Sign in' 
                            : "Don't have an account? Sign Up"
                            }
                    </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth
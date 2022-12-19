import React,{useState} from 'react';
import {Avatar,Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import Icon from './icon';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { GoogleLogin,googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
function Auth() {
    const classes = useStyles();
    const [isSignup,setIsSignup] = useState(false);
    const [showPassword,setShowPassword]= useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = () => {

    }
    const googleSuccess = async (res)=>{
        const token = res?.credential;
        const result = jwt_decode(token);
    
        try {
          dispatch({ type: 'AUTH', data: { result, token } });
          
          history.push('/')
        } catch (error) {
          console.log(error);
        }
    };
    const googleFaliure = (error)=>{
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try again later");
    };
    const handleShowPassword = () =>setShowPassword((prevShowPassword)=>!prevShowPassword)
    const handleChange = () => {

    }
    const switchMode = () => {
        setIsSignup((prevIsSignup)=>!prevIsSignup);
        handleShowPassword(false);
    }
  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant="h5">{isSignup?'Sign Up':'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup&&(
                            <>
                                <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="firstname" label="First Name" handleChange={handleChange}  half/>
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange}  type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/> 
                        {isSignup&&<Input name="confirm Password" label="Repeat Password" handleChange={handleChange} type="password"/>}
                </Grid>
                <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit}>
                    {isSignup?'Sign Up':'Sign In'}
                </Button>
                <GoogleLogin
                    render={(renderProps)=>(
                        <Button className={classes.googleButton} 
                        color="primary" 
                        fullWidth 
                        onClick={renderProps.onClick}  
                        disabled={renderProps.disabled} 
                        startIcon={<Icon/>} 
                        variant='contained'
                        >Google Sign In</Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFaliure}
                    cookiePolicy="single_host_origin"
                />
                <Grid container justifyContent='flex-end'>
                        <Grid item>
                                <Button onClick={switchMode}>{
                                    isSignup?'Already have and account? Sign In': 'Dont have and Account? Sign Up'
                                }</Button>
                        </Grid>
                </Grid>
            </form>
        </Paper>

    </Container>
  );
}

export default Auth;

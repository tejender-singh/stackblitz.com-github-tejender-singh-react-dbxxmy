import React from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    
    root: {
      marginTop:80,
      maxWidth: 500,
      minWidth: 275,
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    input:{
      backgroundColor:"#fafafa",
      '&focused': {
        backgroundColor: '#fff',
        borderColor: "#ccc",
      },
    },
    error:{
      color:red[500],
      margin: theme.spacing(3, 0, 2),
      textAlign: 'center'
    }
  }));
  
  const LoginForm = (props) => {
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xs">
      <Card
        variant="outlined"
        square
      className={classes.root}>
      <CardContent>
        <CssBaseline />
        <div className={classes.paper}>
          <img height="50px" width="50px" src="../logo512.png"></img>
            <TextField
              variant="outlined"
              margin="normal"
              className={classes.input}
              required
              fullWidth
              id="email"
              placeholder="Phone number, username or email"
              name="username"
              autoComplete="email"
              onChange={props.usernameChangeHandler}
              onKeyDown = {(e) => props.onKeyDownHandler(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              className={classes.input}
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = {props.passwordChangeHandler}
              onKeyDown = {(e) => props.onKeyDownHandler(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              disabled={props.loginDisabled}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={props.loginHandler}
            >
              Sign In
            </Button>
            
            <Typography className={classes.error} variant="body2" color="textSecondary" component="p">
              {props.errorMessage}
           </Typography>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </CardContent>
      </Card>
      </Container>

    );
  }

  
// const LoginForm = (props) => {
//     return(
//         <div>
//             <input name="username" value={props.username} onChange={props.usernameChangeHandler}/>
//             <input name="password" value={props.password} onChange={props.passwordChangeHandler}/>
//             <button onClick={props.loginHandler}>Login</button>
//             <p>{props.text}</p>
//         </div>
//     )
// }

export default LoginForm;
import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

const theme = createTheme();
window.scrollTo(0, 0);

export default function SignInSide({ state, setstate, newUser }) {
  const history = useHistory()

  const [isempty, setisempty] = React.useState('')
  const [validate, setvalidate] = React.useState('')
  const [emailValidate, setemailValidate] = React.useState('')




  function checkIsEmpty(email, password) {
    if (email === '' || password === '') {
      setisempty(false)
      return false
    } else {
      setisempty(true)
      return true
    }
  }

  function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  function createItem(umail, upass, uname) {
    newUser({
      name: uname,
      email: umail,
      pass: upass
    })
    toast.success('Registerd Success!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });
    history.push("/login")

  }


  React.useEffect(() => {
    if (emailValidate === true && validate === true) {
      console.log('success');
      setstate(true)
    }

  }, [emailValidate, validate])



  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget);

    // To check if fields are empty
    let result = checkIsEmpty(data.get('email'), data.get('password'), data.get('name'))
    // let counter = 0

    if (result === true) {
      createItem(data.get('email'), data.get('password'), data.get('name'))

      let emailFlag = validateEmail(data.get('email'))
      // console.log(emailFlag);
      if (emailFlag) {
        setemailValidate(true)
      } else {
        setemailValidate(false)
      }

      // console.log("Move forard");


      // Validate lowercase letters
      let lowerCaseLetters = /[a-z]/g;
      if (data.get('password').match(lowerCaseLetters)) {
        // console.log('email successs lower');
        setvalidate(true)
      } else {
        setvalidate(false)
      }

      // Validate capital letters
      let upperCaseLetters = /[A-Z]/g;
      if (data.get('password').match(upperCaseLetters)) {
        // console.log('email successs capital');
        setvalidate(true)
      } else {
        setvalidate(false)
      }

      // Validate numbers
      let numbers = /[0-9]/g;
      if (data.get('password').match(numbers)) {
        // console.log('email successs number');
        setvalidate(true)
      } else {
        setvalidate(false)
      }

      // Validate length
      if (data.get('password').length >= 8) {
        // console.log('email successs length');
        setvalidate(true)
      } else {
        setvalidate(false)
      }


    }


    // console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    // });
  };



  return (
    <ThemeProvider theme={theme} >
      <Grid container component="main" >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/1600x900/?yachts,boat)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar> */}
            <Typography color="dodgerblue" component="h1" variant="h5">
              Sign Up

            </Typography>
            <Box width="90%" component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                fullWidth
                id="name"
                label="Enter Name"
                type="text"
                name="name"
              />
              <Grid container>
                <Grid item xs sx={{ color: "red", fontSize: "14px" }}>
                  {
                    isempty && emailValidate === false ? "Please Use the Standard Email Format" : null
                  }
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
              <Grid container>
                <Grid item xs sx={{ color: "red", fontSize: "14px" }}>
                  {
                    isempty === false ? "Please Fill the Required Fields" : null
                  }{

                    isempty === true && validate === false ? "Password must contain Uppercase,Lowercase and Number from 1-8 minimum" : null
                  }
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid onClick={() => {
                  setstate(true)
                }} item xs sx={{ fontWeight: "bolder", fontSize: "16px" }}>


                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
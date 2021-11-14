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
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/abdullah-live">
                Abdullah Younas
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignInSide({ state, setstate }) {
    const [useremail, setuseremail] = React.useState('')
    const [userpassword, setuserpassword] = React.useState('')

    React.useEffect(() => {
        let mail = localStorage.getItem("useremail");
        let pass = localStorage.getItem("userpass");
        console.log(mail, pass);
        setuserpassword(pass)
        setuseremail(mail)
    }, [])

    const [isempty2, setisempty2] = React.useState(false)
    const [iscorrect, setiscorrect] = React.useState(false)
    function checkSignIn(inputmail, inputpass) {
        // let mail = localStorage.getItem("useremail");
        // let pass = localStorage.getItem("userpass");
        // console.log('mail', mail)
        // console.log('Pass', pass);
        if (inputmail == useremail && userpassword == inputpass) {
            window.location.replace('https://github.com/abdullah-live')
        } else {
            setiscorrect(true)
            toast.error('Invalid Credientials!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // alert('Invalid Credientials')
        }


    }

    function checkIsEmpty(email, password) {
        if (email === '' || password === '') {
            setisempty2(true)
            return false
        } else {
            setisempty2(false)
            return true
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        let result = checkIsEmpty(data.get('email'), data.get('password'))
        if (result) {
            checkSignIn(data.get('email'), data.get('password'))
        }

        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
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
                            Information Security Sign In
                        </Typography>
                        <Box width="90%" component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>


                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />

                            <TextField
                                margin="normal"
                                required
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
                                        isempty2 ? "Please Fill the Required Fields" : null
                                    }
                                    {
                                        iscorrect && isempty2 ? "Invalid Credientials Please try again" : null
                                    }
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid onClick={() => {
                                    setstate(false)
                                }} item xs sx={{ fontWeight: "bolder", fontSize: "16px" }}>

                                    SignUp?
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
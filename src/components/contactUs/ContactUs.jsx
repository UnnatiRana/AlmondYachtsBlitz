import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import group from './assests/Group.png';
const theme = createTheme();

export default () => {
    window.scrollTo(0,0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (<>
        <Box sx={{ background: '#F1B78A' }}>
            <Typography align="center" fontSize={{ xs: '20px', md: '26px' }} sx={{ fontWeight: 'bold', fontFamily: 'Josefin Sans', }}>
                Contact US
            </Typography>
        </Box>
        <Container textAlign='center' justifyContent='space-between' sx={{padding:'10px 0px', }}>
            <Grid container alignItems='flex-start' mt={10}>
                <Grid item xs={12} md={6} mb={5}>
                    <Container>
                        <Typography fontSize={{ xs: '18', md: '22px' }} sx={{ fontWeight: 'bold' }}>
                            Information About us
                        </Typography>
                        <Typography fontSize={{ xs: '14', md: '18px' }} sx={{ textAlign: 'justify' }}>
                            Almond Yachts operates out of both the United States and Australia.
                            Our Yachts are made in Australia to the highest quality, and shipped worldwide.
                        </Typography>
                        <Box mt={6} display='flex'>
                            <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#5625DF' }} mr={1}></Box>
                            <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#FF27B7' }} mr={1}></Box>
                            <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#37DAF3' }} mr={1}></Box>
                        </Box>
                    </Container>
                </Grid>



                <Grid item xs={12} md={6} container alignItems='flex-end'>
                    <Grid item xs={6}>
                        <Container>
                            <Typography fontSize={{ xs: '18', md: '22px' }} sx={{ fontWeight: 'bold' }}>
                                Contact Way
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#5726DF' }} mr={1}></Box>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography fontSize={{ xs: '10px', md: '11px' }}>
                                            Tel: 123-45-67-89
                                            <br />
                                            E-Mail: info@almond.yachts
                                        </Typography>
                                    </ListItemText>

                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#FFB265' }} mr={1}></Box>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography fontSize={{ xs: '12px', md: '14px' }}>
                                            Callaghan
                                            <br />
                                            Australia
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Container>
                    </Grid>

                    <Grid item xs={6}>
                        <Container>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#FB2E86' }} mr={1}></Box>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography fontSize={{ xs: '12px', md: '14px' }}>
                                            Support Forum
                                            <br />
                                            For over 24hr
                                        </Typography>
                                    </ListItemText>

                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#1BE982' }} mr={1}></Box>
                                    </ListItemIcon>
                                    <ListItemText >
                                        <Typography fontSize={{ xs: '12px', md: '14px' }}>
                                            Fixed rate shipping
                                            <br />
                                            on all orders.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Container>
                    </Grid>
                </Grid>


                <Grid item xs={12} md={6} >
                    <ThemeProvider theme={theme}>
                        <Typography mt={5} fontSize={{ xs: '20px', md: '25px' }} sx={{ fontWeight: 'bold', fontFamily: 'Josefin Sans', }}>
                            Get In Touch
                        </Typography>                        
                        <Container component="main" >
                            <CssBaseline />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <Grid container>
                                    <Grid item xs={6} >
                                            <TextField
                                                margin="normal"
                                                required
                                                id="name"
                                                label="Your Name"
                                                name="name"
                                                autoComplete="text"
                                                autoFocus
                                            />
                                        </Grid> 
                                        <Grid item xs={6} textAlign='right'>
                                            <TextField
                                                margin="normal"
                                                required
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                autoFocus
                                            />
                                        </Grid>
                                    </Grid>

                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="text"
                                        label="Subject"
                                        type="text"
                                        id="text"
                                        autoComplete="current-text"
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="message"
                                        label="Message"
                                        type="message"
                                        id="message"
                                        multiline
                                        minRows={5}
                                        autoComplete="current-message"
                                    />
                                    <Button
                                        type="submit"

                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, background: '#FFA63E' }}
                                    >
                                        Send Mail
                                    </Button>
                                   
                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img src={group}alt={group} width="100%" />
                </Grid>




            </Grid>
        </Container>
    </>
    )
}

import * as React from 'react';
import { Button, Grid, Hidden, InputBase, NativeSelect, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system";
import FormControl from '@mui/material/FormControl';
import mail from './images/mail.png';
import phone from './images/phone.png';
import login from './images/login.png';
import heart from './images/heart.png';
import chart from './images/chart.png';
import logo from './images/logo.png';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { findAllByDisplayValue } from '@testing-library/dom';
export default ({ chartNumber, currentUser, setcurrentUser }) => {

    const history = useHistory()
    const [age, setAge] = React.useState('');
    let dir = "right";
    const [state, setState] = React.useState({});
    const toggleDrawer = (open) => () => {
        setState({ [dir]: open });
    };
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (<>
        <Box sx={{ background: '#FBD98D' }}>
            <Grid container justifyContent='space-around' alignItems="center" maxWidth="xl" margin='auto'>
                <Grid item container xs={4} justifyContent='center' alignItems="center" columnGap='2%'>
                    <Grid item >
                        <a href="https://mail.google.com/" style={{ textDecoration: 'none', color: 'black' }}>
                            <img src={mail} alt="mailLogo" style={{ verticalAlign: 'middle' }} />
                            <span style={{ verticalAlign: 'middle', fontWeight: 'bold', fontSize: '10px' }}>  info@almond.yachts </span></a>
                    </Grid>
                    <Grid item >
                        <img src={phone} alt="mailLogo" style={{ verticalAlign: 'middle' }} />
                        <span style={{ verticalAlign: 'middle', fontWeight: 'bold', fontSize: '10px' }}> (12345)67890 </span>
                    </Grid>
                </Grid>



                <Grid xs={false} container item xs={7} justifyContent='flex-end' alignItems="center" columnGap="2%">
                    <Grid item >
                        <FormControl sx={{ borderBottom: '0px', fontSize: '12px' }}>
                            <NativeSelect
                                defaultValue="English"
                                sx={{ border: '0px', fontSize: '12px' }}
                                inputProps={{
                                    name: 'lan',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value="eng" style={{ fontSize: '12px' }}>English</option>
                                <option value="eng" style={{ fontSize: '12px' }}>Deutsch</option>
                                <option value="eng" style={{ fontSize: '12px' }}>Português</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl sx={{ borderBottom: '0px', fontSize: '12px' }}>
                            <NativeSelect
                                defaultValue="USD"
                                sx={{ border: '0px', fontSize: '12px' }}
                                inputProps={{
                                    name: 'lan',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value="eng" style={{ fontSize: '12px' }}>AUD</option>
                                <option value="eng" style={{ fontSize: '12px' }}>USD</option>
                                <option value="eng" style={{ fontSize: '12px' }}>EUR</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item >

                            {
                                currentUser ? (<Link to='/' style={{ textDecoration: 'none', color: 'black' }} onClick={() => setcurrentUser(false)}> <img src={login} alt="mailLogo" style={{ verticalAlign: 'middle' }} />
                                    <span style={{ verticalAlign: 'middle', fontWeight: 'bold', fontSize: '10px' }}>  LogOut </span></Link>)
                                    :
                                    (<Link to='/login' style={{ textDecoration: 'none', color: 'black' }} > <img src={login} alt="mailLogo" style={{ verticalAlign: 'middle' }} />
                                        <span style={{ verticalAlign: 'middle', fontWeight: 'bold', fontSize: '10px' }}>  Login </span></Link>)



                            }
                        </Grid>

                        <Grid item>
                            <Link to='/login' style={{ textDecoration: 'none', color: 'black' }} >
                                <img src={heart} alt="mailLogo" style={{ verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle', fontWeight: 'bold', fontSize: '10px' }}>  WishList </span>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link to='/login' style={{ textDecoration: 'none', color: 'black' }} >
                                <img src={chart} style={{ verticalAlign: 'middle' }} /> {chartNumber}
                            </Link>
                        </Grid>
                    </Hidden>

                </Grid>
            </Grid>
        </Box>

        <Hidden mdDown>
            <Box >
                <Grid container justifyContent='space-around' alignItems="center" maxWidth="xl" margin='auto'>

                    <Grid item container xs={9} justifyContent='center' alignItems="center" columnGap={4}>
                        <Grid item >
                            <Typography fontSize={{ xs: '20px', md: '30px' }}>
                                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src={logo} alt="logo" style={{ verticalAlign: 'middle' }} /></Link>
                                <span style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>  Almond </span></Typography>
                        </Grid>

                        <Grid item >
                            <Link to='/' style={{ textDecoration: 'none', color: 'black' }} >
                                <Typography fontSize={{ xs: '13px' }}>Home</Typography>
                            </Link>
                        </Grid>

                        <Grid item >
                            <Link to='/gridDefault' style={{ textDecoration: 'none', color: 'black' }} >
                                <Typography fontSize={{ xs: '13px' }}>Category</Typography>
                            </Link>
                        </Grid>

                        <Grid item >
                            <Link to='/subCat' style={{ textDecoration: 'none', color: 'black' }} >
                                <Typography fontSize={{ xs: '13px' }}>Models</Typography>
                            </Link>
                        </Grid>

                        <Grid item >
                            <Link to='/about' style={{ textDecoration: 'none', color: 'black' }} >
                                <Typography fontSize={{ xs: '13px' }}>About Us</Typography>
                            </Link>
                        </Grid>

                        <Grid item >
                            <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }} >
                                <Typography fontSize={{ xs: '13px' }}>Contact Us</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container item xs={3} justifyContent='flex-end' alignItems="center" columnGap={4}>
                        <Grid item >
                            <InputBase sx={{ border: '1px solid gray', width: '70%', padding: '0px 5px' }} /> <Button sx={{ background: '#D0732A', ':hover': { background: 'blue' }, marginLeft: '-10px', marginTop: '-2px' }} > <i class="fas fa-search" style={{ padding: '10% 0px', color: 'white' }}></i> </Button>
                        </Grid>
                    </Grid>
                    {/* </Hidden>
                <Hidden mdUp> */}



                </Grid>
            </Box>
        </Hidden>
        <Hidden mdUp>
            <Stack direction='row' justifyContent="space-around" alignItems="center">
                <Box>
                    <Typography fontSize={{ xs: '20px', md: '30px' }}>
                        <img src={logo} alt="logo" style={{ verticalAlign: 'middle' }} />
                        <span style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>  Almond </span>
                    </Typography>
                </Box>

                <Box >
                    <i class="fas fa-bars"
                        sx={{
                            color: "#D0AE23",
                            fontSize: "35px",
                            "&:hover": { cursor: "pointer" },
                        }}
                        onClick={toggleDrawer(dir, true)}
                    ></i>

                    <SwipeableDrawer
                        anchor={dir}
                        open={state[dir]}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        <Box
                            sx={{
                                width: 200,
                                marginLeft: "1vw",
                                marginRight: "1vw",
                                marginTop: "5vh",
                            }}
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <Grid container justifyContent='center' alignItems="center" sx={{ color: 'white' }}>




                            </Grid>
                            <List>

                                <ListItem >
                                    <ListItemText >
                                        <Typography fontSize={{ xs: '20px', md: '30px' }}>
                                            <span style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>Almond </span>
                                        </Typography>
                                    </ListItemText>
                                </ListItem>


                                <ListItem >
                                    <ListItemText >
                                        <Typography fontSize={{ xs: '20px', md: '30px' }} textAlign='center'>
                                            <span style={{ verticalAlign: 'middle', fontWeight: 'bold', color: 'white' }}>Almond</span>
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem >
                                    <ListItemText >
                                        <Link to='/gridDefault' style={{ textDecoration: 'none', color: 'black' }} >
                                            <Typography fontSize={{ xs: '16px', color: 'white' }}>Categories</Typography>
                                        </Link>
                                    </ListItemText>
                                </ListItem>

                                <ListItem >
                                    <ListItemText >
                                        <Link to='/gridDefault' style={{ textDecoration: 'none', color: 'black' }} >
                                            <Typography fontSize={{ xs: '16px', color: 'white' }}>Models</Typography>
                                        </Link>
                                    </ListItemText>
                                </ListItem>

                                <ListItem >
                                    <ListItemText >
                                        <Link to='/about' style={{ textDecoration: 'none', color: 'black' }} >
                                            <Typography fontSize={{ xs: '16px', color: 'white' }}>About Us</Typography>
                                        </Link>
                                    </ListItemText>
                                </ListItem>


                                <ListItem >
                                    <ListItemText >
                                        <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }} >

                                            <Typography fontSize={{ xs: '16px', color: 'white' }}>Contact Us</Typography>
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem >
                                    <Link to='/login' style={{ textDecoration: 'none', color: 'black' }} >
                                        <ListItemIcon>
                                            <img src={login} alt="mailLogo" />
                                        </ListItemIcon>
                                        <ListItemText >
                                            <span style={{ color: 'white', verticalAlign: 'middle', fontWeight: 'bold', fontSize: '16px' }}>Login </span>
                                        </ListItemText>
                                    </Link>
                                </ListItem>

                                <ListItem >
                                    <Link to='/login' style={{ textDecoration: 'none', color: 'black' }} >
                                        <ListItemIcon>
                                            <img src={heart} alt="mailLogo" />
                                        </ListItemIcon>
                                        <ListItemText >
                                            <span style={{ color: 'white', verticalAlign: 'middle', fontWeight: 'bold', fontSize: '16px' }}>  WishList </span>
                                        </ListItemText>
                                    </Link>
                                </ListItem>

                                <ListItem >
                                    <Link to='/login' style={{ textDecoration: 'none', color: 'black' }} >
                                        <ListItemIcon>
                                            <img src={chart} alt="mailLogo" />
                                        </ListItemIcon>
                                        <ListItemText >
                                            <span style={{ color: 'white', verticalAlign: 'middle', fontWeight: 'bold', fontSize: '16px' }}>Chat</span>
                                        </ListItemText>
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                    </SwipeableDrawer>
                </Box>
            </Stack>
        </Hidden>
    </>)
}

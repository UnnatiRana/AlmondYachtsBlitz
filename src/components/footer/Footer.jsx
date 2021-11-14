import { Button, Grid, InputBase, List, ListItem, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Twitter from './assests/tw.png';
import Instagram from './assests/insta.png';
import FaceBook from './assests/fb.png';


export default () => {


    return (<>
        <Box backgroundColor='#FBD98D'>
            <Box sx={{ margin: 'auto' }} maxWidth='xl' width={{ xs: '90%', md: '80%' }} pt={5}>
                <Grid container justifyContent="space-between" alignItems="flex-start">




                    <Grid item xs={12} sm={6} md={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography fontSize={{ xs: '20px', md: '30px' }}>
                                        <span style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>  Almond </span>
                                    </Typography>
                                </ListItemText>
                            </ListItem>


                            <ListItem>
                                <InputBase sx={{ background: 'white', border: '1px solid gray', width: '70%', padding: '0px 5px' }} /> <Button sx={{ background: '#D0732A', ':hover': { background: 'blue' }, marginLeft: '-10px', marginTop: '-1px' }} > <i class="fas fa-search" style={{ padding: '10% 0px', color: 'white' }}></i> </Button>

                            </ListItem>
                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    Contact Info
                                    <br />
                                    Callghan, NSW
                                </ListItemText>
                            </ListItem>


                        </List>
                    </Grid>







                    <Grid item xs={12} sm={6} md={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography fontSize={{ xs: '20px' }}>
                                        <span style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>
                                            Catagories
                                        </span>
                                    </Typography>
                                </ListItemText>
                            </ListItem>


                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    Cruise
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    Sail
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    Fishing
                                </ListItemText>
                            </ListItem>


                        </List>
                    </Grid>








                    <Grid item xs={12} sm={6} md={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography fontSize={{ xs: '20px' }}>
                                        <span style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>
                                            Customer Care
                                        </span>
                                    </Typography>
                                </ListItemText>
                            </ListItem>


                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    My Account
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    Discount
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    Returns
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    Orders History
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    Order Tracking
                                </ListItemText>
                            </ListItem>


                        </List>
                    </Grid>







                    <Grid item xs={12} sm={6} md={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography fontSize={{ xs: '20px' }}>
                                        <span style={{ verticalAlign: 'middle', fontWeight: 'bold' }}>
                                            Ownership
                                        </span>
                                    </Typography>
                                </ListItemText>
                            </ListItem>


                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    Warranty
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText sx={{ fontFamily: 'Lato' }}>
                                    Maintenance
                                </ListItemText>
                            </ListItem>


                        </List>
                    </Grid>





                </Grid>

            </Box>
        </Box>
        <Box sx={{ background: ' #D0732ABF' }}>
            <Grid container alignItems='center' justifyContent="space-around" maxWidth="lg" margin='auto' padding="30px 0px">
                <Grid item xs={4}>
                    <Typography fontSize={{ xs: '12px' }}>
                        ©UON - All Rights Reserved
                    </Typography>
                </Grid>
                <Grid item xs={4} container justifyContent='center' columnGap={2}>
                    <Grid item >
                        <a href="#">
                            <img src={FaceBook} alt={FaceBook} />
                        </a>
                    </Grid>
                    <Grid item >
                        <a href="#">
                            <img src={Instagram} alt={Instagram} />
                        </a>
                    </Grid>
                    <Grid item >
                        <a href="#">
                            <img src={Twitter} alt={Twitter} />
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    </>

    )
}

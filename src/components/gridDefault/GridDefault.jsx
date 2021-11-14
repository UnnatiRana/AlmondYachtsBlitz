import { Box, Container, Grid, Typography } from "@mui/material";
import React from 'react'
import p1 from './assests/p1.png';
import p2 from './assests/p2.png';
import p3 from './assests/p3.png';
import p4 from './assests/p4.png';
import { createTheme } from '@mui/material/styles';
import { Link,useHistory } from "react-router-dom";

const theme = createTheme();

export default ({setcatagory}) => {
    const history = useHistory()
    window.scrollTo(0,0);
    const displayer = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (<>
        <Box sx={{ background: '#F1B78A'}}>
            <Typography align="center" fontSize={{ xs: '20px', md: '25px' }} sx={{ fontWeight: 'bold', fontFamily: 'Josefin Sans', }}>
                Choose your Catagory
            </Typography>
        </Box>
        <Container textAlign='center' justifyContent='space-between' sx={{ padding: '100px 0px', }}>


            <Grid container alignItems='flex-start' mt={10}>

                {
                    [
                        {
                            img: p1,
                            price: 175400,
                            name: 'Sea Ray '
                        },
                        {
                            img: p2,
                            price: 250500,
                            name: 'Meridian'
                        },
                        {
                            img: p3,
                            price: 143690,
                            name: 'Serenity'
                        },
                        {
                            img: p4,
                            price: 325300,
                            name: 'Rivieria'
                        },

                    ].map((obj) => {
                        return <Grid item xs={12} md={6} mb={10}>
                            <Container>
                                <Box sx={{ background: '#D4E8F6', textAlign: 'center', p: 5 }} width="80%" margin='auto'>
                                   <Link to='/subCat'>
                                        <img src={obj.img} width="80%" style={{ cursor: 'pointer', height: '300px' }} onClick={() => {
                                            // displayer(obj)
                                            // setcatagoryPage(obj)
                                            setcatagory(obj.name)

                                        }} />
                                    </Link>
                                </Box>
                                <center> <br />
                                    <b><span> {obj.name} </span></b>
                                    <Box display='flex' justifyContent='center' mt={2} mb={2}>
                                        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#5625DF' }} mr={1}></Box>
                                        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#FF27B7' }} mr={1}></Box>
                                        <Box sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#37DAF3' }} mr={1}></Box>
                                    </Box>
                                    <b><span> $ {obj.price} </span></b>
                                </center>
                            </Container>
                        </Grid>
                    })
                }

            </Grid>
        </Container>
    </>
    )
}

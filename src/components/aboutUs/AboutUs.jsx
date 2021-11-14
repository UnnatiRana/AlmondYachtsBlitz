import { Button, Container, Grid, Paper, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import group from './assests/Group1.png';
import p1 from './assests/p1.png';
import p2 from './assests/p2.png';
import p3 from './assests/p3.png';
import p4 from './assests/p4.png';
import client from './assests/client2.png';


export default () => {
    window.scrollTo(0,0);


    return (<>
        <Box sx={{ background: '#F1B78A' }} mb={15}>
            <Typography align="center" fontSize={{ xs: '20px', md: '25px' }} sx={{ fontWeight: 'bold', fontFamily: 'Josefin Sans', }}>
                About US
            </Typography>
        </Box>
        <Container>
            <Grid container  >
                <Grid item xs={12} md={6}>
                    <img src={group} alt={group} width='100%' style={{ maxWidth: '550px' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container  >
                        <Typography fontSize={{ xs: '20px', sm: '30px', md: '46px' }} fontWeight='bold' mb={4}>
                            Know more about
                            Almond Yachts
                        </Typography>
                        <Typography textAlign='justify'>
                            Founded by Rahman Schionning, Almond Yachts is dedicated to creating the ultimate sailing and electric vessels. Inspired by the natural shape and strength of the Almond, our mission is to be an environmentally and socially conscious manufacturer. We aim to create yachts that seed and nurture a passion for safely interacting with the marine environment. We believe getting sailors out on the water this way raises awareness of our impact on our oceans and waterways and this will lead to more action towards a healthy world.
                            <br />
                            Almond Yachts operates out of both the United States and Australia.
                            Our Yachts are made in Australia to the highest quality, and shipped worldwide.
                        </Typography>
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, background: '#FFA63E' }}> Contact Us </Button>

                    </Container>
                </Grid>
            </Grid>
            <Grid container mt={10} mb={10}>
                <Grid item xs={12} mb={15} >
                    <Typography fontSize={{ xs: '22px', md: '32px' }} fontFamily="Josefin Sans" fontWeight='bold' textAlign='center'>
                        <span>Our Features</span>
                    </Typography>
                </Grid>

                {
                    [
                        {
                            img: p1,
                            head: 'Fixed Shipping Rates',
                            text: 'To make things even simpler for our customers, we offer fixed shipping rates anywhere in Australia'
                        },
                        {
                            img: p2,
                            head: 'Reward Points',
                            text: 'Rewards points for each dollar spent'
                        },
                        {
                            img: p3,
                            head: 'Quality Product',
                            text: '100% Quality Product'
                        },
                        {
                            img: p4,
                            head: '24/7 Support',
                            text: 'We operate 24/7/365, including holidays. Request a call, and we will get back to you within minutes.'
                        },
                    ].map((obj) => {
                        return <Grid item xs={12} sm={6} md={3} p={1} textAlign='center'>
                            <Paper sx={{ minHeight: '300px' }}>
                                <img src={obj.img} alt={obj.img} />

                                <Typography mt={7} mb={2} fontSize={{ xs: '18px', md: '20px' }} fontWeight='bold' textAlign='center'>
                                    <span>{obj.head}</span>
                                </Typography>
                                <Typography fontSize={{ xs: '16px', md: '18px' }} textAlign='center'>
                                    <span>{obj.text}</span>
                                </Typography>
                            </Paper>
                        </Grid>
                    })
                }


            </Grid>





            <Grid container mt={10} mb={10}>
                <Grid item xs={12} mb={4} >
                    <Typography fontSize={{ xs: '22px', md: '32px' }} fontFamily="Josefin Sans" fontWeight='bold' textAlign='center'>
                        <span>Our Client Say!</span>
                    </Typography>
                </Grid>

                <Grid item xs={12} textAlign='center'>
                    <Box width={{ xs: '90%', sm: '80%', md: '60%' }} margin='auto'>

                        <center>
                            <img width="50%" src={client} />
                            <p style={{ fontSize: '18px' }}>John Quil</p>
                            
                            <Typography color=''>
                            Very impressed with the service from Rahman and the team at Almond Yachts. 
                            The staff are well organised, highly knowledgeable and professional. 
                            I'm glad I purchased my first yachts through Almond as the boys looked after me and ensured I was satisfied throughout the whole process. Thank you!!
                            </Typography>
                        </center>

                    </Box>
                </Grid>


            </Grid>








        </Container>



    </>)
}

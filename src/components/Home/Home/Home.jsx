import { Container, Grid, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import promotional from './assests/yachts.png';
import p1 from './assests/p1.png';
import p2 from './assests/p2.png';
import p3 from './assests/p3.png';
import p4 from './assests/p4.png';
import b1 from './assests/b1.png';
import b2 from './assests/b2.png';
import b3 from './assests/b3.png';
import b4 from './assests/b4.png';
import a2 from './assests/boat1.png';

// 2nd 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


// 1st 
import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
export default () => {
    window.scrollTo(0, 0);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (<>
        <Box>

            <Box maxWidth='xl' margin='auto' mb={10}>



                <Carousel>
                    <div>
                        <img src={a2} />
                    </div>
                    <div>
                        <img src={a2} />
                    </div>
                    <div>
                        <img src={a2} />
                    </div>
                </Carousel>
                {/* 
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    minimumTouchDrag={true}
                    showDots={true}
                >
                    <img src={promotional} width="1000px" />
                    <img src={a2} width="1000px" />
                    <img src={promotional} width="1000px" />
                
                    <img src={promotional} width="1000px" />
                    <img src={a2} width="1000px" />
                    <img src={promotional} width="1000px" />



                </Carousel> */}
                {/* <img src={promotional} width="100%" /> */}
            </Box>



            <Container>



                <Typography fontSize={{ xs: '22px', md: '32px' }} color='#D0732A' fontFamily="Josefin Sans" fontWeight='bold' textAlign='center'>
                    <span>Top Categories</span>
                </Typography>
                <Carousel2
                    responsive={responsive}
                    autoPlay={true}
                    minimumTouchDrag={true}
                    showDots={true}

                >
                    <Link to='/gridDefault' ><img src={b1} width="80%" /></Link>
                    <Link to='/gridDefault' ><img src={b2} width="80%" /> </Link>
                    <Link to='/gridDefault' ><img src={b3} width="80%" /> </Link>
                    <Link to='/gridDefault' ><img src={b4} width="80%" /> </Link>
                    <Link to='/gridDefault' ><img src={b1} width="80%" /> </Link>
                    <Link to='/gridDefault' ><img src={b2} width="80%" /> </Link>


                </Carousel2>















                <Grid container mt={10} mb={10}>
                    <Grid item xs={12} mb={15} >
                        <Typography fontSize={{ xs: '22px', md: '32px' }} color='#D0732A' fontFamily="Josefin Sans" fontWeight='bold' textAlign='center'>
                            <span>What We Offer!</span>
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
            </Container>
        </Box>
    </>)
}

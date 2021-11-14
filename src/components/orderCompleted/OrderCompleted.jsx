import { Button, Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system";
import check from './assests/check.png';
import tick from './assests/tick.png';
import clock from './assests/clock.png';
import { Link } from "react-router-dom";
export default () => {
    window.scrollTo(0,0);

    return (<>
        <Box sx={{ background: '#F1B78A'}} mb={15}>
            <Typography align='Center' fontSize={{ xs: '20px', md: '26px' }} sx={{ fontWeight: 'bold', fontFamily: 'Josefin Sans', }}>
                Order Completed
            </Typography>
        </Box>
        <Container maxWidth="md" sx={{ backgroundImage: `url(${clock}) , url(${check})`, backgroundPosition: 'top left, bottom right', backgroundRepeat: 'no-repeat,no-repeat' }}>
            <Grid container mt={10} mb={10}>
                <Grid item xs={12} mb={4} >
                    <center>
                        <img src={tick} />
                    </center>
                    <Typography fontSize={{ xs: '22px', md: '32px' }} fontFamily="Josefin Sans" fontWeight='bold' textAlign='center'>
                        <span>Your Order Is Completed! </span>
                    </Typography>
                </Grid>

                <Grid item xs={12} textAlign='center'>
                    <Box width={{ xs: '90%', sm: '80%', md: '60%' }} margin='auto'>

                        <center>
                            <Typography color='#8A8FB9' mb={3}>
                                A customer review is a review of a product or service made by a customer who
                                has purchased and used, or had experience with, the product or service.
                                Customer reviews are a form of customer feedback on electronic commerce and
                                online shopping sites.
                            </Typography>
                            <Link to="/">
                                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, background: '#FFA63E', p: 3, color: 'black', fontWeight: 'bold' }}> Continue Shopping </Button>
                            </Link>

                        </center>

                    </Box>
                </Grid>


            </Grid>








        </Container>



    </>)
}

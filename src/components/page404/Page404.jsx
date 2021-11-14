import { Box, Typography } from "@mui/material";
import Image from './assests/image.png';
import React from 'react'

export const Page404 = () => {
    window.scrollTo(0,0);

    return (<>
        <Box sx={{ background: '#F1B78A', padding: '30vh 10%' }}>
            <Typography fontSize={{ xs: '20px', md: '26px' }} sx={{ fontWeight: 'bold', fontFamily: 'Josefin Sans', }}>
                404 Not Found
            </Typography>
        </Box>
        <Box textAlign='center'>
            <img src={Image} alt={Image} with="70%" style={{ maxWidth: '800px' }} />
        </Box>
    </>
    )
}

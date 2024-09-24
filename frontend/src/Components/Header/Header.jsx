import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { assets } from '../../assets/assets'; 
const Header = () => {
    return (
        <Box id ="header"
            sx={{
                position: 'relative',
                height: '60vh',
                backgroundImage: `url(${assets.heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                my: 3,
                borderRadius: '16px',
                overflow: 'hidden',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                },
            }}
        >
            <Box sx={{ zIndex: 1 }}>
                <Typography variant="h1" gutterBottom>
                    Empowering Your Journey to Success
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Access resources, share experiences, and connect with Seniors to excel in your placement journey.
                </Typography>
                <Button variant="contained" color="primary" sx={{ margin: '0 10px' }}>
                    Get Started
                </Button>
                <Button variant="outlined" color="primary" sx={{ margin: '0 10px' }}>
                    Explore Resources
                </Button>
            </Box>
        </Box>
    );
};

export default Header;

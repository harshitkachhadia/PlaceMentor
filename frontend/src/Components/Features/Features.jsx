import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { assets } from '../../assets/assets'; 

const Features = () => {
    const features = [
        {
            title: 'Resource Hub',
            description: 'Access a curated collection of materials, tutorials, and guides to prepare for your placement journey.',
            icon: assets.resourceIcon,
            link: '/resources'
        },
        {
            title: 'Experience Sharing',
            description: 'Connect with seniors and peers to share experiences and insights from campus drives.',
            icon: assets.experienceIcon,
            link: '/experience'
        },
        {
            title: 'Discussion Forum',
            description: 'Get matched with mentors who can provide personalized guidance and support throughout your placement process.',
            icon: assets.mentorIcon,
            link: '/forum'
        },
    ];

    return (
        <Box sx={{ my: 5, padding: 4, borderRadius: 2 }}>
            <Typography variant="h3" gutterBottom color="primary" sx={{mb:"40px"}}>
                What PlaceMentor Offers You
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {features.map((feature) => (
                    <Grid item xs={12} sm={4} key={feature.title}>
                        <Box 
                            sx={{ 
                                backgroundColor: '#2E2E2E', 
                                borderRadius: 2, 
                                boxShadow: 3, 
                                overflow: 'hidden',
                                height: '100%',
                                display: 'flex', 
                                flexDirection: 'column',
                            }}
                        >
                            {/* Feature Image at the Top */}
                            <Box 
                                sx={{
                                    height: '150px', 
                                    width: '100%', 
                                    backgroundImage: `url(${feature.icon})`,
                                    backgroundSize: 'cover', 
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundColor: '#121212' 
                                }}
                            />
                            
                            {/* Content Section */}
                            <Box sx={{ padding: 3, flexGrow: 1 }}>
                                <Typography variant="h4" gutterBottom color="white">{feature.title}</Typography>
                                <Typography variant="body2" color="gray">{feature.description}</Typography>
                            </Box>

                            {/* Learn More Button */}
                            <Box sx={{ padding: 2, textAlign: 'center' }}>
                                <Button 
                                    variant="outlined" 
                                    color="primary" 
                                    href={feature.link}
                                    sx={{ width: '100%' }}
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Features;

import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { assets } from '../../assets/assets'; 

const Features = () => {
    const features = [
        {
            title: 'Resource Hub',
            description: 'Access a curated collection of materials, tutorials, and guides to prepare for your placement journey.',
            icon: assets.resourceIcon,
        },
        {
            title: 'Experience Sharing',
            description: 'Connect with seniors and peers to share experiences and insights from campus drives.',
            icon: assets.experienceIcon,
        },
        {
            title: 'Discussion Forum',
            description: 'Get matched with mentors who can provide personalized guidance and support throughout your placement process.',
            icon: assets.mentorIcon,
        },
    ];

    return (
        <Box sx={{ my: 5, backgroundColor: '#1E1E1E', padding: 4, borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom color="primary">
                Explore Our Key Features
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {features.map((feature) => (
                    <Grid item xs={12} sm={4} key={feature.title}>
                        <Box sx={{ padding: 2, borderRadius: 2, backgroundColor: '#2E2E2E', boxShadow: 2 }}>
                            <img src={feature.icon} alt={feature.title} style={{ width: '50px', height: '50px' }} />
                            <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                            <Typography variant="body2">{feature.description}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                Learn More
            </Button>
        </Box>
    );
};

export default Features;

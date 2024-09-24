import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const testimonials = [
    {
        name: "John Doe",
        review: "This product is amazing! It has changed the way I work and made me more productive.",
        image: "https://via.placeholder.com/150",
        position: "Software Engineer",
    },
    {
        name: "Jane Smith",
        review: "Great customer service and an even better product! Highly recommend to anyone.",
        image: "https://via.placeholder.com/150",
        position: "Project Manager",
    },
    {
        name: "Alice Johnson",
        review: "This is a must-have for anyone looking to streamline their workflow. Love it!",
        image: "https://via.placeholder.com/150",
        position: "UX Designer",
    },
];

const Testimonials = () => {
    const theme = useTheme(); // Access theme

    return (
        <Container sx={{ py: 5 , }}>
            <Carousel>
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem key={index} testimonial={testimonial} theme={theme} />
                ))}
            </Carousel>
        </Container>
    );
};

// Single testimonial item
const TestimonialItem = ({ testimonial, theme }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                p: 4,
                width: '300px',  // Fixed width
                height: '400px', // Fixed height
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Ensures the content takes up available space
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'hidden', // Ensures content doesn't overflow
                transition: 'transform 0.5s', // Smooth transition between slides
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    flexGrow: 1, // Take up remaining vertical space
                }}
            >
                {/* Testimonial Image */}
                <img
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                    style={{ borderRadius: '50%', width: '100px', height: '100px', marginBottom: '20px' }}
                />
                
                {/* Testimonial Name */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: theme.typography.h3.fontWeight,
                        color: theme.palette.primary.main,
                        whiteSpace: 'nowrap', // Prevent wrapping
                        overflow: 'hidden', // Hide overflowing text
                        textOverflow: 'ellipsis', // Add ellipsis if the text is too long
                    }}
                >
                    {testimonial.name}
                </Typography>
                
                {/* Testimonial Position */}
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontStyle: 'italic',
                        marginBottom: '10px',
                        color: theme.palette.secondary.main,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {testimonial.position}
                </Typography>
            </Box>

            {/* Testimonial Review */}
            <Typography
                variant="body1"
                sx={{
                    maxWidth: '250px',
                    whiteSpace: 'normal',
                    overflow: 'hidden', // Ensures content does not exceed bounds
                    textOverflow: 'ellipsis', // Adds ellipsis for too much text
                    color: theme.palette.text.secondary,
                    flexShrink: 0, // Prevent shrinking
                }}
            >
                "{testimonial.review}"
            </Typography>
        </Paper>
    );
};

export default Testimonials;

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { assets } from "../../assets/assets";


const testimonials = [
  {
    name: "John Doe",
    review:
      "This product is amazing! It has changed the way I work and made me more productive. I highly recommend it to anyone looking to boost their productivity!",
    image: assets.testimonial, // Adjusted for a larger image
    position: "Software Engineer",
  },
  {
    name: "Jane Smith",
    review:
      "Great customer service and an even better product! Highly recommend to anyone. The team behind it is always there to help.",
    image: "https://via.placeholder.com/300", // Adjusted for a larger image
    position: "Project Manager",
  },
  {
    name: "Alice Johnson",
    review:
      "This is a must-have for anyone looking to streamline their workflow. It has saved me countless hours. It’s worth every penny!",
    image: "https://via.placeholder.com/300", // Adjusted for a larger image
    position: "UX Designer",
  },
];

const Testimonials = () => {
  const theme = useTheme(); // Access theme

  return (
    <Container sx={{ py: 5 }}>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            testimonial={testimonial}
            theme={theme}
          />
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
        p: 0,
        width: "100%", // Full width
        height: "300px", // Increased height for better spacing
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "row", // Align items in a row
        alignItems: "center",
        overflow: "hidden",
        transition: "transform 0.5s",
        borderRadius: "16px", // Rounded corners
      }}
    >
      {/* Testimonial Image */}
      <img
        src={testimonial.image}
        alt={`${testimonial.name}`}
        style={{
          width: "300px",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px 0 0 8px",
        }} // Full height
      />

      {/* Testimonial Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center the text vertically
          alignItems: "flex-start", // Align text to the left
          textAlign: "left", // Align text to the left
          flexGrow: 1,
          padding: "20px", // Padding for text
        }}
      >
        <Typography
          variant="body1"
          sx={{
            whiteSpace: "normal",
            overflow: "hidden",
            color: theme.palette.text.secondary,
          }}
        >
          "{testimonial.review}"
        </Typography>
        {/* Testimonial Name */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: theme.typography.h3.fontWeight,
            color: theme.palette.primary.main,
            marginTop: "5px",
          }}
        >
          {testimonial.name}
        </Typography>

        {/* Testimonial Position */}
        <Typography
          variant="body2"
          sx={{
            fontStyle: "italic",
            marginBottom: "10px",
            color: theme.palette.secondary.main,
          }}
        >
          {testimonial.position}
        </Typography>

        {/* Testimonial Review */}
      </Box>
    </Paper>
  );
};

export default Testimonials;

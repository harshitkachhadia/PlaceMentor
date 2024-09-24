import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: 'dark', // Set to dark mode
        background: {
            default: '#121212', // Dark background color
            paper: '#1E1E1E', // Background color for cards/paper
        },
        text: {
            primary: '#FFFFFF', // Headings color
            secondary: '#E0E0E0', // Body text color
        },
        primary: {
            main: '#00FFFF', // Your primary color
        },
        secondary: {
            main: '#4A9FBD',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent', // Set AppBar background to transparent
                    boxShadow: 'none', // Remove shadow if necessary
                },
            },
        },
    },
});

export default theme;

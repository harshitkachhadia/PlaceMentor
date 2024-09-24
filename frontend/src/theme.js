import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#E0E0E0',
        },
        primary: {
            main: '#00FFFF',
        },
        secondary: {
            main: '#4A9FBD',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontSize: '1rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Modern font family
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        button: {
            textTransform: 'none', // Prevent uppercase transformation for buttons
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            },
        },
    },
});

export default theme;

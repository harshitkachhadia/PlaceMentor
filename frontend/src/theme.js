import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        background: {
            default: '#000000',
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
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        
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
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#E0E0E0', // Color of the outline when not focused
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#00FFFF', // Color of the outline when hovered
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#00FFFF', // Color of the outline when focused
                    },
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
              hover: {
                cursor: "pointer",
                backgroundColor:'red'
              }
            }
          }
    },
});

export default theme;

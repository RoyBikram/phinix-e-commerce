import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
        main: "rgb(227 46 57)",
            dark: "rgb(205 48 58)",
        contrastText:" White"
        },
        secondary: {
            main: "rgba(255,255,255,1)",
            dark:"rgb(223 223 223)"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 400,
                    borderRadius: "25px",
                    lineHeight: "normal",
                    padding: "12px 28px",
                    boxShadow: "0px 0px 10px #771a2078",
                    transition: "200ms",
                    ":hover": {
                        boxShadow: "0px 0px 20px #771a2078",
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif"
    }
});
import { createTheme } from "@mui/material";
import { COLORS } from "../../utils/constants";

export const theme = createTheme({
    palette:{
        primary: {
            main: COLORS.accent,
            light: COLORS.accentLight,
        },
        background: {
            default: COLORS.bgLight,
            paper: COLORS.bgLight,
        },
        text: {
            primary: COLORS.textPrimary,
            secondary: COLORS.textSecondary,
        }, 
        divider: COLORS.textLines,
        bubble:{
            main: COLORS.bubbleColor
        }
    },

    typography: {
        fontFamily: '"Urbanist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        h1: {
            fontSize: '115px',
            fontWeight: 100,
            color: COLORS.textLines,
            letterSpacing: '-0.02em',
        },

        h2:{
            fontSize: '80px',
            fontWeight: 100,
        },

        h3:{
            fontSize: '36px',
            fontWeight: 400,
            lineHeight: 1.4,
        },

        h4:{
            fontSize: '32px',
            fontWeight: 400,
        },

        h5:{
            fontSize: '40px',
            fontWeight: 400,
        },

        h6:{
            fontSize: '20px',
            fontWeight: 300,
        },

        body1:{
            fontSize: '20px',
            fontWeight: 300,
            lineHeight: 1.6,
        },

        body2:{
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.5,
        },

        subtitle1:{
            fontSize: '16px',
            fontWeight: 400,
        },

        caption:{
            fontSize: '14px',
            fontWeight: 400,
        },

        logo:{
            fontSize: '32px',
            fontWeight: 400,
        },

        bubble:{
            fontSize: '12px',
            fontWeight: 400,
        },

        projectTag:{
            fontSize: '10px',
            fontWeight: 400,
        },

        link:{
            fontSize: '14px',
            fontWeight: 400,
        },
        nav: {
            fontSize: '16px',
            fontWeight: 400,
        },

        components:{
            MuiCard:{
                styleOverrides:{
                    root:{
                        borderRadius: 12,
                        boxShadow: 'none',
                        border: '1px solid #E0E0E0'
                    }
                }
            }
        }
    }
})
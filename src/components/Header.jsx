import React from "react";
import { tokens } from "../theme";
import { Box, Typography, useTheme } from "@mui/material";


const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box mb="20px">
            <Typography variant="h1" fontSize="32px" fontWeight="600">
                {title}
            </Typography>
            <Typography variant="p" color={colors.greenAccent[500]}>
                {subtitle}
                </Typography>
        </Box>
    )
}

export default Header;
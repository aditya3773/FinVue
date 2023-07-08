import { useState } from "react";
import { Link } from "react-router-dom";
import { Box,Typography,useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
 


const Navbar = () => {
    const {palette} =useTheme();
    const [selected, setSelected] =useState("dashboard");
  return (
    <FlexBetween marginBottom="0.25" p="0.5rem 0rem" color={palette.grey[300]}>
        <FlexBetween gap="0.75rem">
            <QueryStatsTwoToneIcon sx={{fontSize:"28px"}}/>
            <Typography variant="h4" fontSize="16px">
                FinVue
            </Typography>
        </FlexBetween>

        <FlexBetween gap="2rem">
            <Box sx={{"&:hover": {color: palette.primary[100]}}}>
                <Link 
                    to="/"
                    onClick={()=> setSelected("dashboard")}
                    style={{
                        color: selected ==="dashboard"?"inherit":palette.grey[700],
                        textDecoration:"inherit"
                    }}
                >
                    dashboard
                </Link>
            </Box>
            <Box>
                <Link 
                    to="/predictions"
                    onClick={()=> setSelected("predictions")}
                    style={{
                        color: selected ==="predictions"?"inherit":palette.grey[700],
                        textDecoration:"inherit"
                    }}
                >
                    predictions
                </Link>

            

            </Box>
        </FlexBetween>


    </FlexBetween>
  )
};

export default Navbar;
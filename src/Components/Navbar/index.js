import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import './style.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

export default function Navbar(props) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className="navbar" sx=
        {{backgroundColor: '#003049', 
        color: 'white', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        gap: isMobile ? '33px' : '300px', 
        pt: isMobile? '15px' : '18px', 
        pb: isMobile? '15px' : '18px',}}>
            <a href="/" style={{color: 'inherit', textDecoration: 'none'}}>
            <Typography className="navbarItems" sx={{fontWeight: isMobile? '500' : 'bold', fontSize: isMobile? '15px' : '18px', color: 'white', textDecoration: 'none'}}>Home</Typography>
            </a>
            <a href="/portfoliopage" style={{color: 'inherit', textDecoration: 'none'}}>
                <Typography className="navbarItems" sx={{fontWeight: isMobile ? '500' : 'bold', fontSize: isMobile ? '15px' : '18px', color: 'inherit', textDecoration: 'none'}}>
                    Portfolio
            </Typography>
            </a>

            <a href="/moreabout" style={{color: 'inherit', textDecoration: 'none'}}>
                <Typography className="navbarItems" sx={{fontWeight: isMobile? '500' : 'bold', fontSize: isMobile? '15px' : '18px'}}>More</Typography>
            </a>
    
            <a href="https://flowcv.com/resume/wq8nbagsjb" style={{color: 'inherit', textDecoration: 'none'}}>
                <Typography className="navbarItems" sx={{fontWeight: isMobile ? '500' : 'bold', fontSize: isMobile ? '15px' : '18px', color: 'inherit', textDecoration: 'none'}}>
                    My CV
            </Typography>
            </a>
            
        </Box>
    )
}
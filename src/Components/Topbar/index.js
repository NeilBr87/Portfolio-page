import React from 'react';
import './style.css';
import Photo from './Photo.jpg';
// import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Topbar() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    
    return (
        <Box sx={{display: 'flex',
            flexDirection: isMobile? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile? '10px' : '50px',
            textAlign: 'center',
            color: '#003049',
            mt: isMobile? '-1%' : '0.5%', 
            mb: isMobile? '0%' : '0.3%',
            ml: isMobile? '10px' : '0%',   
            pt: isMobile? '20px' : '2%',
            pb: '28px',}} className="topbar">
            <Box className="topbartext">
                <Typography sx={{fontSize: isMobile? '36px' : '50px', fontweight: '900'}} id="heading1">Neil Brooks</Typography>
                <Typography sx={{fontSize: isMobile? '20px' : '30px', fontweight: 'bold'}} className="heading2">Frontend and Wordpess Developer</Typography>
            </Box>
            <img style={{width: isMobile? '36%' : '12%', 
            borderRadius: '50%', 
            marginRight: isMobile? '20px' : '0px' }}src={Photo} alt="Profile" className="profile" />
        </Box>
    );
}
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import './style.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Connect(props) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className="connectOuter123" sx=
        {{display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        backgroundColor: '#003049', 
        pt: '40px',
        width: isMobile? "320px": '430px', 
        margin: '0 auto', color: 'white', padding: '20px', borderRadius: '10px', mt: '12px'}}>
            <Box className="connect" sx={{ width: '330px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', pb: '10px'}}>
                <Typography sx={{fontSize: '20px', color: 'white', padding: '4px'}} className="heading1">Connect with me</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
                <Link href="mailto:neil.brooks87@gmail.com"><EmailIcon className="socialIcons" sx={{ fontSize: '40px', color: 'white' }} /></Link>
                <Link href="https://github.com/NeilBr87/"><GitHubIcon className="socialIcons" sx={{ fontSize: '40px', color: 'white' }} /></Link>
                <Link href="https://www.linkedin.com/in/neil-brooks-07888697/"><LinkedInIcon className="socialIcons" sx={{ fontSize: '40px', color: 'white' }} /></Link>
            </Box>
        </Box>
    )
}

//
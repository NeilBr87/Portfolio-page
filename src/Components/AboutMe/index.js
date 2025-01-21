import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './style.css';
export default function AboutMe(props) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className="outerBorder" sx=
        {{width: isMobile? '330px': '1250px', 
        margin: '0 auto', 
        borderRadius: '10px'}}>
            <Box className="aboutMe" sx=
            {{backgroundColor: '#003049', 
            width: isMobile? '140px' : '280px', 
            margin: '0 auto', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: '5px', 
            mt: isMobile? "-10px" : '40px',
            mb: '20px'}}>
                <Typography sx={{fontSize: isMobile? '16px' : '20px', color: 'white', padding: '4px'}} className="heading1">About me</Typography>
            </Box>
            <Typography sx={{fontWeight: isMobile? '500' : 'bold', pb: isMobile? '7px' : '16px', fontSize: isMobile? '0.7rem': '1rem', textAlign: isMobile? 'center' : 'center'}} className="aboutText">Hi, I'm Neil Brooks!</Typography>
            <Typography sx={{fontWeight: isMobile? '500' : 'bold', pb: isMobile? '7px' : '16px', fontSize: isMobile? '0.7rem': '1rem', textAlign: isMobile? 'center' : 'center'}} className="aboutText">I'm a frontend web developer with a SAAS company with a year's worth of experience, using Wordpress in conjuntion with Javascript to build frontend components. I'm looking to progress my career in tech. I'm fascinated by the chance to use creativity and problem-solving to make a difference.</Typography>
            <Typography sx={{fontWeight: isMobile? '500' : 'bold', pb: isMobile? '7px' : '16px', fontSize: isMobile? '0.7rem': '1rem', textAlign: isMobile? 'center' : 'center'}} className="aboutText">Before starting my tech journey I completed a full-stack bootcamp with the School of Code, learning Javascript (including libraries such as React and Node.js) as well as HTML and CSS, SQL, UI/UX, testing, REST APIs, and networks.</Typography>
            <Typography sx={{fontWeight: isMobile? '500' : 'bold', pb: isMobile? '7px' : '16px', fontSize: isMobile? '0.7rem': '1rem', textAlign: isMobile? 'center' : 'center'}} className="aboutText">Learning to code from a non-tech background wasn't always easy, but I've loved having the opportunity to apply myself in an entirely new direction. While I've done most of my learning at the School of Code, I got into coding around a year earlier. It started with the desire for me to create my own games, especially old-school text adventure games. As I played around, the code went from a means to an end to something I simply had to delve more into, and I did some introductory learning before diving into the School of Code. </Typography>
            <Typography sx={{fontWeight: isMobile? '500' : 'bold', pb: isMobile? '7px' : '16px', fontSize: isMobile? '0.7rem': '1rem', textAlign: isMobile? 'center' : 'center'}} className="aboutText">Before I started learning to code, I was an administrator working in school regulation. As an Account Officer at the Independent Schools Inspectorate, I was part of a small, dedicated team that oversaw educational inspections into private and independent schools across England, managing the process end-to-end. </Typography>
            <Typography sx={{fontWeight: isMobile? '500' : 'bold', pb: isMobile? '7px' : '16px', fontSize: isMobile? '0.7rem': '1rem', textAlign: isMobile? 'center' : 'center', mb: isMobile? '20px' : '40px'}} className="aboutText">Whether you're recruiting, a fellow learner, or anyone at all, please feel free to get in touch!</Typography>
        </Box>
    )
}
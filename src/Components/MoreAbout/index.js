import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Navbar from '../Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import USA from './usa.jpg';
import bryceCanyon from './bryceCanyon.jpg';
import scotland from './scotland.jpg';
import sriLanka from './sriLanka.jpg';
import './style.css';

export default function MoreAbout() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <Box className="moreAboutFade">

            <Navbar />

            <Box className="moreAboutFade" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Typography sx={{fontSize: isMobile? '21px' : '27px', mt: '30px'}}>Here's some more about me!</Typography>
            </Box>

            <Box className="moreAboutFade" sx={{display: 'flex', flexDirection: isMobile? 'column' : 'row', justifyContent: 'center', alignItems: isMobile? 'center' :  'flex-start', gap: '40px', mt: '30px'}}>

                <Box sx={{backgroundColor: '#003049', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: isMobile? '350px' : '800px', borderRadius: '10px', boxShadow: '0px 3px 5px rgba(0.5, 0.5, 0.7, 0.7)'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: 'bold', mt: '15px'}}>Work</Typography>
                    
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: isMobile? '4px' : '15px', mt: isMobile? '8px' : '20px'}}>
                        <img src="https://www.isc.co.uk/media/3364/isi_logo_purple_2.jpg?anchor=center&mode=crop&width=465&height=290&bgcolor=373737" alt="independent schools inspectorate logo" style={{width: isMobile? '80px' : '140px', height: isMobile? '40px' : '70px', mt: '20px', borderRadius: '10px'}}/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Fscs_logo.jpg" alt="financial services compensation scheme logo" style={{width: isMobile? '80px' : '140px', height: isMobile? '40px' : '70px', mt: '20px', borderRadius: '10px'}}/>
                        <img src="https://www.ci-portal.de/wp-content/uploads/AIG_logo.jpg" alt="aig logo" style={{width: isMobile? '80px' : '140px', height: isMobile? '40px' : '70px', mt: '20px', borderRadius: '10px'}}/>
                        <img src="https://www.peace-foundation.org.uk/wp-content/uploads/2018/08/rbs-logo-for-web_Standard-1.jpg" alt="rbs logo" style={{width: isMobile? '80px' : '140px', height: isMobile? '40px' : '70px', mt: '20px', borderRadius: '10px'}}/>
                    </Box>
                    <Typography sx={{fontSize: isMobile? '10px' : '13px'}}>Some of the major organisations I've worked at</Typography>
                    <Typography sx={{fontSize: isMobile? '14px' : '16px', width: isMobile? '330px' : '700px', textAlign: 'center', mt: isMobile? '10px' : '18px'}}>While I've never had a job in development, I think that the experience I've gained in my professional career will be of benefit - both to me and a future employer.</Typography>
                    <Typography sx={{fontSize: isMobile? '14px' : '16px', width: isMobile? '330px' : '700px', textAlign: 'center', mt: isMobile? '10px' : '18px'}}>Before joining the School of Code, I spent the last four and a half years working for the Independent Schools Inspectorate. As an Account Officer, I was responsible for the core aim of the organisation - organising and managing inspections for 1,400 Independent Schools Association schools. As a member of the small but dedicated Delivery Team, I was responsible for managing these inspections from end to end. That meant everything from choosing and inviting the initial team, liaising with them to provide inspection documentation and answer logistical questions, booking accomodation, notifying and liaising with the school, and progressing and proofreading inspection reports. </Typography>
                    <Typography sx={{fontSize: isMobile? '14px' : '16px', width: isMobile? '330px' : '700px', textAlign: 'center', mt: isMobile? '10px' : '18px'}}>While my team and I worked in close cohesion to ensure a thorough inspection cycle for routine inspections, as the most senior member of the team I had individual responsibility for short visits. These were one-day, ad hoc inspections outside of the usual timeframe that were either organised due to reported concerns outside of the inspection schedule, or to check the progress of school action plan implementation. </Typography>
                    <Typography sx={{fontSize: isMobile? '14px' : '16px', width: isMobile? '330px' : '700px', textAlign: 'center', mt: isMobile? '10px' : '18px'}}>I am proud of the reputation I developed for fast, efficient inspection management, both among inspectors and school headteachers. I had to be a strong communicator and be able to pre-empt problems on my side long before an inspection took place. </Typography>
                    <Typography sx={{fontSize: isMobile? '14px' : '16px', width: isMobile? '330px' : '700px', textAlign: 'center', mt: isMobile? '10px' : '18px', mb: '10px'}}>I'm eager to talk more about ISI and my other roles, but the UI designer in me says that this wall of text shouldn't be too much bigger! So please see my CV via the navbar for more.</Typography>
                </Box>
            
                <Box classname="moreAboutFade" sx={{backgroundColor: '#003049', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: isMobile? '350px' : '800px', mb: '20px', borderRadius: '10px', boxShadow: '0px 3px 5px rgba(0.5, 0.5, 0.7, 0.7)'}}>
                <Typography sx={{fontSize: '20px', fontWeight: 'bold', mt: '15px'}}>Everything else</Typography>

                <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px', mt: '25px'}}>
                    <img style={{width: isMobile? '160px' :  '320px', height: isMobile? '80px' : '160px', mt: '20px', borderRadius: '10px'}} src={USA} alt="USA picutre"></img>
                    <img style={{width: isMobile? '160px' :  '320px', height: isMobile? '80px' : '160px', mt: '20px', borderRadius: '10px'}} src={bryceCanyon} alt="Bryce Canyon"></img>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'row', gap: '8px', mt: '8px'}}>
                    <img style={{width: isMobile? '160px' :  '320px', height: isMobile? '80px' : '160px', mt: '20px', borderRadius: '10px'}}  src={scotland} alt="Scotland"></img>
                    <img style={{width: isMobile? '160px' :  '320px', height: isMobile? '80px' : '160px', mt: '20px', borderRadius: '10px'}}  src={sriLanka} alt="Food"></img>
                </Box>
                <Typography sx={{fontSize: isMobile? '14px' : '16px', width: isMobile? '340px' : '700px', textAlign: 'center', mt: '20px'}}>I always find something to enjoy about my work, but my interests don't end there!</Typography>
                <Typography sx={{fontSize: isMobile? '14px' : '16px', width: isMobile? '340px' : '700px', textAlign: 'center', mt: '20px'}}>Coding has been a genuine passion of mine since I learned Javascript, and even before, when I was doing some absolute beginner coding on Python. Even after a day of learning and coding during my School of Code bootcamp, I'd often find myself coding for fun in the evening.</Typography>
                <Typography sx={{fontSize: isMobile? '14px' : '16px', width: isMobile? '340px' : '700px', textAlign: 'center', mt: '20px'}}>I love both gaming and being creative, and one of the ways I first got into coding was by trying to write simple text adventure games using Python. With a bit more development knowledge, I'm excited to start working on a couple of these ideas in React. </Typography>
                <Typography sx={{fontSize: isMobile? '14px' : '16px', width: isMobile? '340px' : '700px', textAlign: 'center', mb: isMobile? '20px' : '16.7px', mt: '20px'}}>Away from the computer, I really like to travel, and I've developed a real love of walking holidays. My hiking boots have been as close as the South Downs and as far as the Rocky Mountains. I'm not a mountain climber or an off-the-grid adventurer, though - I just enjoy a nice walk! </Typography>



                </Box>
            </Box>
            <Typography className="footerBar123" sx={{ color: 'white', backgroundColor: '#003049', mt: isMobile? '30px' : '48px', padding: '12px', display: 'flex', justifyContent: 'center' }}>Created by Neil Brooks, 2023</Typography>

        </Box>
    )
}
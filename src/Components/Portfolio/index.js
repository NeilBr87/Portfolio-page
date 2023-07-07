import React from 'react';
import Navbar from '../Navbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PortfolioCard from '../PortfolioCard';
import Box from '@mui/material/Box';

export default function Portfolio() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <Navbar />
            <Typography sx={{fontWeight: 'bold', textAlign: 'center', fontSize: isMobile? '18px' : '25px', mt: isMobile? '6%' : "3.5%"}}>Thanks for checking out my portfolio!</Typography>
                
                
                <Box sx={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', alignItems: isMobile? 'center' : 'baseline', mt: '30px', gap: '40px'}}>

                    <Box sx={{display: 'flex', flexDirection: 'column',}}>
                        <Typography variant="h5" sx={{mb: isMobile? '20px' : '40px', textAlign: 'center'}} >Major group projects</Typography>

                        <Box sx={{display: 'flex', flexDirection: isMobile? 'column' : 'row', gap: '20px'}}>

                            <PortfolioCard 
                                itemImage="swapp" 
                                itemTitle="SwAPP" 
                                itemDescription="SwAPP was my team's final School of Code project. It is a working full-stack website that seeks to address the problem of waste, and specifically clothing waste." 
                                itemDesc2="The concept of SwAPP is simple. Upload an item of clothing you no longer need and you'll receive a single token. Use that token to claim another user's listed item."
                                githubLink="https://github.com/latifahassan/final-project-swapping-app"
                                appLink="https://swappbitbybit.netlify.app/"
                                />

                            <PortfolioCard
                                itemImage="haccio"
                                itemTitle="Haccio"
                                itemDescription="Haccio was my team's Week 7 project. We had a week to ideate, plan and code a React app that addressed a specific problem for bootcampers."
                                itemDesc2="The problem we chose involved asking for help from the right people. Users would theoretically set their proficiencly levels in HTML, JS, etc, and be notified when other users had issues with those languages."
                                githubLink="https://github.com/latifahassan/final-project-swapping-app"
                                appLink=""
                            />

                        </Box>

                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column',}}>

                    <Typography variant="h5" sx={{mt: '20px', mb: '40px', textAlign: 'center'}} >Completed solo projects</Typography>
                    <Box sx={{display: 'flex', flexDirection: isMobile? 'column' : 'row', gap: '20px'}}>
                        <PortfolioCard 
                            itemImage="Mysite" 
                            itemTitle="My portfolio page" 
                            itemDescription="My first proper project after finishing the bootcamp - this very website!" 
                            itemDesc2="This site has been compiled with React using MaterialUI for formatting and responsiveness. It has two goals: to give prospective employers and others a sense of who I am, and to give me a chance to keep my React skills strong."
                            githubLink="https://github.com/latifahassan/final-project-swapping-app"
                            appLink="https://swappbitbybit.netlify.app/"
                            />
                        <PortfolioCard
                            itemImage="SOC"
                            itemTitle="SOC_Pop"
                            itemDescription="SOC_Pop was the first React project I attempted solo. I started off very confused about React hooks, so I thought that a project would be a good way to learn and get into good practice."
                            itemDesc2="SOC_Pop is a population guessing game that can either be played as a group or as a scored single player. The player has to guess the highest population out of two randomly-generated countries."
                            githubLink="https://github.com/NeilBr87/SOC_Pop"
                            appLink="https://neilbr87.github.io/SOC_Pop/"
                        />
                    </Box>
                    </Box>

                    


                </Box>

                <Typography variant="h4" sx={{mt: isMobile? '5%': '3.5%', mb: '10px', textAlign: 'center'}} >Watch this space!</Typography>
                
                {/* <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline', mt: '10px', gap: '40px'}}>

                    <Box sx={{display: 'flex', flexDirection: 'column',}}>
                    <Typography variant="h5" sx={{mb: '10px', textAlign: 'center'}} >Selected hackathons and smaller projects</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '20px'}}>

                        <PortfolioCard
                            itemImage="SOC"
                            itemTitle="Mapfinder"
                            itemDescription="SOC_Pop was the first React project I attempted solo. I started off very confused about React hooks, so I thought that a project would be a good way to learn and get into good practice."
                            itemDesc2="SOC_Pop is a population guessing game that can either be played as a group or as a scored single player. The player has to guess the highest population out of two randomly-generated countries."
                            githubLink=""
                            appLink=""
                        />
                        <PortfolioCard
                            itemImage="SOC"
                            itemTitle="MarsLENS"
                            itemDescription="SOC_Pop was the first React project I attempted solo. I started off very confused about React hooks, so I thought that a project would be a good way to learn and get into good practice."
                            itemDesc2="SOC_Pop is a population guessing game that can either be played as a group or as a scored single player. The player has to guess the highest population out of two randomly-generated countries."
                            githubLink=""
                            appLink=""
                        />
                    </Box>
                </Box> */}
                {/* </Box> */}
            <Typography className="footerBar123" sx={{ color: 'white', backgroundColor: '#003049', mt: isMobile? '35px' : '80px', padding: '10px', display: 'flex', justifyContent: 'center' }}>Created by Neil Brooks, 2023</Typography>

        </div>
    )
}
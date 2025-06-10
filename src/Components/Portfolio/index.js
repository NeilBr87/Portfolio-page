import React from 'react';
import Navbar from '../Navbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PortfolioCard from '../PortfolioCard';
import Box from '@mui/material/Box';
import './style.css';

export default function Portfolio() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <Navbar />
            <Typography className="techStack" sx={{fontWeight: 'bold', textAlign: 'center', fontSize: isMobile? '18px' : '25px', mt: isMobile? '6%' : "1.2%"}}>Thanks for checking out my portfolio!</Typography>
                
                <Box className="techStack" sx={{backgroundColor: 'white', width: isMobile ? '280px' : '640px', margin: '0 auto', padding: '20px', mt: '20px', boxShadow: '0px 3px 5px rgba(0.5, 0.5, 0.7, 0.7)', borderRadius: '10px'}}>
                    <Typography sx={{mt: isMobile? '-3.6%': '0.1%', mb: '10px', textAlign: 'center', fontWeight: 'bold'}} >Tech stack I'm familiar with</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: isMobile? '2px' : '20px'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="html logo" style={{width: isMobile? '30px' : '50px', height: isMobile? '30px' : '50px'}}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="css logo" style={{width: isMobile? '30px' : '50px', height: isMobile? '30px' : '50px'}}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="javascript logo" style={{width: isMobile? '30px' : '50px', height: isMobile? '30px' : '50px'}}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react logo" style={{width: isMobile? '30px' : '50px', height: isMobile? '30px' : '50px'}}/>
                    <img src="https://db.cs.uni-tuebingen.de/teaching/ws2223/sql-is-a-programming-language/logo.svg" alt="sql logo" style={{width: isMobile? '30px' : '50px', height: isMobile? '30px' : '50px'}}/>
                    <img src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" alt="supabase logo" style={{width: isMobile? '30px' : '50px', height: isMobile? '30px' : '50px'}}/>
                    <img src="https://miro.medium.com/v2/resize:fit:600/1*i37IyHf6vnhqWIA9osxU3w.png" alt="jest logo" style={{width: isMobile? '30px' : '50px', height: isMobile? '30px' : '50px'}}/>
                    <img src="https://playwright.dev/img/playwright-logo.svg" alt="playwrite logo" style={{width: isMobile? '30px' : '50px', height: isMobile? '30px' : '50px'}}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="figma logo" style={{width: isMobile? '30px' : '50px', height: isMobile? '30px' : '50px'}}/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhNUS5emquOnd63nSxHHhN3Ow_16X_rdokA&s" alt="wpEngine" style={{width: isMobile? '30px' : '50px', height: isMobile? '30px' : '50px'}}/>
                    </Box>
                
                </Box>


                <Box className="portfolioArea" sx={{display: 'flex', flexDirection: isMobile ? 'column' : 'column', justifyContent: 'center', alignItems: isMobile? 'center' : 'center', mt: '15px', gap: '40px'}}>

                    <Box className="portfolioArea" sx={{display: 'flex', flexDirection: 'column',}}>
                        <Typography className="" variant="h5" sx={{mb: isMobile? '20px' : '16px', textAlign: 'center'}} >Major group projects</Typography>

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
                                githubLink="https://github.com/NeilBr87/Haccio"
                                appLink="https://haccio.netlify.app/"
                            />

                        </Box>

                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column',}}>

                    <Typography variant="h5" sx={{mt: '20px', mb: '16px', textAlign: 'center'}} >Solo projects</Typography>
                    <Box sx={{display: 'flex', flexDirection: isMobile? 'column' : 'row', gap: '20px'}}>
                        
                        <PortfolioCard 
                            itemImage="Pulling Strings"
                            itemTitle="Who's Pulling the Strings?"
                            itemDescription="A new project designed to put me more into a React framework after some time working on Wordpress. Who's Pulling the Strings is intended as a data analysis of registered MP interests - specifically, who's paying them and for what."
                            itemDesc2="It's got (currently scant) information on this from the most recent declaration of interests. I also made use of a wide range of parlaimentary APIs for my knowledge base."
                            githubLink="https://github.com/NeilBr87/pulling-strings"
                            appLink="https://whopullsthestrings.netlify.app/"
                        />
                        <PortfolioCard 
                            itemImage="MyFirstNumbers"
                            itemTitle="My First Numbers"
                            itemDescription="My First Numbers started life as a simple countng game I created for my young nephew. He was uninterested in the counting games on his tablet so I made an alternative that would keep his interest by using images of family members as the objects."
                            itemDesc2="I wanted to make it a more general game and replaced the family member details - and audio - with generic, adaptable examples."
                            githubLink="https://github.com/NeilBr87/My-First-Numbers"
                            appLink="https://my-first-numbers.netlify.app/"
                        />
                        <PortfolioCard
                            itemImage="Hitcher"
                            itemTitle="Hitcher"
                            itemDescription="Hitcher is an attempt to go back into the very early motivation for my learning to code - creating text adventures with complex logic. In Hitcher, you travel across Europe via hitchiking, managing your health, food, and money as you go."
                            itemDesc2="After I created a solid proof of concept with lots of random events I left Hitcher on Hiatus for a while, but I'm not finished with it."
                            githubLink="https://github.com/NeilBr87/Hitcher"
                            appLink="https://hitcher.netlify.app/"
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

                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline', mt: '10px', gap: '40px'}}>

                    <Box sx={{display: 'flex', flexDirection: 'column',}}>
                    <Typography variant="h5" sx={{mb: '10px', mt: '5vh', textAlign: 'center'}} >Websites and prototype projects</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: '20px'}}>

                        <PortfolioCard
                            itemImage="GildedGrove"
                            itemTitle="Gildred Grove"
                            itemDescription="A smallscale single page project I worked on recently - this was a very basic prototype of a page I worked on for my friend who was thinking about starting a jewellery side business. "
                            itemDesc2="A straightforward site project responsive for both desktop and mobile."
                            githubLink="https://github.com/NeilBr87/GildedGrove"
                            appLink="https://gildedgrove.netlify.app/"
                        />
                        <PortfolioCard
                            itemImage="Ourtraveljournals"
                            itemTitle="Travel Journal"
                            itemDescription="I get a lot out of both writing and travelling, and keeping a travel journal is one way I've managed to combine both passions. But I wanted to do something more elaborate than a Word document, and I thought a React app that I could fully customise was a great avenue for this."
                            itemDesc2="My travel journal is my most-commonly updated project as I write up more adventures."
                            githubLink="https://github.com/NeilBr87/America-Journal"
                            appLink="https://ourtraveljournals.netlify.app/"
                        />
                        <PortfolioCard 
                            itemImage="Mysite" 
                            itemTitle="My portfolio page" 
                            itemDescription="My first small project after finishing the bootcamp - this very website!" 
                            itemDesc2="This site has been compiled with React using MaterialUI for formatting and responsiveness. It has two goals: to give prospective employers and others a sense of who I am, and to give me a chance to keep my React skills strong."
                            githubLink="https://github.com/NeilBr87/Portfolio-page"
                            appLink="/"
                            />
                        
                    </Box>
                </Box> 
                 </Box>
            <Typography id="portfolioFooter" sx={{ color: 'white', backgroundColor: '#003049', mt: isMobile? '30px' : '48px', padding: '10px', display: 'flex', justifyContent: 'center' }}>Created by Neil Brooks, 2023</Typography>

        </div>
    )
}
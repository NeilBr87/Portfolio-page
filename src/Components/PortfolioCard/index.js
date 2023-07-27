import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import swapp from './SwAPP.JPG';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import LaptopIcon from '@mui/icons-material/Laptop';
import haccio from './Haccio.JPG';
import Mysite from './Mysite.JPG';
import SymptomSense from './SymptomSense.JPG';
import SOC from './SOC.JPG';

export default function PortfolioCard(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const itemImage = props.itemImage;
  const imageLink = React.useMemo(() => {
    if (itemImage === 'swapp') {
      return swapp;
    }
    if (itemImage === 'haccio') {
        return haccio;
    }
    if (itemImage === 'Mysite') {
        return Mysite;
    }
    if (itemImage === 'SOC') {
        return SOC;
    }
    if (itemImage === 'SymptomSense') {
        return SymptomSense;
    }

    return '';
  }, [itemImage]);

  return (
    <div>
<Box style={{ width: isMobile? '280px' : '320px', backgroundColor: 'white', padding: '20px', boxShadow: '0px 3px 5px rgba(0.5, 0.5, 0.7, 0.7)', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img style={{ width: isMobile? '280px' : '320px', borderRadius: '10px', border: '1px solid black' }} src={imageLink} alt="Portfolio Item" />
      <Typography variant="h5" sx={{textAlign: 'center'}}>{props.itemTitle}</Typography>
       <Box sx={{height: isMobile? '220px' : '200px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography sx={{fontSize: '14px', textAlign: 'center', pb: '10px'}}>{props.itemDescription}</Typography>
        <Typography sx={{fontSize: '14px', textAlign: 'center'}}>{props.itemDesc2}</Typography>
       </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
        <Link href={props.githubLink}><GitHubIcon className="socialIcons" sx={{ fontSize: '40px', color: 'black' }} /></Link>
        <Typography>Visit the repo</Typography>
       </Box>
       <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
        <Link href={props.appLink}><LaptopIcon className="socialIcons" sx={{ fontSize: '40px', color: 'black' }} /></Link>
        <Typography>Visit the app</Typography>
       </Box>



    </Box>
    </div>
  );
}

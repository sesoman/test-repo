import './visualisationPage.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as React from 'react';

export function VisualisationPage(){
    
    const steps = [
        'Prepare data',
        'Skill Framework',
        'Data Analysation',
        'Visualisation',
      ];

      const navigate = useNavigate();

      const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
        const handleClick = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

    
    return(
        <div className="wrap visualisationPage">
        <header className = "topBorder">
            <h2>Title of selected service - Visualisation </h2>
            <Box sx={{ 
                    width: '100%'
                    }}>
                <Stepper activeStep={3} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel sx={{
                                '& .css-12eb3rq-MuiStepLabel-label.MuiStepLabel-alternativeLabel':{marginTop:'0.5em'},
                                '& .css-3hpdci-MuiSvgIcon-root-MuiStepIcon-root.Mui-active' :{color: '#606163',},
                                '& .css-3hpdci-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed' :{color: '#606163',},
                            }}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </header>

        <div className='informationBox'>
             <p>this is an infotext that will inform the user about the options and pitfalls of the current step</p>
        </div>
        
        <div className="mainContent">
            <div id='buttonRow'>
                <button className='standardButton'>Integrate into LMS</button>
                <button 
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className='standardButton'>Export</button>
                <Menu
                    id="fade-menu"
                    sx={{
                        '& .css-1tktgsa-MuiPaper-root-MuiPopover-paper-MuiMenu-paper':{
                            backgroundColor: '#DBDCDE',
                            borderRadius: '1.3em',
                            border: 'solid 1px #ADADB0',
                            color: '#606163',
                            minWidth: '16%',
                        },
                    }}
                    MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>Downlaod as PDF</MenuItem>
                    <MenuItem onClick={handleClose}>Download as JSON</MenuItem>
                    <MenuItem onClick={handleClose}>Export to cloud</MenuItem>
                </Menu>

            </div>
            <div id='visualisationBox'className='containerBox'></div>
        </div>
        
        <footer className = "bottomBorder">
            <button onClick={() => navigate(-1)} className="standardButton">Back</button>
            <button onClick={() => navigate('/')} className="standardButton">Return to Landing Page</button>
        </footer>
    </div>
    );
}
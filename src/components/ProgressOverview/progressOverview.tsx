import { useState, useEffect } from "react";
import './progressOverview.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useNavigate } from 'react-router-dom';

export function ProgressOverview(){
    
    const steps = [
        'Prepare data',
        'Skill Framework',
        'Data Analysation',
        'Visualisation',
      ];

      const navigate = useNavigate();
    return(
        <div className="wrap progressPage">
        <header className = "topBorder">
            <h2>Title of selected service - Process Overview</h2>
            <Box sx={{ 
                    width: '100%'
                    }}>
                <Stepper activeStep={2} alternativeLabel>
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
            <div className="blocks" id="upperBlock">
                <h1>Service in progress</h1>
                <progress id="overallProgress" value="45" max="100"></progress>
                <p>Approximately 3 hours left</p>
            </div>
            <div className="blocks" id="lowerBlock">
                <object data="/progressBars.html" width="100%" height="100%"></object>
            </div>
        </div>
        <footer className = "bottomBorder">
            <button onClick={() => navigate(-1)} className="standardButton">Back</button>
            <button onClick={() => navigate('/fifth')} className="standardButton">Next</button>
        </footer>
    </div>
    );
}
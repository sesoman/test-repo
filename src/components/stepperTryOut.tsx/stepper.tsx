import './stepper.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export function StepperPage(){

    const steps = [
        'Prepare data',
        'Skill Framework',
        'Data Analysation',
        'Visualisation',
      ];

    return(
        <div className="wrap">
        <header className = "topBorder">
            <h2>Title of selected service - name of workflow step page </h2>
            <Box sx={{ 
                    width: '100%'
                    }}>
                <Stepper activeStep={0} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel sx={{
                                '& .css-12eb3rq-MuiStepLabel-label.MuiStepLabel-alternativeLabel':{marginTop:'0.5em'},
                                '& .css-3hpdci-MuiSvgIcon-root-MuiStepIcon-root.Mui-active' :{color: '#606163',},
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
            
        </div>
        
        <footer className = "bottomBorder">
            <a href="third.html" id="backButton">Back</a>
            <a href="#" id="startButton">Next</a>
        </footer>
    </div>
    );
}
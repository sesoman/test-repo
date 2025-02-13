import { useState, useEffect } from 'react';
import './frameworkSelection.css';
import { useNavigate } from 'react-router-dom';
import previewImage from "/src/assets/Preview.PNG"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


export function FrameworkSelection(){
    interface ToggleItem {
        value: string;
        label: string;
    }

    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState(false);
    
    // Define an array of list items
    const listItemsLeft: ToggleItem[] = [
        { value: "Framework 1", label: "Framework 1" },
        { value: "Framework 2", label: "Framework 2" },
        { value: "Framework 3", label: "Framework 3" },
        { value: "Framework 4", label: "Framework 4" },
        { value: "Framework 5", label: "Framework 5" },
        { value: "Framework 6", label: "Framework 6" },
        { value: "Framework 7", label: "Framework 7" },
        { value: "Framework 8", label: "Framework 8" },
        { value: "Framework 9", label: "Framework 9" }
    ];
    const steps = [
        'Prepare data',
        'Skill Framework',
        'Data Analysation',
        'Visualisation',
      ];

    const handleRadioChange = () => {
        setSelectedValue(true); // Flip the boolean value
    };

    // Function to generate the toggle list
    function generateToggleList(container: HTMLElement | null, items: ToggleItem[]): void {
        if (!container) {
            console.error("Container element not found.");
            return;
        }
    
        container.innerHTML = ""; // Clear any existing content
    
        items.forEach((item) => {
            const label = document.createElement("label");
    
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "toggleGroup";
            input.value = item.value;

            input.addEventListener('change', handleRadioChange);

            
    
            const span = document.createElement("span");
            span.textContent = item.label;
    
            label.appendChild(input);
            label.appendChild(span);
    
            container.appendChild(label);
        });
    }
    
    useEffect(()=>{
        // Find the toggle list container safely
        const toggleListContainerLeft = document.querySelector(".toggle-list-left") as HTMLElement | null;
        
        // Populate the list dynamically
        generateToggleList(toggleListContainerLeft, listItemsLeft);
    })
    

    return(
        <>
        <div className="wrap frameworkSelection" >
        <header className = "topBorder">
            <h2>title of selected service - Framework selection</h2>
            <Box sx={{ 
                    width: '100%'
                    }}>
                <Stepper activeStep={1} alternativeLabel>
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
            <div id="containerLeft" className="containers">
                <h1>Frameworks</h1>
                <div className="toggle-list toggle-list-left"></div>
                <button className="frameworkButton standardButton" disabled={!selectedValue}>select</button>
            </div>
            <div id="containerRight" className="containers">
                <h1>Preview</h1>
                <img src={previewImage} alt="An image of the Framework Preview" id="preview"/>
                <button className='frameworkButton standardButton'>confirm</button>
            </div>
        </div>
        <footer className = "bottomBorder">
            <button onClick={() => navigate(-1)}  className="standardButton">Back</button>
            <button onClick={() => navigate('/fourth')}  className="standardButton">Next</button>
        </footer>
    </div>
    </>
    );
   
}
import './secondPage.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';




export function SecondPage(){

    const navigate = useNavigate();

    const listItemsLeft = [
        { value: "job-title", label: "job title" },
        { value: "job-description", label: "job description" },
        { value: "required-skills", label: "required skills" },
        { value: "skill-description", label: "skill description" },
        { value: "branch", label: "branch" },
        { value: "branch", label: "branch" },
        { value: "branch", label: "branch" },
        { value: "branch", label: "branch" },
        { value: "branch", label: "branch" },
    ];
    const listItemsRight = [
        { value: "dataset 1", label: "dataset 1" },
        { value: "dataset 2", label: "dataset 2" },
        { value: "dataset 3", label: "dataset 3" },
        { value: "dataset 4", label: "dataset 4" },
        { value: "dataset 5", label: "dataset 5" },
        { value: "dataset 6", label: "dataset 6" },
        { value: "dataset 7", label: "dataset 7" },
        { value: "dataset 8", label: "dataset 8" },
       
    ];
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

      const steps = [
        'Prepare data',
        'Skill Framework',
        'Data Analysation',
        'Visualisation',
      ];

    function generateToggleList(container:any, items:{value:string,label:string}[]) {
        ///container.innerHTML = ""; // Clear any existing content
        items.forEach(item => {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="checkbox" value="${item.value}">
                <span>${item.label}</span>
            `;
            container?.appendChild(label);
        });
    }
    function generateDataAggregationService(): void {
        // Find the parent container with the id "lowerContainer"
        const parentContainer = document.getElementById('lowerContainer');
        
        if (!parentContainer) {
          console.error('Container with id "lowerContainer" not found.');
          return;
        }
      
        // Clear the container if needed (optional)
        parentContainer.innerHTML = '';
      
        // Create the <h1> element
        const heading = document.createElement('h1');
        heading.textContent = 'Data aggregation service';
        parentContainer.appendChild(heading);
      
        // Create the <progress> element
        const progressBar = document.createElement('progress');
        progressBar.id = 'overallProgress';
        progressBar.value = 45;  // Set the progress value
        progressBar.max = 100;   // Set the maximum value
        parentContainer.appendChild(progressBar);
      
        // Create the <p> element
        const paragraph = document.createElement('p');
        paragraph.textContent = 'remaining time: 10 minutes';
        parentContainer.appendChild(paragraph);
      }
      
      
      function generateUploadElement() {
        const parentContainer = document.getElementById("uploadsContainer");
    
        if (!parentContainer) return;
    
        const uploadDiv = document.createElement("div");
        uploadDiv.className = "uploads";
        
        const typeSymbol = document.createElement("div");
        typeSymbol.className = "typeSymbol";
        typeSymbol.textContent = "pdf";
    
        const detailsDiv = document.createElement("div");
        detailsDiv.className = "details";
    
        const title = document.createElement("h5");
        title.className = "documentTitle";
        title.textContent = "dateiname";
    
        const size = document.createElement("p");
        size.className = "size";
        size.textContent = "50MB";
    
        detailsDiv.appendChild(title);
        detailsDiv.appendChild(size);
    
        // Create a wrapper for React component
        const deleteButtonWrapper = document.createElement("div");
    
        // Use React to render the MUI button inside the wrapper
        import("react-dom").then((ReactDOM) => {
            import("react").then((React) => {
                ReactDOM.default.render(
                    <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>,
                    deleteButtonWrapper
                );
            });
        });

        deleteButtonWrapper.addEventListener("click", () => parentContainer.removeChild(uploadDiv));
    
        // Append elements
        uploadDiv.appendChild(typeSymbol);
        uploadDiv.appendChild(detailsDiv);
        uploadDiv.appendChild(deleteButtonWrapper);
        
        parentContainer.appendChild(uploadDiv);
    }

    // Find the toggle list container


            useEffect(()=>{
                const toggleListContainerLeft = document.querySelector(".toggle-list-left");
                const toggleListContainerRight = document.querySelector(".toggle-list-right");

                // Populate the list dynamically
                generateToggleList(toggleListContainerLeft, listItemsLeft);
                generateToggleList(toggleListContainerRight, listItemsRight);

                const inputBox = document.getElementById('user-input');
                const list = document.getElementById('parameterList');

                if(inputBox){
                    inputBox.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter' && (document.getElementById("user-input") as HTMLInputElement).value.trim() !== '') {
                            const newItem = document.createElement('li'); // Create a new list item
                            newItem.textContent = (document.getElementById("user-input") as HTMLInputElement).value; // Set the text of the list item
                            (document.getElementById("parameterList") as HTMLInputElement).appendChild(newItem); // Add the new item to the list
                            (document.getElementById("user-input") as HTMLInputElement).value = ''; // Clear the input box
                        }
                    });
                }
                
            })

    return(
       <>
       <div className="wrap secondPage">
        <header className = "topBorder">
            <h2>title of selected service - Data preperation</h2>
            <Box sx={{ 
                    width: '100%'
                    }}>
                <Stepper activeStep={0} alternativeLabel>
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
            
            <div id="leftContainer" className="containers">
                <h1>Select data from catalogue</h1>
                <div className="toggle-list toggle-list-right"></div>
            </div>
            
            <div id="rightRow">
                <div id="upperContainers">
                    <div id='upperLeftContainer' className='containers'>
                        <h1>Upload Files</h1>
                        <div id='fileUpload'>
                            <div id='dragAndDrop'>
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                    className='uploadButton'
                                    sx={{
                                        backgroundColor: '#606163',
                                        borderRadius: '0.7em',
                                        textTransform: 'none',
                                        width: 'fit-content'
                                    }}
                                    >
                                    Upload
                                    <VisuallyHiddenInput
                                        type="file"
                                        onChange={(event) => console.log(event.target.files)}
                                        multiple
                                    />
                                </Button>
                                <p id='uploadText'>Select files; PDF, JPEG and ... up to 50MB</p>
                            </div>
                            <h4>Uploads</h4>
                            <div id='uploadsContainer'>
                            <button onClick={() => generateUploadElement()} id="documentsButton">create dummy documents</button>    
                            </div>
                        </div>
                    </div>
                    <div id="upperRightContainer" className="containers">
                        <h1>Select Parameter</h1>
                        <div className="content">
                            <div className="toggle-list toggle-list-left" ></div>
                            <div className="contentRight">
                                <label htmlFor="user-input" className="label"></label>
                                <input type="text" id="user-input" placeholder="Enter custom request"/>

                                <div className="output" id="output"></div>
                                <ul id="parameterList"></ul>
                            </div>
                            
                        </div>
                    </div>
                </div> 
                <div id="lowerContainer"className="containers">
                    <h1>Data aggregation service</h1>                
                    <button onClick={() => generateDataAggregationService()} id="dataButton">start data aggregation</button>
                    <p id='aggregationText'>press if you have selected all relevant data and parameters</p>
                </div>
            </div>
            
        </div>
        <footer className = "bottomBorder">
            <button onClick={() => navigate(-1)}  className="standardButton">Back</button>
            <button onClick={() => navigate('/third')}  className="standardButton">Next</button>

        </footer>
    </div>
    </>
    );
}
import'./landingPage.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export function LandingPage(){
    
    
    // Define the structure of a service
        interface Service {
            title: string;
            description: string;
        }

        const navigate = useNavigate();
        
        // List of services
        const services: Service[] = [
            { title: "Skill Framework Extraction", description: "Helping imc's Pilot partner-1  introduce and maintain an AI-based skills management system that allows analysis of existing skills of employees, benchmarking with their sector, identifying skill gaps, and closing the skill gaps by offering personalized learning opportunities to employees in support of strategic business directions." },
            { title: "Upskilling Employees", description: "This use case aims to enable imc LMS’s customer(s) to participate in the European skill dataspace and thus help them improve strategic HR development. Organizations will be able to reflect on their current talent and available skills, and further required skills within the industry. This can support the HR strategic decision (for example to hire a new employee or provide them with related training from training providers). Acquired skills will be based on a specific skills framework (e.g., ESCO, Lightcase, etc) and aligned with company skills mapping." },
            { title: "Skill Gap Analysis", description: "This service helps to analyze and extract skill frameworks out of Work descriptions in PDF-files. Afterwards you can simply import them to your LMS." },
        ];

        const [isToggled, setIsToggled] = useState(false);

        useEffect(() => {
            console.log("Updated state:", isToggled);
          }, [isToggled]);
        
        
        // Function to generate and append service elements
        function generateServices(): void {
            const serviceListContainer = document.getElementById("service-list");
        
            if (!serviceListContainer) {
            console.error("Service list container not found.");
            return;
            }
        
            services.forEach((service) => {
            const serviceDiv = document.createElement("div");
            serviceDiv.classList.add("service1");
        
            const title = document.createElement("h1");
            title.classList.add("service-title");
            title.textContent = service.title;
        
            const description = document.createElement("p");
            description.classList.add("service-description");
            description.textContent = service.description;
        
            // Create selection circle
            const selectionCircleWrapper = document.createElement("a");
            const selectionCircle = document.createElement("div");
            selectionCircle.classList.add("selection-circle");
        
            // Attach click event instead of inline `onclick`
            selectionCircleWrapper.addEventListener("click", (event) => {
                event.preventDefault();
                toggleSelection(selectionCircle);
                setIsToggled(true);
                //console.log("Toggle selected"+isToggled);
            });
        
            selectionCircleWrapper.appendChild(selectionCircle);
            selectionCircleWrapper.href = "#";
        
            // Append elements to serviceDiv
            serviceDiv.appendChild(title);
            serviceDiv.appendChild(description);
            serviceDiv.appendChild(selectionCircleWrapper);
        
            serviceListContainer.appendChild(serviceDiv);
            });
        }
        
        // Function to toggle the selection circle
        function toggleSelection(circle: HTMLElement): void {
            const allCircles = document.querySelectorAll(".selection-circle .inner-circle") as NodeListOf<HTMLElement>;

            // Hide all inner circles
            allCircles.forEach((innerCircle) => {
            innerCircle.style.display = "none";
            });
        
            let innerCircle = circle.querySelector(".inner-circle") as HTMLElement | null;
        
            if (!innerCircle) {
            innerCircle = document.createElement("div");
            innerCircle.classList.add("inner-circle");
            circle.appendChild(innerCircle);
            }
        
            innerCircle.style.display = innerCircle.style.display === "block" ? "none" : "block";
        }
        

        useEffect(( )=>{
            generateServices();
        },[]);
        
  
    
    return(
        <div className="wrap landingPage">
        <header className = "topBorder">
            <h2>Portal Gateway Service</h2>
        </header>
       
        <div className='informationBox'>
            <p>this is an info text about the main functionlity of the gateway portal and the relation to EDGE-Skill project</p>
        </div>
       
        <div className="serviceContainer" id="service-list">

        </div>
        
        <footer className = "bottomBorder">
            <button className="standardButton" disabled={!isToggled} onClick={() => navigate("/second")}>
            Start 
            </button>
        </footer>
    </div>
    );
}
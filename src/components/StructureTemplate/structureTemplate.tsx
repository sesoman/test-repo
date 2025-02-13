import './structureTemplate.css';

export function StructureTemplate(){
    return(
        <div className="wrap">
        <header className = "topBorder">
            <h2>Title of selected service - name of workflow step page </h2>
        </header>

        <div className='informationBox'>
             <p>this is an infotext that will inform the user about the options and pitfalls of the current step</p>
        </div>
        
        <div className="mainContent"></div>
        
        <footer className = "bottomBorder">
            <a href="third.html" id="backButton">Back</a>
            <a href="#" id="startButton">Next</a>
        </footer>
    </div>
    );
}
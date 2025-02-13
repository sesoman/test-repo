import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SecondPage } from './components/secondPage/secondPage'
import { LandingPage } from './components/landingPage/landingPage'
import { FrameworkSelection } from './components/frameworkSelection/frameworkSelection'
import { StructureTemplate } from './components/StructureTemplate/structureTemplate'
import { StepperPage } from './components/stepperTryOut.tsx/stepper'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProgressOverview } from './components/ProgressOverview/progressOverview';
import { VisualisationPage } from './components/VisualisationPage/visualizationPage'

function App() {
  
  return (
    <>
    <Router> 
      <Routes> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<FrameworkSelection />} />
        <Route path='/fourth' element={<ProgressOverview/>} />
        <Route path='/fifth' element={<VisualisationPage/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App

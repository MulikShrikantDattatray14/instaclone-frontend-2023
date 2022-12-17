import "../Styles/App.css"
 import Card from './card';
import React from "react";
import Form from "./form";

 import LandingPage from "./landingPage"; 
 import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return(
   <div>
  
     <BrowserRouter>
         <Routes> 
             <Route path="/" element ={<LandingPage/>}/>
             <Route path="/abc" element ={<Card/>}/>
             <Route path="/upload" element ={<Form/>}/>
         </Routes>
     </BrowserRouter>
   </div>
  )
}

export default App;

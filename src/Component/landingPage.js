import React from "react";
import image from "../images/image_landing.jpg"
import "../Styles/App.css";
import { Link } from "react-router-dom";
const LandingPage = ()=>{

    return(<div>
        <div>
           <h1>Landing Page</h1>
        </div>

        <div>
            <span >
               <img  className="container" src={image} alt="landing"/>
            </span>
            <span className="rihtPart">
               <strong >10x Team 04</strong>
                
            </span>
            <span id="btn">
                <Link to="/abc"> <button >Enter</button> </Link>
               
            </span>
        </div>
        <footer className="footer">Mulik Shrikant Dattatray</footer>
    </div>)
}
export default LandingPage;
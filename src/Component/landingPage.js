import React from "react";
import image from "../images/image_landing.jpg"
import "../Styles/App.css";
import { Link } from "react-router-dom";
const LandingPage = ()=>{

    return(<div>
           
        <div>
            <span >
               <img  className="container" src={image} alt="landing"/>
            </span>
            <span className="rihtPart">
               <strong >WELCOME TO INSTACLONE</strong>
                
            </span>
            <span id="btn">
                <Link to="/abc"> <button >Lets Go </button> </Link>
               
            </span>
        </div>
        <footer className="footer">Mulik Shrikant Dattatray</footer>
    </div>)
}
export default LandingPage;

import React from "react";

export default function Hero(){
    return(
        <div>
            <div className="hero">
            <div className="grid-container">
                
                    <div className="grid-item">
                        <img  alt="" src={require("../images/image 28.png")} className="image1" />
                    </div>
                
                
                
                
                
                    <div className="grid-item">
                        <img  alt="" src={require("../images/image 30.png")} className="image2"/>
                        <img  alt="" src={require("../images/image 26.png")} className="image3"/>
                    </div>
                    
                        
                    
                
                
                
                
                
                    <div className="grid-item">
                        <img  alt="" src={require("../images/image 27.png")} className="image4"/>
                        <img  alt="" src={require("../images/image 29.png")} className="image5"/>
                    </div>
                    
                
                                                
                                                
                                                
                
                    <div className="grid-item">
                        <img  alt="" src={require("../images/image 22.png")} className="image6"/>
                        <img  alt="" src={require("../images/image 23.png")} className="image7"/>
                    </div>
                    
                
            
            
                
                    <div className="grid-item">
                        <img  alt="" src={require("../images/image 25.png")} className="image8"/>
                        <img  alt="" src={require("../images/image 24.png")} className="image9"/>
                    </div>
                    
                
            </div>
            
         </div>
        <div className="text-field">
            <h1 className="title">Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </div>
    )
}
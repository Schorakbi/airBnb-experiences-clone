import React from "react";

export default function Card(props){
    let availability;
    if(props.item.openSpots === 0){
        availability = "SOLD OUT"
    }else if(props.item.location==="ONLINE"){
        availability = "ONLINE"
    }
    return(
        <div className="card">
            <img
                alt=""
                src={require(`../images/${props.item.coverImg}`)}
                className={props.item.coverImg === "mountain-bike.png" ? "photo" : ""}
            />

            {availability && <div className="availability">{availability}</div>}
            <div className="card-footer">
                <img alt="" src={require("../images/Star 1.png")} />
                
                <span className="rating">{props.item.stats.rating}</span>
                <span className="reviewCount"> ({props.item.stats.reviewCount}) . </span>
                <span className="country">{props.item.country}</span>
                <p className="title">{props.item.title}</p>
                <p className="price"><strong>From ${props.item.price}</strong> / person</p>
            </div>
            
        </div>
    )
}
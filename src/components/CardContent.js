import React from "react";

function CardContent(props){
    return(
        <div className="card" >
            <img className="card-img-top img-fluid" src={props.image} alt="" />
            <div className="card-body">
                <h3>{props.title}</h3>
                <a href= {props.deployed_link} className= "site-link">Deployed Site</a>
                <br></br>
                <a href= {props.github_repo} >Github Repo</a>
            </div>
        </div>
    )
}

export default CardContent;
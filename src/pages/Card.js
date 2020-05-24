import React from "react";
import Repos from "../utils/Repos"
import CardContent from "../components/CardContent"
import Col from "../components/Col"


function Card(){
    return(
        <>
            <div className="row">
                <div className="col-lg-8">
                    <div className="container main-content"> 
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <h2>Portfolio</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                            {Repos.map(project=>{
                                return <CardContent title= {project.title} github_repo= {project.github_repo} deployed_link={project.deployed_link} image={project.image} key={project.id}/>
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
}

export default Card;
import React from "react";
import Projects from "../utils/Projects"
import CardContent from "../components/CardContent"


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
                            {/* Mapping through first 3 projects */}
                            {Projects.slice(0, 3).map(project=>{
                                return <CardContent title= {project.title} github_repo= {project.github_repo} deployed_link={project.deployed_link} image={project.image} key={project.id}/>
                            })}
                            </div>
                            <div className="col-lg-6 col-md-6">
                            {/* Mapping through last 2 projects to fix column issue */}
                            {Projects.slice(3).map(project=>{
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
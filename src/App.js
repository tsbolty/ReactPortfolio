import React, {useState} from 'react';
import './App.css';
import CardContext from "./components/CardContext"
import Repos from "./utils/Repos"
import Card from "./components/Card"



function App() {

  const [card, setCard] = useState({
    title: "",
    deployed_link: "",
    github_repo: "",
    image: ""
  })



  return (
    <>
      {Repos.map(repos=>{
        return <Card title= {repos.title} github_repo= {repos.github_repo} deployed_link={repos.deployed_link} image={repos.image} key={repos.id}/>
      })}
    </>
  );
}

export default App;

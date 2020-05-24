import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./pages/Card"
import About from "./pages/About"
import Contact from "./pages/Contact"



function App() {

  return (
    <Router>
      <div className= "container">
        <Navbar />
        <Route exact path= "/portfolio" component={Card}/>
        <Route exact path= "/contact" component={Contact} />
        <Route exact path= "/" component= {About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

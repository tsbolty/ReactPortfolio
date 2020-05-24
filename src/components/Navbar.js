import React from "react"
import Row from "./Row"

function Navbar(){

    return(
        <Row>
            <div className="card-body card col-lg-2 offset-lg-1 col-md-2 offset-md-1 col-sm-2 offset-sm-4 col-xs-2 offset-xs-4">
                <h1>Tyler Bolty</h1>
            </div>
            <nav className="col-lg-5 offset-lg-4 col-md-5 offset-md-4 col-sm-12">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="/">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
              </ul>
        </nav>

        </Row>

    )
}

export default Navbar;
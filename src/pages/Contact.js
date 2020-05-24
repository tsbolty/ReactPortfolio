import React from "react";

function Contact(){
    return(
        <div>
            <form className="col-lg-6 offset-lg-1 col-lg-5 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-sm-1 contact-form">
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter name here..."></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
            
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button type="button" className="btn btn-outline-dark">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
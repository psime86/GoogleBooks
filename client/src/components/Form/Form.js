import React from "react";
import "./style.css";

function Form(props){    
    return (
        <div className="card m-4 formCard">

            <div className="card-title m-2">
                <h4>Search for a book!</h4>
            </div>   

            <div className="card-body">
                <div className="form" validation>
                    <input type="text" onChange={props.handleInputChange} name="search" className="form pb-1" placeholder="Search for a book!" required />
                    <button className="btn btn-primary form ml-2" onClick={props.handleFormSubmit}>Search</button>
                </div>
            </div>
             
        </div>
    );
}

export default Form;
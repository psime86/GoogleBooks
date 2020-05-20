import React from "react";

const BookCard = function(props) {
    return (
        
        <div className="card m-4 rounded justify-content-center bg-light"  key={props.id}>
            <div className="row no-gutters justify-content-center">

                <div className="col-md-4">
                    
                    {/* Book image/thumbnail */}
                    <img src={props.image} className="card-img rounded m-2" alt={props.title}/>

                </div>

                <div className="col-md-8">

                    <div className="card-body">

                        {/* Book title */}
                        <h5 className="card-title">{props.title}</h5>
                        {/* Book Author */}
                        <p className="card-text">by: {props.author}</p>
                        {/* Book Summary */}
                        <p className="card-text">Summary: {props.summary}</p>
                        {/* Save book to DB button */}
                        <button className="btn btn-info" onClick={ () =>{props.handleBtn()}}>{props.btnName}</button>
                        {/* Link toi view book */}
                        <a href={props.link} className="btn btn-primary float-right">View</a>

                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default BookCard;
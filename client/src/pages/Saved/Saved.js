import React, { Component } from "react";
import Header from "../../components/Header/Header";
import BookCard from "../../components/BookCard";
import API from "../../utils/API.js";
import "./style.css";


class Saved extends Component{

    state= {
        savedBooks: [],
        btnName:"Delete",
        title: "G-Books",
        description: "",
        headerMessage: ""
    }

    // Get books from dataBase and setState: savedBooks or display description.

    componentDidMount (){
        // Use API function "getSavedBooks" to return saved books from DB.
        API.getSavedBooks()
            .then(res => {
                console.log(res)
                if(!res) {                    
                    this.setState({ description: "Saved books will appear here." })
                } else {
                    console.log(res)
                    // If response, setState.
                    this.setState({ savedBooks: res, description: "Here are your saved books!", headerMessage: "Click 'View' to view on 'Google-Books' and 'Delete' to remove your book!" })
                }
            })
    }


    handleBtn (id) {
        // Use API function "deleteBook" to delete book from DB.
        API.deleteBook(id)
            .then(res => {
                // Inform the user ther book has been deleted.
                alert("Book deleted!");
                // Call "componentDidMount" to refresh savedBooks displayed after delete.
                this.componentDidMount()
            })
    }

        
    render() {
        return (
            <div>
                <Header
                    title={this.state.title}
                    pageDescription={this.state.description}
                    message={this.state.headerMessage}                
                />                
                    
                        {this.state.savedBooks.length ? (

                        <div className="card justify-content-center results border border-success m-4">
                            {this.state.savedBooks.map(book => 
                            ( 
                                
                                <BookCard
                                    image={book.image}
                                    title={book.title}
                                    author={book.author}
                                    summary={book.description}
                                    handleBtn={() => {this.handleBtn(book._id)}}
                                    link={book.link}
                                    id={book._id}
                                    btnName={this.state.btnName}
                                />
                            ))}
                        </div>
                    ) 
                    : 
                    ( 
                        <div className="card justify-content-center noResults border border-danger m-4" style={{width: "100%"}}>
                            <h3 className="text-center">No saved books found</h3>   
                        </div>
                    )}                
            </div>
        )
    }
}

export default Saved;
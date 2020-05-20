import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import BookCard from "../../components/BookCard";
import API from "../../utils/API";
import "./style.css";


class Search extends Component {


    state= {
        books:[],
        searchTerm: "",
        btnName: "Save",
        title: "G-Books",
        description: "Enter a book to search for below!",
        headerMessage:  ""
    }


    getBooksFromGoogle = (searchTerm) => {
        // Run function from API.js to search google-books.
        API.getBooksFromGoogle(searchTerm)
            .then(res => {
                
                // Take the response from Google Api search and use it to setState "books" array.
                this.setState({ books: res.items, headerMessage: "Click 'View' to view Books and 'Save' to add a book to 'Saved Books'" })
                
            });
    }


    handleInputChange = event => {
        // Assign the search change in input to a variable.
        const formInput = event.target.value;
        // Set the this.state.searchTerm to value of formInput.
        this.setState({ searchTerm: formInput })
        
        
    }

    // Handle form submit button

    handleFormSubmit = event => {
        event.preventDefault();
        // Call function "getBooksFromGoogle" with argument of "searchTerm" after validation .
        if (this.state.searchTerm === "") {
            alert("please enter something to search")
        } else {
            this.getBooksFromGoogle(this.state.searchTerm)
            // Reset this.state.searchTerms after function.
            this.setState({searchTerm:""})
        }
        
    }

    handleBtn = (id) => {
        
        console.log(id)
        // Grab specific book from "books" array by filtering by id and define with variable.
        let bookInfo = this.state.books.filter(book => book.id === id)
        
        // Define "bookObject" with data from specific book ("bookInfo").
        let bookObject = {
            title: bookInfo[0].volumeInfo.title,
            author: bookInfo[0].volumeInfo.authors[0],
            description: bookInfo[0].volumeInfo.description,
            image: bookInfo[0].volumeInfo.imageLinks ?  bookInfo[0].volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/150",
            link: bookInfo[0].volumeInfo.previewLink
        }

        // Run function from API.js. passing "bookObject" as argument.
        API.saveBook(bookObject)
            .then(res =>
             alert(`Saved to 'Saved Books' page`)   
            )
    }

    render(){
        return (
            <div>
                <Header
                    title={this.state.title}
                    pageDescription={this.state.description}
                    message={this.state.headerMessage}
                />
                    <Form 
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                                            
                        {this.state.books.length ? (                            
                            <div className="card justify-content-center results border border-success m-4">
                                {this.state.books.map(book => 
                                (                                    
                                    <BookCard
                                        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/150" }
                                        title={book.volumeInfo.title}
                                        author={book.volumeInfo.authors}
                                        summary={book.volumeInfo.description}
                                        handleBtn={() => {this.handleBtn(book.id)}}
                                        link={book.volumeInfo.previewLink}
                                        id={book.id}
                                        btnName={this.state.btnName}
                                    />
                                ))}
                            </div>
                        ) 
                        : 
                        (
                            <div className="card justify-content-center noResults m-4" >
                                <h3 className="text-center ">Try searching for a new book!</h3>
                            </div>
                        )}                         
            </div>
        )
    }
}

export default Search;
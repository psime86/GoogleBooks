import axios from "axios";


// Define API functions inside exported module.

export default {
    // Get books by search term from google
    getBooksFromGoogle: function(searchTerm) {

        // Define the api key and api URL
        const key=process.env.GOOGLE_BOOKS_API;
       
        const apiURL = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&=" + key + ""

        // Use google books api to retrieve books based on "searchTerms" variable
        return axios.get(apiURL)
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    // Gets the saved books
    getSavedBooks: function() {
        // Return all books from DB with GET route
        return axios.get("/api/books")
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    // Deletes the book with the given id
    deleteBook: function(id)  {
        // Send book "id" to be remove with DELETE route
        return axios.delete("/api/books/" + id)
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        // Send bookObject (bookData), with POST route
        return axios.post("/api/books", bookData)
            .then(res => res.data)
            .catch(err => console.log(err))
    }
};
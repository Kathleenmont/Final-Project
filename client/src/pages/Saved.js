
import React, { Component } from "react";
// import API from "../utils/API";
// import SearchCard from "../components/SearchCard";
// // import SearchButton from "../components/SearchButton";
// // import SearchBar from "../components/SearchBar";
// // import Nav from "../components/Nav";
// import Jumbotron from "../components/Jumbotron"
// let query;

class Saved extends Component {
//     constructor(props) {
//         super(props);
//         // this.handleInputClick = this.handleInputClick.bind(this);
//         // this.loadBooksEvent = this.loadBooksEvent.bind(this);
//         // this.loadBooks = this.loadBooks.bind(this);
//       }
      state = {
        foods: [],
        // search: query,
        title: "",
        authors: [],
        description: "",
        image: "",
        link: "",
        saved: true
      };
    
      componentDidMount() {
        // this.loadFoods();
        console.log(this.state);
      }
    
//       loadBooksEvent = e => {
//         console.log("in load books event");
//         e.preventDefault();
//         this.loadBooks();
//       };

//     render() {
//         return (
//             <div>
//               <Jumbotron />
//             {this.state.books.map(book => (
//               <SearchCard
//                 // saveButtonClick={this.saveButtonClick}
//                 key={book.id}
//                 id={book.id}
//                 title={book.volumeInfo.title}
//                 author={book.volumeInfo.authors}
//                 description={book.volumeInfo.description}
//                 image={book.volumeInfo.imageLinks.thumbnail}
//                 link={book.saleInfo.buyLink}
//                 saved={book.saved}
//               />
//             ))}
//           </div>
//         )
//     }
}

export default Saved;
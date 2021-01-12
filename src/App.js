import Book from "./Book";
import booksData from "./data/books";

export default () => {
    let books = booksData.map( book => <Book item={book} /> )
    return (
        <div>
        {books}
        </div>
    );
};
import Book from "./Book";
import data from "./data/books.json";

export default () => {
    const books = data.map( book => <Book item={book} /> );
    return (
        <div>
        {books}
        </div>
    );
};
import Book from "./Book";
import data from "./data/books.json";

export default () => <div>{data.map( book => <Book item={book} /> )}</div>;
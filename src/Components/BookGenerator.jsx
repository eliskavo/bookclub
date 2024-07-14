import books from "../data/books.json";

// generate a book from the books.json but take ones with status:read out

export const BookGenerator = () => {
    const unreadBooks = books.filter(book => book.status !== "read");
    const book = unreadBooks[Math.floor(Math.random() * unreadBooks.length)];

    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.member}</p>
        </div>
    );

}


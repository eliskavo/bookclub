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
            <button 
                className ="relative px-4 py-2 font-inter text-black bg-white-500 border border-black double-border "
            >Choose this book</button>
        </div>
    );

}


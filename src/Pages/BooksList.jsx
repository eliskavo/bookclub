import { Link } from "react-router-dom";
import books from "../data/books.json";
import { BookGenerator } from "../Components/BookGenerator";
import { useState } from "react";

export const BooksList = () => {

  const [showBookGenerator, setShowBookGenerator] = useState(false);

  const handleButtonClick = () => {
    setShowBookGenerator(true);
  };

  return (
    <div>
      <Link to="/" className="title">
        <h1>Buk klab</h1>
      </Link>
      <Link to="/members" className="navbar">
        Members
      </Link>
      <Link to="/recentbook" className="navbar">
        Recent Book
      </Link>
      <Link to="/bookslist" className="navbar">
        Books
      </Link>
      <h1 className="text-5xl text-center font-bold">List of books</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden"></div>

            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="border-b border-neutral-200 dark:border-white/10 transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-150">
                  <th scope="col" className="px-6 py-4">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Member
                  </th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {books.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-neutral-200 dark:border-white/10 transition duration-300 ease-in-out hover:bg-neutral-100 dark:hover:bg-neutral-150"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {item.title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {item.author}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {item.member}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h1 className="text-3xl text-center font-bold mt-20">
                Choose a next book
              </h1>
              <button
                className="bg-gray-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full m-8"
                onClick={ handleButtonClick }
              
              >
                Generate Book
              </button>

              {showBookGenerator && <BookGenerator />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

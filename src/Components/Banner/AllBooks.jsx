import { use } from "react";
import BookCard from "../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books, "books");
  return (
    <div className="container mx-auto my-25">
      <h2 className="font-bold text-3xl text-center mb-[36px]">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book, ind) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;

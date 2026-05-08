import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import { BookContext } from "../../context/BookContext";

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  console.log(bookParamsId, "bookId");

  // const books = use(booksPromise);

  const books = useLoaderData();
  console.log(books, "books");

  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId),
  );
  // console.log(expectedBook, "expectedBook")

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkAsRead, handleWishList } = useContext(BookContext);

  return (
    <div className="grid grid-cols-2 gap-12 container mx-auto my-13">
      <figure className="w-full flex items-center justify-center bg-[#13131305] rounded-2xl p-18.25">
        <img src={image} alt="Album" className="h-141 w-106.25" />
      </figure>
      <div>
        <h2 className="card-title text-[40px] font-bold mb-4">{bookName}</h2>
        <h2 className="card-title mb-6 text-base text-[#13131380]">
          By: {author}
        </h2>
        <div className="flex flex-col space-y-4 mb-6">
          <div className="border-t border-[#13131315]"></div>
          <p className="text-[#13131380] text-base">{category}</p>
          <div className="border-b border-[#13131315]"></div>
        </div>
        <p className="mb-6"><span className="font-bold text-base">Review: </span>{review}</p>
        <div className="flex items-center gap-4 mb-6">
          <span className="font-bold text-base">Tag</span>
          {tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge text-[#23BE0A] bg-[#23BE0A10] text-base rounded-full font-bold"
            >
              #{tag}
            </div>
          ))}
        </div>
        <div className="border-t border-[#13131315]">
          <div className="flex justify-between items-center mt-6 mb-3">
            <span className="text-[#13131370] text-base">Number of pages: </span> <span className="font-semibold text-base">{totalPages}</span>
          </div>
          <div className="flex justify-between items-center gap-2 mb-3">
            <span className="text-[#13131370] text-base">publisher: </span> <span className="font-semibold text-base">{publisher}</span>
          </div>
          <div className="flex justify-between items-center gap-2 space-y-3">
            <span className="text-[#13131370] text-base">Publish time: </span> <span className="font-semibold text-base">{yearOfPublishing}</span>
          </div>
          <div className="flex justify-between items-center gap-2 mb-8">
            <span className="text-[#13131370] text-base">Rating: </span> <span className="font-semibold text-base">{rating}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="btn bg-[#13131330] rounded-lg font-semibold text-lg"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark as Read
            </button>
            <button
              className="btn bg-[#50B1C9] rounded-lg text-lg"
              onClick={() => handleWishList(expectedBook)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

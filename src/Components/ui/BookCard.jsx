import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card border border-[#13131315] rounded-2xl p-6 shadow-sm"
    >
      <div className="rounded-2xl bg-[#F3F3F3] py-8 px-24 mb-6">
        <figure>
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded-xl h-41.5 w-33.5"
          />
        </figure>
      </div>
      <div>
        <div className="space-y-4">
          <div className="flex justify-start items-center gap-3">
            {book.tags.map((tag, ind) => (
              <div
                key={ind}
                className="badge text-[#23BE0A] text-base bg-[#23BE0A10] rounded-[30px] px-4 py-2"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="font-bold text-2xl">{book.bookName}</h2>
          <p className="text-[#13131380] text-base">By: {book.author}</p>

          <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
            <div className="text-base text-[#13131380]">{book.category}</div>
            <div className="flex gap-2 items-center text-base text-[#13131380]">
              {book.rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

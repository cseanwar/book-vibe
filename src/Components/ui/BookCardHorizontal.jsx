import React from "react";
import { FaRegStar, FaRegCalendarAlt, FaRegFileAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePublish } from "react-icons/md";
import { Link } from "react-router";

const BookCardHorizontal = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags = [],
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="flex gap-6 bg-white border border-[#13131315] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#23BE0A40] transition-all duration-300">

      {/* Book Cover */}
      <div className="shrink-0 w-57.5 h-57.25 rounded-xl overflow-hidden bg-[#13131310] flex items-center justify-center py-7 px-12.5">
        <img
          src={image}
          alt={bookName}
          className="h-43 w-32.25 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 min-w-0 py-1">

        {/* Title */}
        <h3 className="font-bold text-xl text-[#131313] leading-snug mb-1">
          {bookName}
        </h3>

        {/* Author */}
        <p className="flex items-center gap-1.5 text-sm text-[#13131380] mb-3">
          <IoPersonOutline />
          By : <span className="font-medium">{author}</span>
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="text-sm font-semibold text-[#131313]">Tag :</span>
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-sm font-semibold text-[#23BE0A] bg-[#23BE0A10] px-3 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Publisher / Pages / Year */}
        <div className="flex flex-wrap items-center gap-5 text-sm text-[#13131380] mb-3">
          <span className="flex items-center gap-1.5">
            <MdOutlinePublish className="text-base" />
            Publisher : <span className="font-medium text-[#131313]">{publisher}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <FaRegFileAlt />
            Page <span className="font-medium text-[#131313]">{totalPages}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <FaRegCalendarAlt />
            Year of Publishing : <span className="font-medium text-[#131313]">{yearOfPublishing}</span>
          </span>
        </div>

        {/* Bottom row: category badge, rating badge, view details */}
        <div className="flex flex-wrap items-center gap-2 border-t border-dashed border-gray-300 pt-3">
          <span className="text-sm font-semibold text-[#328EFF] bg-[#328EFF15] border border-[#328EFF30] px-4 py-1 rounded-full">
            Category : {category}
          </span>
          <span className="text-sm font-semibold text-[#FFAC33] bg-[#FFAC3315] border border-[#FFAC3330] px-4 py-1 rounded-full flex items-center gap-1.5">
            Rating : {rating} <FaRegStar />
          </span>
          <Link
            to={`/bookDetails/${bookId}`}
            className="ml-auto text-sm font-bold bg-[#23BE0A] hover:bg-[#1da809] text-white px-5 py-1.5 rounded-full transition-colors duration-200"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BookCardHorizontal;
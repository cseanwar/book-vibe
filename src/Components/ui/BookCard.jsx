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

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaRegBookmark, FaRegCalendarAlt, FaRegFileAlt } from "react-icons/fa";
// import { MdOutlinePublish } from "react-icons/md";
// import { IoPersonOutline } from "react-icons/io5";
// import { Link } from "react-router";

// const BookCard = ({ book }) => {
//   const {
//     bookId,
//     bookName,
//     author,
//     image,
//     totalPages,
//     rating,
//     category,
//     tags = [],
//     publisher,
//     yearOfPublishing,
//   } = book;

//   const getRatingColor = (r) => {
//     if (r >= 4.7) return "bg-green-100 text-green-700 border-green-200";
//     if (r >= 4.4) return "bg-blue-100 text-blue-700 border-blue-200";
//     if (r >= 4.0) return "bg-yellow-100 text-yellow-700 border-yellow-200";
//     return "bg-red-100 text-red-700 border-red-200";
//   };

//   const getCategoryColor = (cat) => {
//     const map = {
//       Classic: "bg-purple-100 text-purple-700 border-purple-200",
//       Fiction: "bg-blue-100 text-blue-700 border-blue-200",
//       Fantasy: "bg-emerald-100 text-emerald-700 border-emerald-200",
//       Mystery: "bg-orange-100 text-orange-700 border-orange-200",
//     };
//     return map[cat] || "bg-gray-100 text-gray-700 border-gray-200";
//   };

//   return (
//     <div className="group flex gap-5 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300">
//       {/* Book Cover */}
//       <div className="flex-shrink-0 w-28 h-36 rounded-xl overflow-hidden shadow-md border border-gray-100">
//         <img
//           src={image}
//           alt={bookName}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex flex-col justify-between flex-1 min-w-0">
//         {/* Top */}
//         <div>
//           {/* Title */}
//           <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1 truncate">
//             {bookName}
//           </h3>

//           {/* Author */}
//           <p className="flex items-center gap-1.5 text-sm text-gray-500 mb-3">
//             <IoPersonOutline className="text-gray-400" />
//             By: <span className="font-medium text-gray-600">{author}</span>
//           </p>

//           {/* Tags */}
//           {tags.length > 0 && (
//             <div className="flex items-center flex-wrap gap-2 mb-3">
//               <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
//                 Tag:
//               </span>
//               {tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="text-xs font-semibold text-green-600 bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* Meta row */}
//           <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 border-t border-dashed border-gray-200 pt-3 mb-3">
//             <span className="flex items-center gap-1.5">
//               <MdOutlinePublish className="text-gray-400 text-sm" />
//               Publisher: <span className="font-medium text-gray-700">{publisher}</span>
//             </span>
//             <span className="flex items-center gap-1.5">
//               <FaRegFileAlt className="text-gray-400" />
//               Page <span className="font-medium text-gray-700">{totalPages}</span>
//             </span>
//             <span className="flex items-center gap-1.5">
//               <FaRegCalendarAlt className="text-gray-400" />
//               Year of Publishing:{" "}
//               <span className="font-medium text-gray-700">{yearOfPublishing}</span>
//             </span>
//           </div>
//         </div>

//         {/* Bottom: badges + button */}
//         <div className="flex flex-wrap items-center gap-2 mt-1">
//           <span
//             className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryColor(category)}`}
//           >
//             Category: {category}
//           </span>
//           <span
//             className={`text-xs font-semibold px-3 py-1 rounded-full border ${getRatingColor(rating)}`}
//           >
//             Rating: {rating}
//           </span>
//           <Link
//             to={`/books/${bookId}`}
//             className="ml-auto text-xs font-bold bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full transition-colors duration-200 shadow-sm"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

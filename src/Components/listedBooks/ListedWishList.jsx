// import React, { useContext, useEffect, useState } from "react";
// import { BookContext } from "../../context/BookContext";
// import BookCard from "../ui/BookCard";

// const ListedWishList = ({ sortingType }) => {
//   const { wishList } = useContext(BookContext);
//   console.log(wishList, "bookContext");
//   const [filteredWishList, setFilteredWishList] = useState(wishList);

//   useEffect(() => {
//     if (sortingType) {
//       if (sortingType === "pages") {
//         const sortedData = [...wishList].sort(
//           (a, b) => a.totalPages - b.totalPages,
//         );
//         console.log(sortedData);
//         setFilteredWishList(sortedData);
//       } else if (sortingType === "rating") {
//         const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
//         console.log(sortedData);
//         setFilteredWishList(sortedData);
//       }
//     }
//   }, [sortingType, wishList]);

//   if (filteredWishList.length === 0) {
//     return (
//       <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
//         <h2 className="font-bold text-3xl">No wish list data found</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="my-8">
//       <div className="flex flex-col gap-6">
//         {filteredWishList.map((book, ind) => (
//           <BookCard key={ind} book={book} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListedWishList;

import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import BookCardHorizontal from "../ui/BookCardHorizontal";
import { FaRegBookmark } from "react-icons/fa";

const ListedWishList = ({ sortingType }) => {
  const { wishList } = useContext(BookContext);
  const [filteredWishList, setFilteredWishList] = useState(wishList);

  useEffect(() => {
    if (sortingType === "pages") {
      setFilteredWishList([...wishList].sort((a, b) => a.totalPages - b.totalPages));
    } else if (sortingType === "rating") {
      setFilteredWishList([...wishList].sort((a, b) => b.rating - a.rating));
    } else {
      setFilteredWishList(wishList);
    }
  }, [sortingType, wishList]);

  if (filteredWishList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-60 bg-[#F3F3F3] rounded-2xl border-2 border-dashed border-gray-200 my-8">
        <FaRegBookmark className="text-5xl text-gray-300 mb-4" />
        <h2 className="font-bold text-xl text-[#13131380]">No wish list data found</h2>
        <p className="text-sm text-[#13131380] mt-1">Browse books and add them to your wishlist!</p>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="flex flex-col gap-4">
        {filteredWishList.map((book) => (
          <BookCardHorizontal key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;